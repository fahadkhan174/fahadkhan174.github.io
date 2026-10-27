import { site } from '$lib/content';
import { workSchema } from '$lib/schema';

export const prerender = true;

export function load() {
	return {
		seo: {
			title: `Work — ${site.name}`,
			description:
				'Case studies on enterprise platform modernisation, shared Kafka and REST libraries, and documentation delivery pipelines.',
			image: '/og.png',
			imageAlt: 'Selected case studies by Fahad Khan',
			type: 'website',
			schema: workSchema()
		}
	};
}
