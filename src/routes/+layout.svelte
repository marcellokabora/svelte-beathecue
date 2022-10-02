<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import { user } from '../stores';
	import '../app.scss';
	// @ts-ignore
	import AOS from 'aos';
	import { onMount } from 'svelte';
	import { getAuth } from 'firebase/auth';
	onMount(() => {
		AOS.init();
	});
	export const prerender = true;

	getAuth().onAuthStateChanged((result) => {
		$user = result?.email;
	});
</script>

<main>
	<Navbar />
	<div class="main">
		<slot />
	</div>
	<Footer />
	<!-- {data} -->
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
