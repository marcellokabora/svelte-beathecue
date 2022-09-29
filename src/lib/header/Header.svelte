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
</script>

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
						<h1>{item.title}</h1>
						<small>@{item.event}</small>
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
								<div class="tito">{item.infos.tito}</div>
								<div class="info">{item.infos.info}</div>
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
								<a href={item.link}>
									<button style:background-color={item.color}>OPEN</button>
								</a>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
<Section color={data[radio].color}>
	<h1>Deserunt mollit anim</h1>
	<p>
		Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
		id est laborum. Excepteur sint occaecat cupidatat non proident.
	</p>
</Section>
<Textbox />
<Section color={data[radio].color} opacity invert>
	<h1>Deserunt mollit anim</h1>
	<p>
		Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
		id est laborum. Excepteur sint occaecat cupidatat non proident.
	</p>
</Section>

<svelte:window bind:scrollY={y} />

<style src="./style.scss"></style>
