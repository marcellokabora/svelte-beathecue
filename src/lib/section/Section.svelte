<script lang="ts">
	import { openModal } from 'svelte-modals';
	import ModalSection from './Modal.svelte';

	export let color = 'black';
	export let opacity = false;
	export let invert = false;
	export let editmode = false;
	interface Data {
		block1: {
			title: string;
			infos: string;
		};
		banner1: {
			title: string;
			infos: string;
		};
		block2: [
			{
				photo: string;
				video: string;
				title: string;
				infos: string;
			}
		];
		banner2: {
			title: string;
			infos: string;
		};
	}
	export let data: Data = {
		block1: {
			title: 'Lorem ipsum dolor sit amet',
			infos:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
		},
		banner1: {
			title: 'Lorem ipsum dolor sit amet',
			infos:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
		},
		block2: [
			{
				photo: '/back1.jpeg',
				video: '',
				title: 'Deserunt mollit anim',
				infos:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
			}
		],
		banner2: {
			title: 'Lorem ipsum dolor sit amet',
			infos:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
		}
	};
	let radio = 0;
	const onAdd = () => {
		data.block2.push({
			photo: '/back1.jpeg',
			video: '',
			title: 'Deserunt mollit anim',
			infos:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		});
		radio = 0;
		block2 = data.block2;
	};
	const onRemove = () => {
		if (data.block2.length > 1) data.block2.splice(radio, 1);
		radio = 0;
		block2 = data.block2;
	};
	let block2 = data.block2;
	function handlePhoto() {
		console.log(block2[radio]);

		openModal(ModalSection, {
			data: block2[radio],
			changePhoto: (photo: string) => (block2[radio].photo = photo),
			changeVideo: (video: string) => (block2[radio].video = video)
		});
	}
</script>

<section class="skewy" style:background-color={color} class:opacity class:invert>
	<div class="opacity" />
	<slot />
	<div class="container">
		<div class="title" data-aos="fade-down" style:background-color={color}>
			{#if editmode}
				<h2 contenteditable bind:textContent={data.block1.title} />
				<p contenteditable bind:textContent={data.block1.infos} />
			{:else}
				<h2 contenteditable="false" bind:textContent={data.block1.title} />
				{#if data.block1.infos}
					<p contenteditable="false" bind:textContent={data.block1.infos} />
				{/if}
			{/if}
		</div>
		<div class="blocks">
			<div class="photo">
				{#each block2 as item, index}
					{#if radio === index}
						<div data-aos="zoom-in">
							<img src={item.photo} alt="" />
							{#if editmode}
								<span class="material-icons settings" on:click={handlePhoto}>settings</span>
							{/if}
						</div>
					{/if}
				{/each}
			</div>
			{#each block2 as item, index}
				{#if radio === index}
					<div class="detail" data-aos="zoom-in">
						<div style:background-color={color} class="info">
							{#if editmode}
								<div class="action">
									<span class="material-icons" on:click={onRemove}>remove</span>
									<span class="material-icons" on:click={onAdd}>add</span>
								</div>
							{/if}
							{#if block2.length > 1}
								<form class="radio">
									{#each block2 as item, index}
										<input type="radio" bind:group={radio} name={String(index)} value={index} />
									{/each}
								</form>
							{/if}
							{#if editmode}
								<h3 contenteditable bind:textContent={item.title} />
								<p contenteditable bind:textContent={item.infos} />
							{:else}
								<h3 contenteditable="false" bind:textContent={item.title} />
								{#if item.infos}
									<p contenteditable="false" bind:textContent={item.infos} />
								{/if}
							{/if}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style src="./style.scss"></style>
