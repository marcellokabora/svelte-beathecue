<script lang="ts">
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
				<p contenteditable="false" bind:textContent={data.block1.infos} />
			{/if}
		</div>
		<div class="blocks">
			<div class="photo">
				{#each data.block2 as item, index}
					{#if radio === index}
						<img src={item.photo} alt="" data-aos="zoom-in" />
					{/if}
				{/each}
			</div>
			{#each data.block2 as item, index}
				{#if radio === index}
					<div class="detail" data-aos="zoom-in">
						<div style:background-color={color} class="info">
							{#if data.block2.length > 1}
								<form class="radio">
									{#each data.block2 as item, index}
										<input type="radio" bind:group={radio} name={String(index)} value={index} />
									{/each}
								</form>
							{/if}
							{#if editmode}
								<h3 contenteditable bind:textContent={item.title} />
								<p contenteditable bind:textContent={item.infos} />
							{:else}
								<h3 contenteditable="false" bind:textContent={item.title} />
								<p contenteditable="false" bind:textContent={item.infos} />
							{/if}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		position: relative;
		color: white;
		padding: 40px;
		min-height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: -2px;
		&.opacity {
			.opacity {
				opacity: 0.1;
			}
		}
		&.invert {
			.container {
				align-items: flex-end;
				.blocks {
					padding-left: 0 !important;
					padding-right: 100px;
				}
				.photo {
					order: 2;
					// margin-right: 50px;
				}
				.title {
					box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.2) !important;
				}
				.info {
					order: 1;
					margin-left: 0 !important;
					margin-right: -200px;
					box-shadow: 3px -3px 3px rgba(0, 0, 0, 0.2) !important;
				}
			}
		}
		.opacity {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background-color: black;
			opacity: 0.05;
		}
		.container {
			max-width: 1200px;
			margin: auto;
			padding-top: 200px;
			padding-bottom: 250px;
			display: flex;
			flex-direction: column;
			.title {
				max-width: 40%;
				margin-bottom: 20px;
				padding: 20px 40px;
				box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
				z-index: 1;
				position: relative;
				margin-bottom: -50px;
				border-radius: 10px;
				h2 {
					font-size: 35px;
					margin: 0;
				}
			}
			.blocks {
				display: flex;
				align-items: flex-end;
				padding-left: 100px;
			}
			.photo {
				flex: 3;
				img {
					width: 100%;
					height: 450px;
					object-fit: cover;
					box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
					border-radius: 10px;
				}
			}
			.detail {
				flex: 1;
				position: relative;
				.info {
					box-shadow: -3px -3px 3px rgba(0, 0, 0, 0.2);
					padding: 40px;
					min-height: 200px;
					display: flex;
					flex-direction: column;
					justify-content: start;
					margin-bottom: -50px;
					margin-left: -200px;
					position: relative;
					border-radius: 10px;
					form {
						position: absolute;
						right: 40px;
					}
					h3 {
						font-size: 25px;
						margin-bottom: 0;
					}
				}
			}
		}
	}
</style>
