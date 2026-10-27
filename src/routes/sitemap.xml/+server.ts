import { projects, site } from '$lib/content';

export const prerender = true;

export function GET() {
	// Regenerated on every build, so lastmod always reflects the deployed content.
	const lastmod = new Date().toISOString().slice(0, 10);

	const urls = [
		{ loc: `${site.url}/`, changefreq: 'monthly', priority: '1.0' },
		{ loc: `${site.url}/work`, changefreq: 'monthly', priority: '0.9' },
		...projects.map((project) => ({
			loc: `${site.url}/work/${project.slug}`,
			changefreq: 'yearly',
			priority: '0.8'
		}))
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(url) => `	<url>
		<loc>${url.loc}</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>${url.changefreq}</changefreq>
		<priority>${url.priority}</priority>
	</url>`
	)
	.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: {
			'content-type': 'application/xml; charset=utf-8'
		}
	});
}
