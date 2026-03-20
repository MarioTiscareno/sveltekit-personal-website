export function activateOnScroll(selector: string) {
	const elements = document.querySelectorAll(selector);

	document.addEventListener('scroll', function () {
		let minDist = 50000;

		elements.forEach((el) => {
			const c = el as HTMLElement;
			const cY = c.getBoundingClientRect().top;
			if (cY > 0 && cY < minDist) {
				minDist = cY;
				c.classList.add('active');
			} else {
				c.classList.remove('active');
			}
		});
	});
}

export function preventDefault(fn: (event: Event) => unknown) {
	return function (event: Event) {
		event.preventDefault();
		fn(event);
	};
}

export function self(fn: (event: Event) => unknown) {
	return function (event: Event) {
		if (event.target !== event.currentTarget) return;
		return fn(event);
	};
}

export function focus(node: HTMLElement) {
	node.focus();
}

export function trapFocus(node: HTMLElement) {
	const previous = document.activeElement as HTMLElement;

	function focusable() {
		return Array.from(
			node.querySelectorAll(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			)
		) as HTMLElement[];
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key !== 'Tab') return;

		const current = document.activeElement;

		const elements = focusable();
		const first = elements.at(0);
		const last = elements.at(-1);

		if (event.shiftKey && current === first && last) {
			last.focus();
			event.preventDefault();
		}

		if (!event.shiftKey && current === last && first) {
			first.focus();
			event.preventDefault();
		}
	}

	focusable()[0]?.focus();

	node.addEventListener('keydown', handleKeydown);

	return {
		destroy() {
			node.removeEventListener('keydown', handleKeydown);
			previous?.focus();
		}
	};
}
