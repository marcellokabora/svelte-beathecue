<script>
	import Section from './Section.svelte';
	const infos = [
		{
			color: 'red',
			photo: '/back2.jpeg',
			title: 'Richie Hawtin',
			video: {
				id: 'uztOXuTFeXU',
				start: '6766'
			},
			infos: {
				tito: 'Richie Hawtin Live @ Nitsa Club, Barcelona',
				info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			}
		},
		{
			color: 'purple',
			photo: '/back1.jpeg',
			title: 'Deserunt mollit anim',
			video: {
				id: 'QBAEk4px7R0',
				start: '0'
			},
			infos: {
				tito: 'Lorem ipsum dolor sit amet',
				info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			}
		},
		{
			color: 'grey',
			photo: '/back3.jpeg',
			title: 'Deserunt mollit anim',
			video: {
				id: 'uztOXuTFeXU',
				start: '6766'
			},
			infos: {
				tito: 'Lorem ipsum dolor sit amet',
				info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			}
		}
	];
	let radio = 0;
	let color = infos[radio].color;
	let autoslide = true;
	let play = false;
	// setInterval(() => {
	// 	if (autoslide) radio < infos.length - 1 ? radio++ : (radio = 0);
	// }, 5000);
</script>

<section class="skewy">
	<div class="container">
		{#each infos as item, index}
			{#if radio === index}
				{#if play}
					<iframe
						class="photo"
						width="560"
						height="315"
						src={`https://www.youtube.com/embed/${item.video.id}?start=${item.video.start}&controls=0&autoplay=1&showinfo=0&loop=1`}
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
						{item.title}
					{/if}
				</div>
			{/if}
		{/each}
		<div class="infos" data-aos="fade-up">
			<div class="banner">
				<div class="banner2">
					<form
						class="radio"
						on:click={() => {
							autoslide = false;
							play = false;
						}}
					>
						<input type="radio" bind:group={radio} name="0" value={0} />
						<input type="radio" bind:group={radio} name="1" value={1} />
						<input type="radio" bind:group={radio} name="2" value={2} />
					</form>
					{#each infos as item, index}
						{#if radio === index}
							<div data-aos="fade-up">
								<div class="tito">{item.infos.tito}</div>
								<div class="info">{item.infos.info}</div>
							</div>
							<div class="action">
								<button style:background-color={item.color} on:click={() => (play = !play)}
									>{play ? 'STOP' : 'PREVIEW'}</button
								>
								<div class="space" />
								<button style:background-color={item.color}>OPEN</button>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
<Section color={infos[radio].color}>
	<h1>Deserunt mollit anim</h1>
	<p>
		Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
		id est laborum. Excepteur sint occaecat cupidatat non proident.
	</p>
</Section>

<style lang="scss">
	section {
		position: relative;
		color: white;
		padding: 40px;
		min-height: 70vh;
		display: flex;
		flex-direction: column;
		z-index: 10;
		.container {
			flex: 1;
			max-width: 1200px;
			margin: auto;
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			.photo {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				z-index: -1;
				pointer-events: none;
			}
			.title {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 5vw;
				font-weight: bold;
				opacity: 0.9;
			}
			.infos {
				display: flex;
				.banner {
					flex: 1;
					width: 100%;
					display: flex;
					justify-content: end;
					position: relative;
					.banner2 {
						background-color: black;
						padding: 40px;
						border-radius: 10px;
						width: 50%;
						height: 150px;
						margin-bottom: -130px;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
						.tito {
							font-size: 20px;
							margin-bottom: 10px;
							font-weight: bold;
						}
						.action {
							display: flex;
							width: 100%;
							.space {
								width: 20px;
							}
							button {
								border: none;
								width: 100%;
								margin-top: 30px;
								height: 50px;
								border-radius: 5px;
								color: white;
								font-weight: bold;
								font-size: 16px;
								cursor: pointer;
								&:hover {
									opacity: 0.9;
								}
							}
						}
						form {
							position: absolute;
							right: 30px;
							top: 20px;
							z-index: 1;
							// input {
							// 	cursor: pointer;
							// 	&:checked:after {
							// 		width: 12px;
							// 		height: 12px;
							// 		border-radius: 15px;
							// 		top: -2px;
							// 		left: -1px;
							// 		position: relative;
							// 		background-color: rgba(0, 0, 0, 0.8);
							// 		content: '';
							// 		display: inline-block;
							// 		visibility: visible;
							// 		border: 2px solid white;
							// 	}
							// }
						}
					}
				}
			}
		}
	}
</style>
