<script lang="ts">
	export let editmode = false;
	export let invert = false;
	// import type { Banner } from './$types';
	export let data: any;
</script>

<div class="textbox" data-aos="zoom-in" class:invert>
	<div class="boxcont">
		<div class="txtbox">
			{#if editmode}
				<h3 contenteditable bind:textContent={data.title} />
				<p contenteditable bind:textContent={data.infos} />
			{:else}
				<h3 contenteditable="false" bind:textContent={data.title} />
				<p contenteditable="false" bind:textContent={data.infos} />
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.textbox {
		z-index: 1;
		position: relative;
		.boxcont {
			display: flex;
			max-width: 1200px;
			margin: auto;
			// padding: 0 40px;
			.txtbox {
				// margin-bottom: -100px;
				background-color: black;
				width: 60%;
				padding: 40px 40px;
				border-radius: 10px;
				margin-top: -150px;
				height: 160px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				h3 {
					margin: 0;
					font-size: 25px;
				}
				@media (max-width: 1000px) {
					width: auto;
					height: auto;
				}
			}
		}
	}
</style>
