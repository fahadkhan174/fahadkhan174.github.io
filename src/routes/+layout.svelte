<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import CursorGlow from '$lib/components/CursorGlow.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import { site } from '$lib/content';
	import { jsonLd } from '$lib/schema';

	type Seo = {
		title: string;
		description: string;
		image: string;
		imageAlt?: string;
		type?: string;
		schema?: Record<string, unknown> | Record<string, unknown>[];
	};

	let { children } = $props();

	const fallback: Seo = {
		title: site.title,
		description: site.description,
		image: '/og.png',
		imageAlt:
			'Mohd Fahad, Full Stack Engineer — building user-centric products with Java, Spring Boot and Svelte.',
		type: 'profile'
	};

	let seo: Seo = $derived(
		page.status === 404
			? {
					title: `Page not found — ${site.name}`,
					description:
						'That page does not exist. Head back to the work, the toolkit or the contact details.',
					image: '/og.png',
					type: 'website'
				}
			: ((page.data.seo as Seo | undefined) ?? fallback)
	);

	const canonical = $derived(`${site.url}${page.url.pathname}`);
	const image = $derived(seo.image.startsWith('http') ? seo.image : `${site.url}${seo.image}`);
	const schemas = $derived(
		seo.schema ? (Array.isArray(seo.schema) ? seo.schema : [seo.schema]) : []
	);

	afterNavigate(({ from, to }) => {
		// Client-side route changes need an explicit focus target for keyboard users.
		if (from && to && from.url.pathname !== to.url.pathname) {
			document.getElementById('main')?.focus({ preventScroll: true });
		}
	});
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content={seo.type ?? 'website'} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={image} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={seo.imageAlt ?? seo.title} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:image:alt" content={seo.imageAlt ?? seo.title} />

	{@html schemas.map(jsonLd).join('\n\t')}
</svelte:head>

<a href="#main" class="skip-link">Skip to content</a>

<SiteHeader />

<main id="main" tabindex="-1">
	{@render children()}
</main>

<SiteFooter />
<CursorGlow />
