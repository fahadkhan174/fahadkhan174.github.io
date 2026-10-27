import { error } from '@sveltejs/kit';
import { getNextProject, getProject, projects } from '$lib/content';
import { caseStudySchema } from '$lib/schema';

export const prerender = true;

export const entries = () => projects.map((project) => ({ slug: project.slug }));

export function load({ params }) {
	const project = getProject(params.slug);

	if (!project) {
		error(404, 'That case study does not exist.');
	}

	return {
		project,
		next: getNextProject(params.slug),
		seo: {
			title: `${project.title} — ${project.org} | Mohd Fahad`,
			description: project.seoDescription,
			image: project.ogImage,
			imageAlt: `${project.title} — a case study by Mohd Fahad`,
			type: 'article',
			schema: caseStudySchema(project)
		}
	};
}
