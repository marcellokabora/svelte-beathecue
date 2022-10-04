<script lang="ts">
	import Section from '../Section.svelte';
	import Textbox from '../Textbox.svelte';
	import { editmode, saveinfo } from '../../stores';
	import { doc, setDoc } from 'firebase/firestore';
	import { db } from '../../firebase';
	export let data: any[] = [];
	console.log(data);

	let radio = 0;
	let autoslide = true;
	let play = false;
	let clicked = false;
	let y = 0;
	// setInterval(() => {
	// 	if (autoslide) radio < data.length - 1 ? radio++ : (radio = 0);
	// }, 5000);
	$: autoslide = y === 0 && !clicked;
	saveinfo.subscribe((value) => {
		if (value)
			setDoc(doc(db, 'event', data[radio].id), data[radio]).then(() => ($editmode = false));
		$saveinfo = false;
	});
</script>

<section class="skewy" on:click={() => (clicked = true)}>
	<div class="container">
		{#each data as item, index}
			{#if radio === index}
				{#if play}
					<iframe
						class="photo"
						src={`https://www.youtube.com/embed/${item.header.video}?start=0&controls=0&autoplay=1&modestbranding=0&rel=0`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
				{:else}
					<img class="photo" src={item.header.cover} alt="" data-aos="fade-down" />
				{/if}
				<div class="title" data-aos="fade-up">
					{#if !play}
						{#if $editmode}
							<h1 contenteditable bind:textContent={item.header.title} />
							<small contenteditable bind:textContent={item.header.event} />
						{:else}
							<h1 contenteditable="false" bind:textContent={item.header.title} />
							<small contenteditable="false" bind:textContent={item.header.event} />
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
								{#if $editmode}
									<div class="tito" contenteditable bind:textContent={item.banner1.title} />
									<div class="info" contenteditable bind:textContent={item.banner1.infos} />
								{:else}
									<div class="tito" contenteditable="false" bind:textContent={item.banner1.title} />
									<div class="info" contenteditable="false" bind:textContent={item.banner1.infos} />
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
								{#if data[0]}
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
<Section color={data[radio].color} bind:editmode={$editmode} bind:data={data[0].section1} />
<Section
	color={data[radio].color}
	bind:editmode={$editmode}
	bind:data={data[0].section2}
	opacity
	invert
>
	<Textbox bind:data={data[radio].banner2} editmode={$editmode} />
</Section>
<Section color={data[radio].color} bind:editmode={$editmode} bind:data={data[0].section3}>
	<Textbox bind:data={data[radio].banner3} editmode={$editmode} invert />
</Section>

<svelte:window bind:scrollY={y} />

<style src="./style.scss"></style>
