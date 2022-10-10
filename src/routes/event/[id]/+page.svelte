<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Header data={[data.event]} />
