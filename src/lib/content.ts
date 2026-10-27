export const site = {
	name: 'Mohd Fahad',
	url: 'https://fahadkhan174.github.io',
	title: 'Mohd Fahad — Full Stack Engineer',
	description:
		'Full Stack Engineer at IBM building user-centric products with Java, Spring Boot, React and SvelteKit.'
};

export const profile = {
	name: 'Mohd Fahad',
	role: 'Full Stack Engineer',
	company: 'IBM',
	statement:
		'I build user-centric products end to end — from Spring Boot services and data layers to the interfaces people actually use.',
	email: 'fahadkhan174@gmail.com',
	stack: ['Java', 'Spring Boot', 'JavaScript', 'React', 'SvelteKit'],
	since: '2016'
};

export type Social = {
	label: string;
	handle: string;
	href: string;
};

export const socials: Social[] = [
	{ label: 'GitHub', handle: '@fahadkhan174', href: 'https://github.com/fahadkhan174' },
	{
		label: 'LinkedIn',
		handle: 'in/mohd-fahad',
		href: 'https://www.linkedin.com/in/mohd-fahad-123205101/'
	},
	{ label: 'Instagram', handle: '@fahad_clicks_', href: 'https://instagram.com/fahad_clicks_' }
];

export type FlowNode = {
	label: string;
	detail: string;
};

export type CaseSection = {
	title: string;
	body: string[];
};

export type Project = {
	slug: string;
	index: string;
	title: string;
	org: string;
	period: string;
	summary: string;
	seoDescription: string;
	points: string[];
	stack: string[];
	art: 'arcs' | 'grid' | 'layers';
	kicker: string;
	headline: string;
	role: string;
	focus: string;
	context: string[];
	sections: CaseSection[];
	flow: FlowNode[];
	ogImage: string;
};

export const projects: Project[] = [
	{
		slug: 'cloud-data-migration',
		index: '01',
		title: 'Cloud data migration',
		org: 'IBM · IBM Italy',
		period: '2023 — Present',
		summary:
			'Moving a cross-platform enterprise application onto Spring Boot microservices, including the bridge that keeps IBM DB2 data live in the new interface until the legacy system sunsets.',
		seoDescription:
			'How a Spring Boot microservice stack kept IBM DB2 data live inside a new Angular interface during a legacy platform migration.',
		points: [
			'Cookie-based authentication and session APIs designed for front-end integration',
			'Node.js backup pipeline from Cloudant into S3 through the IBM COS SDK'
		],
		stack: ['Spring Boot', 'Angular', 'DB2', 'Cloudant', 'IBM COS'],
		art: 'arcs',
		kicker: 'Enterprise modernisation',
		headline: 'A new front end, without a big-bang data migration.',
		role: 'Full Stack Engineer',
		focus: 'Session APIs, DB2 bridge, front-end integration',
		context: [
			'IBM Italy’s platform was moving from a legacy application to a Spring Boot microservice stack with an Angular front end. The hard part was not the rewrite itself — it was keeping the existing DB2 data usable in the new interface while the old system was still running.',
			'I worked across the seam: the APIs the new front end calls, the data bridge to the legacy records, and the documentation that keeps both sides honest.'
		],
		sections: [
			{
				title: 'Session and auth APIs',
				body: [
					'Designed cookie-based authentication and session endpoints so the Angular client could hold a consistent identity across the new services. The contract was built for front-end integration first: predictable payloads, explicit error states, and no assumptions about which service handled the request.',
					'Standardised API documentation with Javadoc-Scribe so the generated Swagger output stays aligned with controller changes instead of drifting away from them.'
				]
			},
			{
				title: 'The DB2 bridge',
				body: [
					'Rather than freeze the new interface until the migration finished, I kept DB2 data available through the new stack. That let the product move forward while the legacy application ran down — and kept a single source of truth in the meantime.'
				]
			},
			{
				title: 'Reporting and backups',
				body: [
					'Integrated Apache POI, Java Email and the newer Cloudant SDK for reporting and metrics, and built a Node.js backup pipeline that moves Cloudant data into S3 through the IBM COS SDK.'
				]
			}
		],
		flow: [
			{ label: 'Angular client', detail: 'The new interface' },
			{ label: 'Session API', detail: 'Cookie auth and session state' },
			{ label: 'Spring Boot services', detail: 'Business logic in microservices' },
			{ label: 'DB2', detail: 'System of record, kept live' },
			{ label: 'Cloudant → IBM COS', detail: 'Backups, reporting and metrics' }
		],
		ogImage: '/og/cloud-data-migration.png'
	},
	{
		slug: 'platform-libraries',
		index: '02',
		title: 'Platform libraries',
		org: 'IBM · American Express',
		period: '2022 — 2023',
		summary:
			'Maintaining the shared Kafka and REST client libraries other teams depend on, alongside schedulers that keep production data clean.',
		seoDescription:
			'Maintaining the Kafka and REST client libraries multiple product teams depend on, plus the scheduler scripts that keep production data clean.',
		points: [
			'Version upgrades and troubleshooting across a set of platform repositories',
			'Scheduler scripts for database cleanup, redundant data and one-off fixes'
		],
		stack: ['Spring Boot', 'Vert.x', 'Couchbase', 'Kafka'],
		art: 'grid',
		kicker: 'Platform engineering',
		headline: 'Shared libraries are infrastructure. I treated them that way.',
		role: 'Full Stack Engineer',
		focus: 'Kafka and REST clients, dependency upgrades, production support',
		context: [
			'At American Express, several product teams depended on the same Kafka and REST client libraries. A change in one of them could ripple through every service that consumed it.',
			'My job was to keep those libraries current and dependable — dependency upgrades, code review, troubleshooting in production, and the scheduler scripts that kept data clean.'
		],
		sections: [
			{
				title: 'Upgrades without surprises',
				body: [
					'Moved the shared libraries through version upgrades and resolved the fallout across the repositories that depended on them. The goal each time was the same: no downstream team should discover the change in production.',
					'That meant reading the consumers as carefully as the library, reviewing changes with the teams affected, and keeping the upgrade path small enough to reason about.'
				]
			},
			{
				title: 'Production is the real test',
				body: [
					'Handled troubleshooting when integrations misbehaved, tracing issues across Kafka consumers, REST clients and Couchbase. That work fed straight back into how the libraries were maintained — a fix in one service often became a guardrail in the shared code.'
				]
			},
			{
				title: 'Scheduled cleanup',
				body: [
					'Wrote scheduler scripts for database cleanup, removing redundant data and applying one-off fixes when the normal application path was not enough.'
				]
			}
		],
		flow: [
			{ label: 'Product teams', detail: 'Services that consume the libraries' },
			{ label: 'Client libraries', detail: 'Kafka and REST abstractions' },
			{ label: 'Spring Boot services', detail: 'Business services in production' },
			{ label: 'Kafka · Couchbase', detail: 'Messaging and persistence' },
			{ label: 'Scheduled jobs', detail: 'Cleanup and data fixes' }
		],
		ogImage: '/og/platform-libraries.png'
	},
	{
		slug: 'docs-delivery-pipeline',
		index: '03',
		title: 'Docs delivery pipeline',
		org: 'TCS · Microsoft',
		period: '2022',
		summary:
			'An end-to-end publishing feature that turns repository documentation into hosted content, from source markdown to the page a reader lands on.',
		seoDescription:
			'Building a docfx → Azure Blob Storage → web app pipeline that turns repository markdown into hosted documentation.',
		points: [
			'docfx-generated blobs stored in Azure and served through a deployed web app',
			'Contributed to a monolith-to-microservices migration with a React front end'
		],
		stack: ['Spring Boot', 'React', 'Azure Blob', 'docfx'],
		art: 'layers',
		kicker: 'Developer tooling',
		headline: 'Documentation that ships itself.',
		role: 'Full Stack Engineer',
		focus: 'docfx pipeline, Azure Blob Storage, React front end',
		context: [
			'Repository documentation usually dies in a wiki nobody updates. On the Microsoft account, the goal was to make docs part of the delivery pipeline: generated from the source repository, stored centrally, and served like any other product.',
			'I built the path from markdown to a hosted page, and contributed to the wider monolith-to-microservices migration alongside it.'
		],
		sections: [
			{
				title: 'From markdown to blob',
				body: [
					'docfx generated the documentation output, which was stored in Azure Blob Storage and served through a deployed web app. Publishing became a pipeline step rather than a manual chore, and the docs moved at the same pace as the code they described.'
				]
			},
			{
				title: 'Part of a bigger migration',
				body: [
					'The docs work sat inside a monolith-to-microservices migration. I contributed to moving application capabilities onto Spring Boot services with a React front end, so the documentation pipeline landed in the same delivery model as the rest of the product.'
				]
			}
		],
		flow: [
			{ label: 'Repository markdown', detail: 'Docs live next to the code' },
			{ label: 'docfx build', detail: 'Static documentation output' },
			{ label: 'Azure Blob Storage', detail: 'Generated files stored centrally' },
			{ label: 'Web app', detail: 'Deployed Spring Boot + React' },
			{ label: 'Reader', detail: 'Documentation served as a product' }
		],
		ogImage: '/og/docs-delivery-pipeline.png'
	}
];

export function getProject(slug: string) {
	return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
	const index = projects.findIndex((project) => project.slug === slug);
	return index === -1 ? projects[0] : projects[(index + 1) % projects.length];
}

export type Experience = {
	company: string;
	client?: string;
	period: string;
	summary: string;
	points: string[];
	stack: string[];
	current?: boolean;
};

export const experience: Experience[] = [
	{
		company: 'IBM',
		client: 'IBM Italy',
		period: 'Nov 2023 — Present',
		summary:
			'Enterprise platform modernisation: Spring Boot microservices, an Angular front end, and a live data bridge from DB2.',
		points: [
			'Designed cookie-based authentication and session APIs that let the new front end talk to the platform.',
			'Kept IBM DB2 data available in the new interface while the legacy application runs down.',
			'Standardised API documentation with Javadoc-Scribe so Swagger output stays in sync with controllers.',
			'Integrated Apache POI, Java Email and the newer Cloudant SDK for reporting and metrics.'
		],
		stack: ['Spring Boot', 'Angular', 'DB2', 'Cloudant', 'IBM COS', 'Node.js'],
		current: true
	},
	{
		company: 'IBM',
		client: 'American Express',
		period: 'Dec 2022 — Nov 2023',
		summary: 'Shared platform libraries and data tooling used by multiple product teams.',
		points: [
			'Maintained Kafka and REST client libraries consumed as dependencies across teams.',
			'Owned dependency upgrades, code review and production troubleshooting.',
			'Wrote scheduler scripts for database cleanup, redundant data and data fixes.'
		],
		stack: ['Spring Boot', 'Vert.x', 'Couchbase', 'Kafka']
	},
	{
		company: 'TCS',
		client: 'Microsoft',
		period: 'Apr 2022 — Aug 2022',
		summary: 'Monolith-to-microservices migration and a documentation pipeline on Azure.',
		points: [
			'Built a docfx → Azure Blob Storage → web app pipeline for repository documentation.',
			'Migrated application capabilities to Spring Boot microservices with a React front end.'
		],
		stack: ['Spring Boot', 'React', 'Azure', 'docfx']
	},
	{
		company: 'TCS',
		client: 'Motorola Solutions',
		period: 'Jan 2021 — Feb 2022',
		summary: 'Front-end feature delivery in React, Redux Thunk and Material UI.',
		points: ['Shipped interface features and joined requirement analysis and design discussions.'],
		stack: ['React', 'Redux Thunk', 'Material UI']
	},
	{
		company: 'TCS',
		client: 'Royal Bank of Scotland',
		period: 'Jan 2019 — Dec 2020',
		summary: 'React components built against a customer WebSDK for a banking platform.',
		points: [
			'Built reusable UI components with Redux, React Bootstrap and React-Table.',
			'Wrote design documents for features moving onto the new technology stack.'
		],
		stack: ['React', 'Redux', 'React Bootstrap']
	},
	{
		company: 'TCS',
		client: 'Astellas Pharma',
		period: 'Sep 2017 — Dec 2018',
		summary: 'Spring MVC services on MongoDB, with first-line application support.',
		points: [
			'Built proof-of-concepts on Java, Spring and MongoDB and gathered requirements for new features.'
		],
		stack: ['Java', 'Spring MVC', 'MongoDB']
	},
	{
		company: 'TCS',
		client: 'Projects & Development India',
		period: 'Aug 2016 — Aug 2017',
		summary: 'Documentum customisations and scheduled Java reporting jobs.',
		points: ['Created Documentum custom actions in Java and cron-driven periodic reports.'],
		stack: ['Java', 'Documentum']
	}
];

export const skillGroups = [
	{ title: 'Languages', items: ['Java', 'JavaScript', 'TypeScript'] },
	{ title: 'Backend', items: ['Spring Boot', 'Node.js', 'REST APIs', 'Maven', 'Gradle'] },
	{ title: 'Frontend', items: ['React', 'SvelteKit', 'Tailwind CSS', 'Material UI', 'Mantine'] },
	{ title: 'Data', items: ['DB2', 'Cloudant', 'Couchbase', 'MongoDB', 'MySQL'] },
	{ title: 'Cloud & Ops', items: ['IBM COS', 'AWS S3', 'Azure Blob', 'GitHub Actions'] },
	{ title: 'Tools', items: ['IntelliJ', 'VS Code', 'Git', 'SQL Developer'] }
];

export const stackLayers = [
	{ name: 'Client', tech: 'React · SvelteKit · Tailwind' },
	{ name: 'API', tech: 'Spring Boot · Node.js · REST' },
	{ name: 'Data', tech: 'DB2 · Cloudant · Couchbase' },
	{ name: 'Cloud', tech: 'IBM COS · AWS S3 · Azure' }
];
