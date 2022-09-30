<script lang="ts">
	export let editmode = false;
	export let data: any;
</script>

<div class="textbox" data-aos="zoom-in">
	<div class="boxcont skewy">
		<div class="txtbox">
			{#if editmode}
				<h3 contenteditable bind:textContent={data.tito} />
				<p contenteditable bind:textContent={data.subo} />
			{:else}
				<h3 contenteditable="false" bind:textContent={data.tito} />
				<p contenteditable="false" bind:textContent={data.subo} />
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.textbox {
		z-index: 1;
		position: relative;
		display: flex;
		max-width: 1200px;
		margin: auto;
		padding: 0 40px;
		.boxcont {
			position: absolute;
			// width: 100%;
			// flex: 1;
			// display: flex;
			// flex-direction: column;
			// align-items: flex-end;
			.txtbox {
				background-color: black;
				width: 60%;
				padding: 0 40px;
				border-radius: 10px;
				margin-top: -100px;
				height: 200px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				h3 {
					margin: 0;
					font-size: 25px;
				}
			}
		}
	}
</style>
