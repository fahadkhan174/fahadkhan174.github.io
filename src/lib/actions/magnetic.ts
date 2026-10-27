function canReact() {
	if (typeof window === 'undefined') return false;
	const fine = window.matchMedia?.('(pointer: fine)').matches ?? false;
	const calm = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
	return fine && !calm;
}

/** Pulls an element a few pixels toward the pointer. Transform only, never layout. */
export function magnetic(node: HTMLElement, strength = 5) {
	if (!canReact()) return;

	const move = (event: PointerEvent) => {
		const rect = node.getBoundingClientRect();
		if (!rect.width || !rect.height) return;
		const dx = event.clientX - (rect.left + rect.width / 2);
		const dy = event.clientY - (rect.top + rect.height / 2);
		const x = Math.max(-strength, Math.min(strength, (dx / rect.width) * strength * 2));
		const y = Math.max(-strength, Math.min(strength, (dy / rect.height) * strength * 2));
		node.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
	};

	const leave = () => {
		node.style.transform = '';
	};

	node.addEventListener('pointermove', move, { passive: true });
	node.addEventListener('pointerleave', leave);

	return {
		destroy() {
			node.removeEventListener('pointermove', move);
			node.removeEventListener('pointerleave', leave);
			node.style.transform = '';
		}
	};
}
