<script lang="ts">
	import type { FlowNode } from '$lib/content';

	let { nodes, label = 'How the pieces fit together' }: { nodes: FlowNode[]; label?: string } =
		$props();
</script>

<ol class="flow" aria-label={label}>
	{#each nodes as node, i (node.label)}
		<li class="flow-node">
			<span class="flow-idx" aria-hidden="true">0{i + 1}</span>
			<span class="flow-label">{node.label}</span>
			<span class="flow-detail">{node.detail}</span>
		</li>
	{/each}
</ol>
