<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	// const data = [
	// 	{
	// 		color: '#ca0000',
	// 		photo: '/back2.jpeg',
	// 		title: 'Richie Hawtin',
	// 		event: 'Nitsa Club',
	// 		video: {
	// 			id: 'uztOXuTFeXU',
	// 			start: '6766'
	// 		},
	// 		infos: {
	// 			tito: 'Richie Hawtin Live @ Nitsa Club, Barcelona',
	// 			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	// 		}
	// 	}
	// ];
</script>

<Header data={[data.event]} />
