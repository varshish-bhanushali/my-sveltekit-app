<script>
	import { setContext } from 'svelte';
	import '../app.scss';
	import 'iconify-icon';
	import Cart from "../libs/components/Cart.svelte";
	import Footer from "../libs/components/Footer.svelte";
	import Header from "../libs/components/Header.svelte";

	setContext( 'site.title', 'Logitech');

	let rtl = false;

	function toggleRTL(){
		rtl = !rtl;
	}

	$: dir = rtl ? 'rtl' : 'ltr'
</script>

<div>
	<div class="mx-auto max-w-screen-lg px-6 py-12">
		<div class="col-start-2">
			<!-- Here you can place your Navigation -->
		</div>

		<button on:click={toggleRTL}> Toggle RTL </button>

		<div class="grid gap-6" {dir}>
			<Header/>
			<slot />
			<Footer/>
		</div>

		<Cart/>

		<div>
			
		</div>
	</div>
</div>
