<script lang="ts">
	import Arrow from '@/lib/components/Arrow.svelte';
	import ProjectArt from '@/lib/components/ProjectArt.svelte';
	import { inview } from '@/lib/actions/inview';
	import { magnetic } from '@/lib/actions/magnetic';
	import { spotlight } from '@/lib/actions/spotlight';
	import { tilt } from '@/lib/actions/tilt';
	import { experience, profile, projects, skillGroups, socials, stackLayers } from '@/lib/content';
</script>

<!-- Hero -->
<section id="about" class="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24" use:spotlight>
	<div class="hero-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true"></div>
	<div class="hero-spot" aria-hidden="true"></div>

	<div class="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
		<div class="hero-in">
			<p class="eyebrow flex items-center gap-2">
				<span class="bg-accent inline-block h-1.5 w-1.5 rounded-full"></span>
				{profile.role} <span class="text-line">/</span>
				{profile.company}
			</p>

			<h1 class="hero-title">
				Hi, I'm <br />Fahad<span class="accent-mark">.</span>
			</h1>

			<p class="lead mt-7 max-w-xl">
				{profile.statement}
			</p>

			<div class="mt-9 flex flex-wrap items-center gap-3">
				<a href="#work" class="btn btn-primary" use:magnetic>
					View selected work
					<Arrow />
				</a>
				<a href="#contact" class="btn btn-ghost">Get in touch</a>
			</div>

			<p class="hero-meta mt-10">
				Since {profile.since} · {profile.stack.join(' · ')}
			</p>
		</div>

		<div class="stack-panel" aria-hidden="true">
			<div class="stack-head">
				<span>System map</span>
				<span class="flex items-center gap-1.5">
					<span class="bg-accent inline-block h-1.5 w-1.5 rounded-full"></span>
					full stack
				</span>
			</div>

			{#each stackLayers as layer, i}
				<div class="stack-row">
					<span class="stack-idx">0{i + 1}</span>
					<span class="stack-name">{layer.name}</span>
					<span class="stack-tech">{layer.tech}</span>
				</div>
			{/each}

			<p class="text-muted mt-4 px-1 font-mono text-[0.625rem] leading-relaxed">
				One engineer across the whole stack — from the request to the record.
			</p>
		</div>
	</div>
</section>

<!-- Selected work -->
<section id="work" class="border-line border-t py-16 md:py-24">
	<div class="container-x">
		<div class="flex flex-wrap items-end justify-between gap-6">
			<div>
				<p class="eyebrow">01 — Selected work</p>
				<h2 class="section-title">Things I've shipped</h2>
			</div>
			<p class="text-muted max-w-xs text-sm leading-relaxed">
				Three case studies from the last four years. Most of the code lives behind company walls —
				the architecture is the part I can show.
			</p>
		</div>

		<div class="mt-12 space-y-5">
			{#each projects as project, i (project.index)}
				<article class="project-card" class:flip={i % 2 === 1} use:inview use:tilt data-reveal>
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

						<h3 class="mt-4 text-2xl font-[550] tracking-[-0.02em] md:text-3xl">
							<a class="card-link" href={`/work/${project.slug}`}>{project.title}</a>
						</h3>

						<p class="text-muted mt-3 max-w-xl text-sm leading-relaxed md:text-base">
							{project.summary}
						</p>

						<ul class="mt-5 space-y-2">
							{#each project.points as point}
								<li class="flex gap-3 text-sm leading-relaxed">
									<span class="bg-accent mt-2 h-1 w-1 shrink-0 rounded-full"></span>
									<span>{point}</span>
								</li>
							{/each}
						</ul>

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

		<div class="mt-8 flex flex-wrap items-center justify-between gap-4">
			<a href="/work" class="link-arrow">
				All case studies
				<Arrow />
			</a>
			<a
				href="https://github.com/fahadkhan174"
				target="_blank"
				rel="me noopener noreferrer"
				class="link-arrow"
			>
				More on GitHub
				<Arrow />
			</a>
		</div>
	</div>
</section>

<!-- Toolkit -->
<section id="toolkit" class="border-line border-t py-16 md:py-24">
	<div class="container-x grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
		<div>
			<p class="eyebrow">02 — Toolkit</p>
			<h2 class="section-title">The stack I reach for.</h2>
			<p class="text-muted mt-5 max-w-sm text-sm leading-relaxed">
				Java and Spring Boot for the services, React or SvelteKit for the interface, and whichever
				managed database fits the shape of the data.
			</p>
		</div>

		<div class="grid gap-x-8 gap-y-8 sm:grid-cols-2">
			{#each skillGroups as group (group.title)}
				<div class="border-line border-t pt-4" use:inview data-reveal>
					<h3 class="text-muted font-mono text-[0.6875rem] tracking-[0.16em] uppercase">
						{group.title}
					</h3>
					<ul class="mt-3 flex flex-wrap gap-2">
						{#each group.items as item}
							<li class="chip">{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Experience -->
<section id="experience" class="border-line border-t py-16 md:py-24">
	<div class="container-x">
		<div class="flex flex-wrap items-end justify-between gap-6">
			<div>
				<p class="eyebrow">03 — Experience</p>
				<h2 class="section-title">A decade of shipping</h2>
			</div>
			<p class="text-muted max-w-xs text-sm leading-relaxed">
				The short version: enterprise systems, modernisation work, and interfaces built to be used.
			</p>
		</div>

		<ol class="timeline mt-12">
			{#each experience as job, i (job.company + (job.client ?? '') + job.period)}
				<li class="timeline-item" class:current={job.current} use:inview data-reveal>
					<span class="timeline-dot" aria-hidden="true"></span>

					<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
						<h3 class="text-lg font-[550] tracking-[-0.01em] md:text-xl">
							{job.company}{#if job.client}<span class="text-muted">{` — ${job.client}`}</span>{/if}
						</h3>
						<span class="text-muted font-mono text-[0.6875rem] tracking-wide">{job.period}</span>
					</div>

					<p class="text-muted mt-2 max-w-2xl text-sm leading-relaxed">{job.summary}</p>

					<ul class="mt-3 space-y-1.5">
						{#each job.points as point}
							<li class="flex gap-2.5 text-sm leading-relaxed">
								<span class="bg-line mt-2 h-1 w-1 shrink-0 rounded-full"></span>
								<span>{point}</span>
							</li>
						{/each}
					</ul>

					<div class="mt-4 flex flex-wrap gap-2">
						{#each job.stack as tech}
							<span class="chip">{tech}</span>
						{/each}
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- Contact -->
<section id="contact" class="border-line border-t py-16 md:py-24">
	<div class="container-x">
		<p class="eyebrow">04 — Contact</p>

		<h2 class="mt-4 text-[clamp(2.6rem,7vw,5rem)] leading-[0.95] font-[560] tracking-[-0.045em]">
			Let's build <br />something good.
		</h2>

		<div class="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<a href="mailto:{profile.email}" class="cta-email">
				{profile.email}
				<Arrow />
			</a>
			<p class="text-muted max-w-xs text-sm leading-relaxed">
				Currently at IBM. Email is the fastest way to reach me.
			</p>
		</div>

		<div class="border-line mt-16 grid gap-8 border-t pt-8 sm:grid-cols-3">
			{#each socials as social (social.label)}
				<a
					href={social.href}
					target="_blank"
					rel="me noopener noreferrer"
					class="social-link group"
				>
					<span class="text-muted font-mono text-[0.625rem] tracking-[0.16em] uppercase">
						{social.label}
					</span>
					<span class="mt-1 flex items-center gap-2 text-sm">
						{social.handle}
						<Arrow class="social-arrow" />
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>
