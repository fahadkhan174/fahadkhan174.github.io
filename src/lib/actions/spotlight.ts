function canReact() {
	if (typeof window === 'undefined') return false;
	const fine = window.matchMedia?.('(pointer: fine)').matches ?? false;
	const calm = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
	return fine && !calm;
}

export function spotlight(node: HTMLElement) {
	if (!canReact()) return;

	let lastX = 0;
	let lastY = 0;

	const apply = () => {
		const rect = node.getBoundingClientRect();
		if (!rect.width || !rect.height) return;
		const x = ((lastX - rect.left) / rect.width) * 100;
		const y = ((lastY - rect.top) / rect.height) * 100;
		node.style.setProperty('--mx', `${x.toFixed(1)}%`);
		node.style.setProperty('--my', `${y.toFixed(1)}%`);
	};

	const move = (event: PointerEvent) => {
		lastX = event.clientX;
		lastY = event.clientY;
		apply();
	};

	const leave = () => {
		node.style.setProperty('--mx', '50%');
		node.style.setProperty('--my', '22%');
	};

	node.addEventListener('pointermove', move, { passive: true });
	node.addEventListener('pointerleave', leave);
	node.style.setProperty('--mx', '50%');
	node.style.setProperty('--my', '22%');

	return {
		destroy() {
			node.removeEventListener('pointermove', move);
			node.removeEventListener('pointerleave', leave);
		}
	};
}
