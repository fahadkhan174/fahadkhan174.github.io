import { site } from '$lib/content';
import { websiteSchema } from '$lib/schema';

export function load() {
	return {
		seo: {
			title: site.title,
			description: site.description,
			image: '/og.png',
			imageAlt:
				'Mohd Fahad, Full Stack Engineer — building user-centric products with Java, Spring Boot and Svelte.',
			type: 'profile',
			schema: websiteSchema()
		}
	};
}
