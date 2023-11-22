<script>
	let _class;
	export { _class as class };
</script>

<button class="border-2 p-2 uppercase font-bold rounded-full {_class}">
	<slot />
</button>
