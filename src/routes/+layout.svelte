<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.scss';
	// @ts-ignore
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => AOS.init());
	export const prerender = true;
</script>

<main>
	<Navbar />
	<div class="main">
		<slot />
	</div>
	<Footer />
</main>

<style lang="scss">
	main {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		.main {
			flex: 1;
		}
	}
</style>
