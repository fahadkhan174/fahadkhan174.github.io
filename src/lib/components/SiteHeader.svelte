<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import ThemeToggle from './ThemeToggle.svelte';
	import { profile } from '$lib/content';

	const navItems = [
		{ id: 'work', label: 'Work' },
		{ id: 'toolkit', label: 'Toolkit' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'contact', label: 'Contact' }
	];

	let active = $state('');
	let progress = $state(0);
	let menuOpen = $state(false);
	let menuButton = $state<HTMLButtonElement | null>(null);
	let headerEl = $state<HTMLElement | null>(null);

	const home = $derived(page.url.pathname === '/');
	const logoHref = $derived(home ? '#about' : '/');
	const sectionHref = (id: string) => (home ? `#${id}` : `/#${id}`);

	function updateActive() {
		if (!home) {
			active = '';
			return;
		}

		const sections = [...document.querySelectorAll<HTMLElement>('main section[id]')];
		if (!sections.length) return;

		// The section crossing the upper third of the viewport is the one being read.
		const probe = window.innerHeight * 0.35;
		let current = sections[0].id;

		for (const section of sections) {
			if (section.getBoundingClientRect().top <= probe) current = section.id;
		}

		active = current;
	}

	$effect(() => {
		// Re-scan on every route change; the layout survives client-side navigation.
		page.url.pathname;
		menuOpen = false;
		updateActive();
	});

	onMount(() => {
		const updateProgress = () => {
			const root = document.documentElement;
			const max = root.scrollHeight - root.clientHeight;
			progress = max > 0 ? Math.min(1, Math.max(0, root.scrollTop / max)) : 0;
			updateActive();
		};

		updateProgress();
		window.addEventListener('scroll', updateProgress, { passive: true });
		window.addEventListener('resize', updateProgress, { passive: true });

		return () => {
			window.removeEventListener('scroll', updateProgress);
			window.removeEventListener('resize', updateProgress);
		};
	});

	function closeMenu() {
		menuOpen = false;
	}
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.key === 'Escape' && menuOpen) {
			menuOpen = false;
			menuButton?.focus();
		}
	}}
	onclick={(event) => {
		// Clicking anywhere outside the header dismisses the mobile menu.
		if (!menuOpen) return;
		const target = event.target;
		if (target instanceof Node && headerEl && !headerEl.contains(target)) {
			menuOpen = false;
		}
	}}
/>

<header bind:this={headerEl} class="site-header fixed inset-x-0 top-0 z-50">
	<div class="progress-bar" style:transform={`scaleX(${progress})`} aria-hidden="true"></div>

	<div class="container-x flex h-16 items-center justify-between">
		<a href={logoHref} class="flex items-center gap-2.5" onclick={closeMenu}>
			<span class="monogram" aria-hidden="true">FK</span>
			<span class="hidden text-sm font-medium tracking-tight sm:block">{profile.name}</span>
			<span class="sr-only">— back to top</span>
		</a>

		<div class="flex items-center gap-2 sm:gap-4">
			<nav class="hidden items-center gap-7 md:flex" aria-label="Primary">
				{#each navItems as item (item.id)}
					<a
						href={sectionHref(item.id)}
						class="nav-link"
						class:active={active === item.id}
						aria-current={active === item.id ? 'location' : undefined}
					>
						{item.label}
					</a>
				{/each}
			</nav>

			<ThemeToggle />

			<button
				bind:this={menuButton}
				type="button"
				class="menu-button md:hidden"
				aria-expanded={menuOpen}
				aria-controls="mobile-nav"
				onclick={() => (menuOpen = !menuOpen)}
			>
				<span class="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
				{#if menuOpen}
					<svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
						<path
							d="m5 5 10 10M15 5 5 15"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
					</svg>
				{:else}
					<svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
						<path
							d="M3 6h14M3 10h14M3 14h14"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	{#if menuOpen}
		<nav id="mobile-nav" class="mobile-nav md:hidden" aria-label="Mobile">
			{#each navItems as item (item.id)}
				<a href={sectionHref(item.id)} onclick={closeMenu}>
					{item.label}
				</a>
			{/each}
			<a href="mailto:{profile.email}" onclick={closeMenu}>Email</a>
		</nav>
	{/if}
</header>
