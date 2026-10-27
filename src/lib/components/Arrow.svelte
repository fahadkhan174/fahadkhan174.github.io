<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<svg
	class={className}
	viewBox="0 0 16 16"
	width="14"
	height="14"
	fill="none"
	aria-hidden="true"
	focusable="false"
>
	<path
		d="M4.5 11.5 11.5 4.5M11.5 4.5H6M11.5 4.5V10"
		stroke="currentColor"
		stroke-width="1.4"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
