<script lang="ts">
	import { onMount } from 'svelte';

	let dark = $state(true);
	let settle: ReturnType<typeof setTimeout> | undefined;

	function syncMeta(isDark: boolean) {
		const meta = document.querySelector('meta[name="theme-color"]');
		if (meta) meta.setAttribute('content', isDark ? '#0a0a0b' : '#f4f2ed');
	}

	onMount(() => {
		dark = document.documentElement.classList.contains('dark');
		syncMeta(dark);
	});

	function toggle() {
		dark = !dark;

		const root = document.documentElement;

		// Swap palettes without animating every colour at once. Without this the
		// text transitions crawl through unreadable mid-tones on the way over.
		root.classList.add('theme-switching');
		root.classList.toggle('dark', dark);
		syncMeta(dark);

		try {
			localStorage.setItem('theme', dark ? 'dark' : 'light');
		} catch {
			// storage can be unavailable in private modes
		}

		clearTimeout(settle);
		settle = setTimeout(() => root.classList.remove('theme-switching'), 260);
	}
</script>

<button
	type="button"
	onclick={toggle}
	aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
	aria-pressed={dark}
	class="theme-toggle"
>
	{#if dark}
		<svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
			<circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.6" />
			<path
				d="M12 2.6v2.1M12 19.3v2.1M4.4 4.4l1.5 1.5M18.1 18.1l1.5 1.5M2.6 12h2.1M19.3 12h2.1M4.4 19.6l1.5-1.5M18.1 5.9l1.5-1.5"
				stroke="currentColor"
				stroke-width="1.6"
				stroke-linecap="round"
			/>
		</svg>
	{:else}
		<svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
			<path
				d="M20.5 14.3A8.6 8.6 0 0 1 9.7 3.5a8.6 8.6 0 1 0 10.8 10.8Z"
				stroke="currentColor"
				stroke-width="1.6"
				stroke-linejoin="round"
			/>
		</svg>
	{/if}
</button>
