/**
 * Rebuild the self-hosted Inter subset from the characters the site actually uses.
 * Run after editing copy: npm run font:subset
 */
import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import subsetFont from 'subset-font';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const SRC = join(ROOT, 'src');
const SOURCE = join(ROOT, 'scripts', 'fonts', 'inter-variable.woff2');
const TARGET = join(ROOT, 'static', 'fonts', 'inter-latin.woff2');

const EXTS = new Set(['.svelte', '.ts', '.js', '.html', '.css']);

async function walk(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const path = join(dir, entry.name);
		if (entry.isDirectory()) files.push(...(await walk(path)));
		else if (EXTS.has(extname(entry.name))) files.push(path);
	}
	return files;
}

const files = await walk(SRC);
const chars = new Set();

for (let code = 0x20; code <= 0x7e; code++) chars.add(String.fromCodePoint(code));

for (const file of files) {
	const text = await readFile(file, 'utf8');
	for (const char of text) {
		const code = char.codePointAt(0);
		if (code > 0xff) chars.add(char);
	}
}

const text = [...chars].join('');
const input = await readFile(SOURCE);
const before = (await stat(SOURCE)).size;
const output = await subsetFont(input, text, {
	targetFormat: 'woff2',
	// The site only sets 400–700; dropping the unused axis range saves extra bytes.
	variationAxes: { wght: { min: 400, max: 700 } }
});
await writeFile(TARGET, output);

console.log(
	`${files.length} source files · ${chars.size} glyphs · ${Math.round(before / 1024)} KB → ${Math.round(output.length / 1024)} KB`
);
