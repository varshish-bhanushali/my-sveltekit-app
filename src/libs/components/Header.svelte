<script>
	import { cartOpen } from '../stores/cartOpen';
	import { cartCount } from '../stores/cartCount';

	import { getContext } from 'svelte';

	const title = getContext('site.title');
</script>

<header class="border p-4 gap-6 flex justify-between items-center">
	<a href="/" class="font-bold uppercase text-blue text-24">{title}</a>

	<div class="flex gap-6">
		<a href="/my-account">My Account</a>
		<a href="/products">Products</a>
		<a href="/fetch/1">Blogs</a>
	</div>
	<button class="relative" on:click={() => ($cartOpen = true)}>
		<iconify-icon class="text-30" icon="mdi:cart-outline" />
		{#if $cartCount}
			<div class="absolute -top-2 -right-1 bg-blue w-5 h-5 rounded-full">{$cartCount}</div>
		{/if}
	</button>
</header>
