<script lang="ts">
	let {
		variant = 'arcs',
		size = 'card'
	}: { variant?: 'arcs' | 'grid' | 'layers'; size?: 'card' | 'hero' } = $props();

	const dots = Array.from({ length: 11 }, (_, col) =>
		Array.from({ length: 7 }, (_, row) => ({ x: 40 + col * 32, y: 45 + row * 35 }))
	).flat();

	const wideDots = Array.from({ length: 19 }, (_, col) =>
		Array.from({ length: 6 }, (_, row) => ({ x: 240 + col * 40, y: 78 + row * 33 }))
	).flat();

	const corners = ['M24 44v-20h20', 'M1176 44v-20h-20', 'M24 316v20h20', 'M1176 316v20h-20'];
</script>

<svg
	viewBox="0 0 400 300"
	class="art"
	class:large={size === 'hero'}
	class:compact={size === 'hero'}
	fill="none"
	aria-hidden="true"
>
	{#if variant === 'arcs'}
		<circle cx="200" cy="150" r="116" stroke="currentColor" stroke-opacity="0.16" />
		<circle
			cx="200"
			cy="150"
			r="84"
			stroke="currentColor"
			stroke-opacity="0.26"
			stroke-dasharray="3 9"
		/>
		<circle cx="200" cy="150" r="52" stroke="var(--art-accent)" stroke-opacity="0.75" />
		<circle cx="200" cy="150" r="5" fill="var(--art-accent)" />
		<circle cx="200" cy="66" r="3.5" fill="var(--art-accent)" fill-opacity="0.9" />
		<circle cx="284" cy="150" r="3" fill="currentColor" fill-opacity="0.4" />
		<circle cx="116" cy="150" r="2.5" fill="currentColor" fill-opacity="0.3" />
		<path d="M200 34v232" stroke="currentColor" stroke-opacity="0.12" />
		<path d="M84 150h232" stroke="currentColor" stroke-opacity="0.12" />
	{:else if variant === 'grid'}
		{#each dots as dot}
			<circle cx={dot.x} cy={dot.y} r="1.6" fill="currentColor" fill-opacity="0.28" />
		{/each}
		<path
			d="M72 220 152 150 232 185 328 88"
			stroke="var(--art-accent)"
			stroke-opacity="0.85"
			stroke-width="1.5"
		/>
		<circle cx="72" cy="220" r="3.5" fill="var(--art-accent)" />
		<circle cx="152" cy="150" r="3" fill="var(--art-accent)" />
		<circle cx="232" cy="185" r="3" fill="var(--art-accent)" />
		<circle cx="328" cy="88" r="4.5" fill="var(--art-accent)" />
	{:else}
		<rect
			x="52"
			y="188"
			width="240"
			height="58"
			rx="12"
			stroke="currentColor"
			stroke-opacity="0.16"
		/>
		<rect
			x="76"
			y="146"
			width="240"
			height="58"
			rx="12"
			stroke="currentColor"
			stroke-opacity="0.24"
			stroke-dasharray="4 7"
		/>
		<rect
			x="100"
			y="104"
			width="240"
			height="58"
			rx="12"
			stroke="currentColor"
			stroke-opacity="0.34"
		/>
		<path
			d="M124 214h56M148 172h56M172 130h56"
			stroke="var(--art-accent)"
			stroke-opacity="0.9"
			stroke-width="1.5"
		/>
		<circle cx="348" cy="78" r="4" fill="var(--art-accent)" />
	{/if}
</svg>

{#if size === 'hero'}
	<svg viewBox="0 0 1200 360" class="art art-wide" fill="none" aria-hidden="true">
		<!-- Corner ticks frame the panel like a technical drawing. -->
		{#each corners as corner}
			<path d={corner} stroke="currentColor" stroke-opacity="0.3" stroke-width="1" />
		{/each}

		<!-- Horizontal dimension line with end ticks and a caption. -->
		<path d="M120 320h960" stroke="currentColor" stroke-opacity="0.2" />
		<path d="M120 314v12M1080 314v12" stroke="currentColor" stroke-opacity="0.3" />
		<path d="m126 317-6 3 6 3M1074 317l6 3-6 3" stroke="currentColor" stroke-opacity="0.3" />
		<text
			x="600"
			y="303"
			text-anchor="middle"
			font-family="ui-monospace, monospace"
			font-size="9"
			letter-spacing="2.4"
			fill="currentColor"
			fill-opacity="0.45"
		>
			SYSTEM SKETCH
		</text>

		<!-- Vertical dimension line. -->
		<path d="M60 64v232" stroke="currentColor" stroke-opacity="0.2" />
		<path d="M54 64h12M54 296h12" stroke="currentColor" stroke-opacity="0.3" />
		<path d="m57 70 3-6 3 6M57 290l3 6 3-6" stroke="currentColor" stroke-opacity="0.3" />

		{#if variant === 'arcs'}
			<circle cx="600" cy="172" r="152" stroke="currentColor" stroke-opacity="0.14" />
			<circle
				cx="600"
				cy="172"
				r="112"
				stroke="currentColor"
				stroke-opacity="0.24"
				stroke-dasharray="3 9"
			/>
			<circle cx="600" cy="172" r="70" stroke="var(--art-accent)" stroke-opacity="0.75" />
			<circle cx="600" cy="172" r="5" fill="var(--art-accent)" />
			<circle cx="600" cy="60" r="3.5" fill="var(--art-accent)" fill-opacity="0.9" />
			<circle cx="712" cy="172" r="3" fill="currentColor" fill-opacity="0.4" />
			<circle cx="488" cy="172" r="2.5" fill="currentColor" fill-opacity="0.3" />
			<path d="M600 24v296" stroke="currentColor" stroke-opacity="0.1" />
			<path d="M200 172h800" stroke="currentColor" stroke-opacity="0.1" />
			<path
				d="M200 172h260M740 172h260"
				stroke="currentColor"
				stroke-opacity="0.16"
				stroke-dasharray="2 8"
			/>
			<circle cx="200" cy="172" r="3" fill="currentColor" fill-opacity="0.3" />
			<circle cx="1000" cy="172" r="3" fill="currentColor" fill-opacity="0.3" />
		{:else if variant === 'grid'}
			{#each wideDots as dot}
				<circle cx={dot.x} cy={dot.y} r="1.6" fill="currentColor" fill-opacity="0.26" />
			{/each}
			<path
				d="M240 258 420 204 600 224 780 148 960 100"
				stroke="var(--art-accent)"
				stroke-opacity="0.85"
				stroke-width="1.5"
			/>
			<path
				d="M240 204 420 240 600 170 780 200 960 150"
				stroke="currentColor"
				stroke-opacity="0.16"
				stroke-dasharray="3 7"
			/>
			<circle cx="240" cy="258" r="3.5" fill="var(--art-accent)" />
			<circle cx="420" cy="204" r="3" fill="var(--art-accent)" />
			<circle cx="600" cy="224" r="3" fill="var(--art-accent)" />
			<circle cx="780" cy="148" r="3" fill="var(--art-accent)" />
			<circle cx="960" cy="100" r="4.5" fill="var(--art-accent)" />
		{:else}
			<rect
				x="300"
				y="252"
				width="600"
				height="54"
				rx="12"
				stroke="currentColor"
				stroke-opacity="0.16"
			/>
			<rect
				x="330"
				y="190"
				width="600"
				height="54"
				rx="12"
				stroke="currentColor"
				stroke-opacity="0.24"
				stroke-dasharray="4 7"
			/>
			<rect
				x="360"
				y="128"
				width="600"
				height="54"
				rx="12"
				stroke="currentColor"
				stroke-opacity="0.34"
			/>
			<path
				d="M392 279h180M422 217h180M452 155h180"
				stroke="var(--art-accent)"
				stroke-opacity="0.9"
				stroke-width="1.5"
			/>
			<circle cx="990" cy="96" r="4" fill="var(--art-accent)" />
			<path
				d="M990 96v104"
				stroke="var(--art-accent)"
				stroke-opacity="0.3"
				stroke-dasharray="2 5"
			/>
			<circle cx="990" cy="200" r="2.5" fill="var(--art-accent)" />
		{/if}
	</svg>
{/if}

