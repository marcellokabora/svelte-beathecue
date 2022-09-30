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
	// 			tito: 'Richie Hawtin | Nitsa Club (Aug 2022)',
	// 			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	// 		},
	// 		link: '/event/jkdfaksldsf'
	// 	},
	// 	{
	// 		color: 'purple',
	// 		photo: '/back1.jpeg',
	// 		title: 'Marcello Kabora',
	// 		event: 'Illusionistico',
	// 		video: {
	// 			id: 'QBAEk4px7R0',
	// 			start: '0'
	// 		},
	// 		infos: {
	// 			tito: 'Lorem ipsum dolor sit amet',
	// 			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	// 		},
	// 		link: '/event/jkdfaksldsf'
	// 	},
	// 	{
	// 		color: 'grey',
	// 		photo: '/back3.jpeg',
	// 		title: 'Sven Väth',
	// 		event: 'Mysteryland ',
	// 		video: {
	// 			id: 'J4meFV7T6ak',
	// 			start: '0'
	// 		},
	// 		infos: {
	// 			tito: 'Sven Väth | Mysteryland 2017',
	// 			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	// 		},
	// 		link: '/event/jkdfaksldsf'
	// 	}
	// ];
</script>

<Header data={data.events} />
