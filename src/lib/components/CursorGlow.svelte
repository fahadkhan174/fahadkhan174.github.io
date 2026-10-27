<script lang="ts">
	import { onMount } from 'svelte';

	let enabled = $state(false);
	let hot = $state(false);
	let x = $state(-100);
	let y = $state(-100);

	onMount(() => {
		const fine = window.matchMedia?.('(pointer: fine)').matches ?? false;
		const calm = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
		if (!fine || calm) return;

		enabled = true;

		const move = (event: PointerEvent) => {
			x = event.clientX;
			y = event.clientY;
		};

		const over = (event: PointerEvent) => {
			const target = event.target as Element | null;
			hot = Boolean(target?.closest('a, button, [data-cursor]'));
		};

		const leave = () => {
			hot = false;
		};

		window.addEventListener('pointermove', move, { passive: true });
		window.addEventListener('pointerover', over, { passive: true });
		document.addEventListener('pointerleave', leave);

		return () => {
			window.removeEventListener('pointermove', move);
			window.removeEventListener('pointerover', over);
			document.removeEventListener('pointerleave', leave);
		};
	});
</script>

{#if enabled}
	<div class="cursor-glow" style:transform={`translate3d(${x}px, ${y}px, 0)`} aria-hidden="true">
		<span class="cursor-glow-dot" class:hot></span>
	</div>
{/if}
