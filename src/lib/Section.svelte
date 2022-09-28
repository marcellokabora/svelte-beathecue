<script>
	export let color = 'black';
	let radio = 0;
	const infos = [
		{
			photo: '/back1.jpeg',
			title: 'Deserunt mollit anim',
			infos:
				'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
		},
		{
			photo: '/back2.jpeg',
			title: 'Deserunt mollit anim',
			infos:
				'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
		},
		{
			photo: '/back3.jpeg',
			title: 'Deserunt mollit anim',
			infos:
				'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
		}
	];
</script>

<section class="skewy" style:background-color={color}>
	<div class="container">
		<div class="title" data-aos="fade-down" style:background-color={color}>
			<slot />
		</div>
		<div class="blocks">
			<div class="photo">
				{#each infos as item, index}
					{#if radio === index}
						<img src={item.photo} alt="" data-aos="zoom-in" />
					{/if}
				{/each}
			</div>
			{#each infos as item, index}
				{#if radio === index}
					<div class="detail" data-aos="zoom-in">
						<div style:background-color={color} class="info">
							<form>
								<input type="radio" bind:group={radio} name="0" value={0} />
								<input type="radio" bind:group={radio} name="1" value={1} />
								<input type="radio" bind:group={radio} name="2" value={2} />
							</form>
							<h3>{item.title}</h3>
							<p>{item.infos}</p>
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
		overflow: hidden;
		color: white;
		padding: 40px;
		min-height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		.container {
			max-width: 1200px;
			margin: auto;
			padding-bottom: 50px;
			.title {
				max-width: 40%;
				margin-bottom: 20px;
				padding: 20px 40px;
				box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
				z-index: 1;
				/* position: absolute; */
				position: relative;
				margin-bottom: -50px;
				:global(h1) {
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
				flex: 2;
				img {
					width: 100%;
					height: 450px;
					object-fit: cover;
					box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
					&.visible {
						display: block;
					}
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
					form {
						position: absolute;
						right: 40px;
						input {
							cursor: pointer;
							&:checked:after {
								width: 12px;
								height: 12px;
								border-radius: 15px;
								top: -2px;
								left: -1px;
								position: relative;
								background-color: rgba(0, 0, 0, 0.8);
								content: '';
								display: inline-block;
								visibility: visible;
								border: 2px solid white;
							}
						}
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
