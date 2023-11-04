<script>
	import { getContext } from "svelte";
	import FooterLink from "./FooterLink.svelte";

    const title = getContext('site.title');

</script>
<footer class="p-6 border flex flex-wrap justify-between items-center gap-6 bg-black text-white">
    <p class="italic">&#169;2023 {title}</p>
    <nav class="flex flex-wrap p-2 gap-4 text-blue">
        <FooterLink href = "/about" > About</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink href="/support">Support</FooterLink>
        <FooterLink href="/privacy">Privacy</FooterLink>
    </nav>
</footer>