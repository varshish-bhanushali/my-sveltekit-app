<script>
	import { cartItems } from '../stores/cartItems';
	import { focusTrap } from '../actions/focusTrap';

	import { fly } from 'svelte/transition';

	import { cartOpen } from '../stores/cartOpen';
	import CartItems from './CartItems.svelte';
	import Backdrop from './Backdrop.svelte';

	function close() {
		$cartOpen = false;
	}
</script>

{#if $cartOpen}
	<Backdrop />
	<div
		use:focusTrap={{ onDeactivate: close }}
		transition:fly={{ x: '100%' }}
		class="fixed top-0 right-0 w-[350px] bg-white h-full border-l"
	>
		<div class="bg-black text-white flex gap-6 justify-between p-3">
			Cart
			<button on:click={close}>
				<iconify-icon class="text-30" icon="line-md:close-small" />
			</button>
		</div>

		<div class="p-3 grid gap-3">
			{#each Object.values($cartItems) as item}
				<CartItems {...item} />
			{/each}
		</div>
	</div>
{/if}
