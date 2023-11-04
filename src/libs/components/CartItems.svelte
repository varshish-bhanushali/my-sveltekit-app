<script>
	import { removeFromCart } from "../stores/cartItems";
	import ProductImage from "./ProductImage.svelte";

    export let hex;
    export let title;
    export let name;
    export let sku;
    export let price;
</script>


<div class="flex gap-2 justify-between">

    <div class="w-[125px]">
        <ProductImage {hex}/>
    </div>

    <div class="flex-grow">
        <h3 class="font-bold">{title}</h3>
        <div class="">{name}</div>
        <div class="">{sku}</div>
        <div class="">{price}</div>
    </div>

    <div class="">
        <button on:click={ () => removeFromCart(sku) }>
            <iconify-icon class="text-26" icon="fa-regular:trash-alt"></iconify-icon>
        </button>
    </div>
    
</div>