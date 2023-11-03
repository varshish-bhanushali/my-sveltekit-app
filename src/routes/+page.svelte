<script>
	import Cart from "../libs/components/Cart.svelte";
import Footer from "../libs/components/Footer.svelte";
	import Header from "../libs/components/Header.svelte";
	import PlpPageLayout from "../libs/components/PlpPageLayout.svelte";

	let rtl = false;

	function toggleRTL(){
		rtl = !rtl;
	}

	let cartOpen = false;

	$: dir = rtl ? 'rtl' : 'ltr'

</script>
<button on:click={toggleRTL}> Toggle RTL </button>

<div class="grid gap-6" {dir}>
	<Header/>
	<PlpPageLayout/>
	<Footer/>
</div>

<Cart/>








