<script>
	import ColorSwatche from "./ColorSwatche.svelte";
	import ProductImage from "./ProductImage.svelte";
    import { addToCart } from "../stores/cartItems";

    export let title;
    export let variants;

    let selectedVariantIndex = 0;
    let selectedVariant;

    function swatcheClicked(index) {
        selectedVariantIndex = index;
    }

    $: selectedVariant = variants[selectedVariantIndex]

    function addToCartClicked(){
        addToCart(title,selectedVariant);
    }

</script>


<div class="border p-3 grid gap-2">

    <ProductImage hex= {selectedVariant.hex}/>
    
    <div class="font-bold">{title}</div>
    
    <div class="flex gap-2">
        {#each variants as variant , index}
          <ColorSwatche
                on:click={() => swatcheClicked(index)} 
                hex = {variant.hex}
                selected = {index === selectedVariantIndex}
          />
        {/each}
    </div>

    <div class="">${selectedVariant.price}</div>
    <div class="">
        <button class="bg-black text-white p-2"
                on:click={addToCartClicked}>
            Add to Cart
        </button>
    </div>
</div>