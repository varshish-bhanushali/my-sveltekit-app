import * as _focusTrap from 'focus-trap';

export function focusTrap(element: HTMLElement, options) {
	const trap = _focusTrap.createFocusTrap(element, {
		clickOutsideDeactivates: true,
		...options
	});
	trap.activate();

	return {
		destroy() {
			trap.deactivate();
		}
	};
}
