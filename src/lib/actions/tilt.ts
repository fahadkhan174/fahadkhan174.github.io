function canReact() {
	if (typeof window === 'undefined') return false;
	const fine = window.matchMedia?.('(pointer: fine)').matches ?? false;
	const calm = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
	return fine && !calm;
}

/** Subtle pointer tilt plus a light that follows the cursor across a card. */
export function tilt(node: HTMLElement, options: { max?: number } = {}) {
	if (!canReact()) return;

	const max = options.max ?? 2.2;

	const move = (event: PointerEvent) => {
		const rect = node.getBoundingClientRect();
		if (!rect.width || !rect.height) return;
		const px = (event.clientX - rect.left) / rect.width;
		const py = (event.clientY - rect.top) / rect.height;
		node.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
		node.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
		node.style.setProperty('--rx', `${((0.5 - py) * max * 2).toFixed(2)}deg`);
		node.style.setProperty('--ry', `${((px - 0.5) * max * 2).toFixed(2)}deg`);
	};

	const leave = () => {
		node.style.setProperty('--rx', '0deg');
		node.style.setProperty('--ry', '0deg');
		node.style.setProperty('--mx', '50%');
		node.style.setProperty('--my', '50%');
	};

	node.addEventListener('pointermove', move, { passive: true });
	node.addEventListener('pointerleave', leave);

	return {
		destroy() {
			node.removeEventListener('pointermove', move);
			node.removeEventListener('pointerleave', leave);
		}
	};
}
