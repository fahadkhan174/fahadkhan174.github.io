<script lang="ts">
	import { onMount } from 'svelte';
	import Arrow from '$lib/components/Arrow.svelte';
	import FlowDiagram from '$lib/components/FlowDiagram.svelte';
	import ProjectArt from '$lib/components/ProjectArt.svelte';
	import { profile } from '$lib/content';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const project = $derived(data.project);
	const next = $derived(data.next);
	const chapters = $derived([
		{ id: 'case-context', label: 'The problem' },
		{ id: 'case-architecture', label: 'Architecture' },
		...project.sections.map((section, i) => ({ id: `case-section-${i}`, label: section.title }))
	]);

	let activeChapter = $state('case-context');

	function updateChapter() {
		const probe = window.innerHeight * 0.3;
		let current = chapters[0]?.id ?? '';

		for (const chapter of chapters) {
			const element = document.getElementById(chapter.id);
			if (element && element.getBoundingClientRect().top <= probe) current = chapter.id;
		}

		activeChapter = current;
	}

	$effect(() => {
		// Re-bind when client-side navigation swaps the case study.
		project.slug;
		activeChapter = chapters[0]?.id ?? '';
		updateChapter();

		window.addEventListener('scroll', updateChapter, { passive: true });
		window.addEventListener('resize', updateChapter, { passive: true });

		return () => {
			window.removeEventListener('scroll', updateChapter);
			window.removeEventListener('resize', updateChapter);
		};
	});

	onMount(() => {
		// Deep links land mid-page; make sure the chapter marker follows.
		updateChapter();
	});
</script>

<article class="case">
	<header class="case-hero">
		<div class="container-x">
			<nav class="case-breadcrumb" aria-label="Breadcrumb">
				<a href="/work" class="case-back">
					<svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true">
						<path
							d="M13 8H3M7.5 3.5 3 8l4.5 4.5"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					All work
				</a>
				<span aria-hidden="true" class="opacity-40">/</span>
				<span>Case study {project.index}</span>
			</nav>

			<p class="eyebrow mt-10">{project.kicker} · {project.period}</p>

			<h1 class="case-title">{project.headline}</h1>

			<p class="case-lede">{project.summary}</p>

			<dl class="case-facts">
				<div>
					<dt>Client</dt>
					<dd>{project.org}</dd>
				</div>
				<div>
					<dt>Role</dt>
					<dd>{project.role}</dd>
				</div>
				<div>
					<dt>Period</dt>
					<dd>{project.period}</dd>
				</div>
				<div>
					<dt>Focus</dt>
					<dd>{project.focus}</dd>
				</div>
			</dl>
		</div>
	</header>

	<figure class="case-figure">
		<div class="container-x">
			<div class="case-art">
				<ProjectArt variant={project.art} size="hero" />
			</div>
		</div>
		<figcaption class="container-x">
			System sketch — an illustration of the architecture, not a screenshot of the product.
		</figcaption>
	</figure>

	<div class="container-x case-body">
		<div class="case-main">
			<section aria-labelledby="case-context">
				<p class="eyebrow">Context</p>
				<h2 id="case-context" class="case-h2">The problem</h2>
				{#each project.context as paragraph}
					<p class="case-p">{paragraph}</p>
				{/each}
			</section>

			<section aria-labelledby="case-architecture">
				<p class="eyebrow">Architecture</p>
				<h2 id="case-architecture" class="case-h2">How the pieces fit together</h2>
				<FlowDiagram nodes={project.flow} />
			</section>

			{#each project.sections as section, i (section.title)}
				<section aria-labelledby={`case-section-${i}`}>
					<p class="eyebrow">Detail 0{i + 1}</p>
					<h2 id={`case-section-${i}`} class="case-h2">{section.title}</h2>
					{#each section.body as paragraph}
						<p class="case-p">{paragraph}</p>
					{/each}
				</section>
			{/each}
		</div>

		<aside class="case-aside" aria-label="Project summary">
			<nav class="case-toc" aria-label="On this page">
				<h2 class="eyebrow">On this page</h2>
				<ol>
					{#each chapters as chapter (chapter.id)}
						<li>
							<a
								href={`#${chapter.id}`}
								class:active={activeChapter === chapter.id}
								aria-current={activeChapter === chapter.id ? 'location' : undefined}
							>
								{chapter.label}
							</a>
						</li>
					{/each}
				</ol>
			</nav>

			<div>
				<h2 class="eyebrow">Stack</h2>
				<ul class="mt-3 flex flex-wrap gap-2">
					{#each project.stack as tech (tech)}
						<li class="chip">{tech}</li>
					{/each}
				</ul>
			</div>

			<div>
				<h2 class="eyebrow">Elsewhere</h2>
				<ul class="mt-3 space-y-2.5">
					<li>
						<a href="/work" class="link-arrow">
							All work
							<Arrow />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/fahadkhan174"
							target="_blank"
							rel="noopener noreferrer"
							class="link-arrow"
						>
							GitHub
							<Arrow />
						</a>
					</li>
				</ul>
			</div>
		</aside>
	</div>

	<section class="case-next" aria-labelledby="case-next-title">
		<div class="container-x">
			<h2 id="case-next-title" class="eyebrow">Next case study</h2>

			<a href={`/work/${next.slug}`} class="next-card">
				<span class="next-copy">
					<span class="next-meta">{next.index} — {next.org} · {next.period}</span>
					<span class="next-title">{next.title}</span>
					<span class="next-summary">{next.summary}</span>
				</span>
				<span class="next-arrow" aria-hidden="true"><Arrow /></span>
			</a>
		</div>
	</section>

	<section class="case-contact">
		<div class="container-x">
			<p class="eyebrow">Contact</p>
			<h2 class="case-contact-title">Let's build <br />something good.</h2>
			<a href="mailto:{profile.email}" class="cta-email">
				{profile.email}
				<Arrow />
			</a>
			<p class="text-muted mt-4 max-w-xs text-sm leading-relaxed">
				Currently at IBM. Email is the fastest way to reach me.
			</p>
		</div>
	</section>
</article>
