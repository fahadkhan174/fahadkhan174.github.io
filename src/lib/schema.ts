import { site } from './content';

/** Serialise JSON-LD safely: `<` is escaped so a value can never close the script tag. */
export function jsonLd(data: unknown): string {
	return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
}

export function websiteSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: site.name,
		url: `${site.url}/`,
		description: site.description,
		inLanguage: 'en',
		publisher: {
			'@type': 'Person',
			name: site.name,
			url: site.url
		}
	};
}

export function workSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: `Work — ${site.name}`,
		url: `${site.url}/work`,
		description: 'Case studies on enterprise platform work, shared libraries and delivery tooling.',
		inLanguage: 'en',
		author: {
			'@type': 'Person',
			name: site.name,
			url: site.url
		}
	};
}

export function caseStudySchema(project: {
	slug: string;
	title: string;
	headline: string;
	summary: string;
	seoDescription: string;
	kicker: string;
	ogImage: string;
	stack: string[];
}) {
	const url = `${site.url}/work/${project.slug}`;

	const breadcrumb = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{ '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
			{ '@type': 'ListItem', position: 2, name: 'Work', item: `${site.url}/work` },
			{ '@type': 'ListItem', position: 3, name: project.title, item: url }
		]
	};

	// No datePublished/dateModified: the case studies describe ongoing work, not publications.
	const creativeWork = {
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: project.title,
		headline: project.headline,
		abstract: project.summary,
		description: project.seoDescription,
		url,
		image: `${site.url}${project.ogImage}`,
		inLanguage: 'en',
		genre: project.kicker,
		keywords: project.stack.join(', '),
		author: {
			'@type': 'Person',
			name: site.name,
			url: site.url
		},
		about: project.stack.map((name) => ({ '@type': 'Thing', name }))
	};

	return [breadcrumb, creativeWork];
}
