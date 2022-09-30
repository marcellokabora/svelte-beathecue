<script lang="ts">
	import Section from '../Section.svelte';
	import Textbox from '../Textbox.svelte';
	export let data: any[] = [];
	let radio = 0;
	let autoslide = true;
	let play = false;
	let clicked = false;
	let y = 0;
	setInterval(() => {
		if (autoslide) {
			radio < data.length - 1 ? radio++ : (radio = 0);
		}
	}, 15000);
	$: autoslide = y === 0 && !clicked;

	let editmode = false;

	import { doc, setDoc } from 'firebase/firestore';
	import { db } from '../../firebase';
	const idoc = 'r6r1Ewqw52OwbXuG61Vo';
	const iSave = async () => {
		await setDoc(doc(db, 'event', idoc), data[radio]).then(() => (editmode = false));
	};
</script>

<div class="editmode">
	{#if !editmode}
		<button on:click={() => (editmode = true)}>EDIT</button>
	{:else}
		<button on:click={() => (editmode = false)}>CANCEL</button>
		<button on:click={iSave}>SAVE</button>
	{/if}
</div>

<section class="skewy" on:click={() => (clicked = true)}>
	<div class="container">
		{#each data as item, index}
			{#if radio === index}
				{#if play}
					<iframe
						class="photo"
						src={`https://www.youtube.com/embed/${item.video.id}?start=${item.video.start}&controls=0&autoplay=1&modestbranding=0&rel=0`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
				{:else}
					<img class="photo" src={item.photo} alt="" data-aos="fade-down" />
				{/if}
				<div class="title" data-aos="fade-up">
					{#if !play}
						{#if editmode}
							<h1 contenteditable bind:textContent={item.title} />
						{:else}
							<h1>{item.title}</h1>
						{/if}
						{#if editmode}
							<small contenteditable bind:textContent={item.event} />
						{:else}
							<small>{item.event}</small>
						{/if}
					{/if}
				</div>
			{/if}
		{/each}
		<div class="infos" data-aos="fade-up">
			<div class="banner">
				<div class="banner2">
					{#if data[1]}
						<form class="radio" on:click={() => (play = false)}>
							{#each data as item, index}
								<input type="radio" bind:group={radio} name={String(index)} value={index} />
							{/each}
						</form>
					{/if}
					{#each data as item, index}
						{#if radio === index}
							<div data-aos="fade-up">
								{#if editmode}
									<div class="tito" contenteditable bind:textContent={item.infos.tito} />
								{:else}
									<div class="tito">{item.infos.tito}</div>
								{/if}
								{#if editmode}
									<div class="info" contenteditable bind:textContent={item.infos.info} />
								{:else}
									<div class="info">{item.infos.info}</div>
								{/if}
							</div>
							<div class="action">
								<button style:background-color={item.color} on:click={() => (play = !play)}>
									{#if play}
										<span class="material-icons">stop</span>
									{:else}
										<span class="material-icons">play_arrow</span>
									{/if}
									{play ? 'STOP' : 'PREVIEW'}
								</button>
								<div class="space" />
								{#if data[1]}
									<a href={`/event/${item.id}`}>
										<button style:background-color={item.color}>OPEN</button>
									</a>
								{/if}
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
<Section color={data[radio].color} bind:editmode bind:title={data[0].title} />
<Textbox bind:data={data[radio].banner1} {editmode} />
<Section color={data[radio].color} opacity invert />

<svelte:window bind:scrollY={y} />

<style src="./style.scss"></style>
