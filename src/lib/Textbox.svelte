<div class="textbox skewy">
	<div class="boxcont">
		<div class="txtbox">
			<h3>Lorem ipsum dolor sit amet</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
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
