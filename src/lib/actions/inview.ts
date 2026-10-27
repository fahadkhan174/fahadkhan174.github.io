type InviewOptions = {
	threshold?: number;
	rootMargin?: string;
};

export function inview(node: HTMLElement, options: InviewOptions = {}) {
	if (
		typeof IntersectionObserver === 'undefined' ||
		window.matchMedia('(prefers-reduced-motion: reduce)').matches
	) {
		return;
	}

	// Anything already on screen should be visible immediately, never waiting on a callback.
	const rect = node.getBoundingClientRect();
	if (rect.top < window.innerHeight && rect.bottom > 0) {
		node.dataset.reveal = 'visible';
		return;
	}

	node.dataset.reveal = 'pending';

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.dataset.reveal = 'visible';
					observer.disconnect();
				}
			}
		},
		{
			threshold: options.threshold ?? 0.12,
			rootMargin: options.rootMargin ?? '0px 0px -8% 0px'
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
