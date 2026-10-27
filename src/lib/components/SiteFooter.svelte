<script lang="ts">
	import Arrow from '$lib/components/Arrow.svelte';
	import { profile, socials } from '$lib/content';

	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="container-x flex flex-col gap-6 py-9 md:flex-row md:items-center md:justify-between">
		<p class="font-mono text-[0.625rem] tracking-[0.14em] uppercase">© {year} {profile.name}</p>

		<ul class="flex flex-wrap items-center gap-x-6 gap-y-2">
			{#each socials as social (social.label)}
				<li>
					<a
						href={social.href}
						target="_blank"
						rel="me noopener noreferrer"
						class="footer-link font-mono text-[0.625rem] tracking-[0.14em] uppercase"
					>
						{social.label}
						<Arrow />
					</a>
				</li>
			{/each}
			<li>
				<a href="#top" class="footer-link font-mono text-[0.625rem] tracking-[0.14em] uppercase">
					Top
					<svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true">
						<path
							d="M8 13V3M3.5 7.5 8 3l4.5 4.5"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			</li>
		</ul>

		<p class="font-mono text-[0.625rem] tracking-[0.14em] uppercase">
			Built with SvelteKit &amp; Tailwind
		</p>
	</div>
</footer>
