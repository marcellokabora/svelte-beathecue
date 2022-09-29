<header data-aos="fade-down">
	<div class="logo skewy">
		<div class="arrow" />
		<a href="/">
			<img src="/btc.svg" alt="" />
		</a>
	</div>
	<div class="space" />
	<div class="search skewy">
		<input type="text" placeholder="Search..." />
		<div class="icon">
			<span class="material-icons">person</span>
		</div>
	</div>
</header>

<style lang="scss">
	header {
		display: flex;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 999;
		.logo {
			position: relative;
			.arrow {
				position: absolute;
				top: -50px;
				width: 0;
				height: 0;
				border-left: 0px solid transparent;
				border-right: 100000px solid transparent;
				border-top: 200px solid #1b1b1b;
			}
			img {
				width: 70px;
				z-index: 1;
				cursor: pointer;
				position: absolute;
				left: 40px;
				top: 40px;
			}
		}
		.space {
			flex: 1;
		}
		.search {
			color: white;
			display: flex;
			align-items: center;
			margin-right: 30px;
			margin-top: 30px;
			// @media (max-width: 1400px) {
			// 	margin-top: 20px;
			// }
			// @media (max-width: 1000px) {
			// 	margin-top: 20px;
			// }
			input {
				background-color: rgba(0, 0, 0, 0.6);
				height: 40px;
				border-radius: 100px;
				padding: 0px 20px;
				border: none;
				color: white;
				height: 50px;
				&::placeholder {
					color: white;
					opacity: 0.8;
				}
			}
			.icon {
				background-color: black;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 50px;
				width: 50px;
				border-radius: 100px;
				fill: white;
				margin-left: -50px;
				z-index: 1;
				cursor: pointer;
			}
		}
	}
</style>
