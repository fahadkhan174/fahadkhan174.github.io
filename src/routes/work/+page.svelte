<script lang="ts">
	import Arrow from '$lib/components/Arrow.svelte';
	import ProjectArt from '$lib/components/ProjectArt.svelte';
	import { profile, projects } from '$lib/content';
</script>

<header class="case-hero">
	<div class="container-x">
		<nav class="case-breadcrumb" aria-label="Breadcrumb">
			<a href="/" class="case-back">
				<svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true">
					<path
						d="M13 8H3M7.5 3.5 3 8l4.5 4.5"
						stroke="currentColor"
						stroke-width="1.4"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				Home
			</a>
			<span aria-hidden="true" class="opacity-40">/</span>
			<span aria-current="page">Work</span>
		</nav>

		<p class="eyebrow mt-10">Selected work · 01 — 03</p>

		<h1 class="case-title">Case studies.</h1>

		<p class="case-lede">
			Three projects from the last four years: an enterprise platform moving off a legacy system,
			the shared libraries other teams build on, and a documentation pipeline that ships itself.
			Most of the code lives behind company walls — the architecture is the part I can show.
		</p>
	</div>
</header>

<section class="pb-16 md:pb-24" aria-label="Case studies">
	<div class="container-x">
		<div class="space-y-5">
			{#each projects as project, i (project.slug)}
				<article class="project-card" class:flip={i % 2 === 1}>
					<div class="project-art">
						<ProjectArt variant={project.art} />
					</div>

					<div class="flex flex-col justify-center p-6 md:p-9">
						<div
							class="text-muted flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.6875rem]"
						>
							<span>{project.index}</span>
							<span class="bg-line h-px w-6"></span>
							<span>{project.org}</span>
							<span class="opacity-40">/</span>
							<span>{project.period}</span>
						</div>

						<h2 class="mt-4 text-2xl font-[550] tracking-[-0.02em] md:text-3xl">
							<a class="card-link" href={`/work/${project.slug}`}>{project.title}</a>
						</h2>

						<p class="text-muted mt-3 max-w-xl text-sm leading-relaxed md:text-base">
							{project.summary}
						</p>

						<div class="mt-6 flex flex-wrap gap-2">
							{#each project.stack as tech}
								<span class="chip">{tech}</span>
							{/each}
						</div>

						<span class="card-cta">
							Read case study
							<Arrow />
						</span>
					</div>
				</article>
			{/each}
		</div>

		<div class="mt-10 flex flex-wrap items-center justify-between gap-4">
			<a href="/#experience" class="link-arrow">
				Full experience
				<Arrow />
			</a>
			<a href="mailto:{profile.email}" class="link-arrow">
				Get in touch
				<Arrow />
			</a>
		</div>
	</div>
</section>
