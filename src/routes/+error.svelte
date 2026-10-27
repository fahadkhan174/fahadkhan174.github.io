<script lang="ts">
	import { page } from '$app/state';
	import Arrow from '$lib/components/Arrow.svelte';

	const notFound = $derived(page.status === 404);
</script>

<section class="error-page">
	<div class="container-x">
		<p class="eyebrow">{page.status} — {notFound ? 'Not found' : 'Something went wrong'}</p>

		<h1 class="error-title">
			{notFound ? "This page isn't here." : 'That did not work.'}
		</h1>

		<p class="error-copy">
			{page.error?.message ??
				'The page you were looking for has moved or never existed. The work and contact details are still one click away.'}
		</p>

		<div class="mt-8 flex flex-wrap gap-3">
			<a href="/" class="btn btn-primary">
				Back home
				<Arrow />
			</a>
			<a href="/#work" class="btn btn-ghost">See the work</a>
		</div>
	</div>
</section>
