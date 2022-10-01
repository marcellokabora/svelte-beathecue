<script lang="ts">
	import Login from './Login.svelte';
	import { getAuth } from 'firebase/auth';
	let showuser = false;
	import { editmode, saveinfo, user } from '../stores';
	let showlogin = false;
	const logout = () => {
		getAuth().signOut();
		showuser = false;
		showlogin = true;
	};
</script>

<header data-aos="fade-down">
	<div class="logo skewy">
		<div class="arrow" />
		<a href="/">
			<img src="/btc.svg" alt="" />
		</a>
	</div>
	<div class="space" />
	<div class="search1 skewy">
		<div class="search">
			<input type="text" placeholder="Search..." />
			<div
				class="icon"
				on:click={() => ($user ? (showuser = !showuser) : (showlogin = !showlogin))}
			>
				<span class="material-icons">person</span>
			</div>
		</div>
		{#if showlogin}
			<div class="menus" data-aos="fade-down">
				<Login bind:showlogin bind:showuser />
			</div>
		{/if}
		{#if showuser}
			<div class="menus" data-aos="fade-down">
				{#if !$editmode}
					<div class="menu1">
						<div class="menu">
							<div class="info">{$user}</div>
						</div>
						<div class="menu">
							<div class="info" on:click={logout}><span class="material-icons">logout</span></div>
						</div>
						{#if !$editmode}
							<div class="menu">
								<div
									class="info"
									on:click={() => {
										$editmode = true;
									}}
								>
									<span class="material-icons">edit</span>
								</div>
							</div>
						{/if}
					</div>
				{/if}
				<div class="menu1">
					<div class="menu">
						{#if $editmode}
							<div
								class="info"
								on:click={() => {
									$editmode = false;
									showuser = false;
								}}
							>
								<span class="text">CANCEL</span>
								<div class="space" />
								<span class="material-icons">cancel</span>
							</div>
						{/if}
					</div>
					{#if $editmode}
						<div class="menu">
							<div
								class="info"
								on:click={() => {
									$saveinfo = true;
									showuser = false;
								}}
							>
								<span class="text">SAVE</span>
								<div class="space" />
								<span class="material-icons">save</span>
							</div>
						</div>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</header>

<style lang="scss">
	.search1 {
		position: relative;
		margin-right: 30px;
		margin-top: 30px;
		.menus {
			position: absolute;
			padding: 20px;
			background-color: rgba(0, 0, 0, 0.5);
			padding: 10px;
			right: 0;
			border-radius: 10px;
			margin-top: 10px;
			.menu1 {
				display: flex;
				justify-content: end;
				.menu {
					display: flex;
					justify-content: end;
					width: 100%;
					&:not(:last-child) {
						margin-right: 5px;
						margin-bottom: 5px;
					}
					.info {
						background-color: black;
						padding: 15px;
						cursor: pointer;
						text-align: right;
						border-radius: 5px;
						font-size: 12px;
						font-weight: bold;
						height: 30px;
						display: flex;
						justify-content: center;
						align-items: center;
						width: 100%;
						text-align: center;
						&:hover {
							background-color: rgb(22, 22, 22);
						}
						.text {
							flex: 1;
						}
						.space {
							padding-left: 10px;
							margin-left: 10px;
							border-left: 1px solid rgba(255, 255, 255, 0.3);
							height: 100%;
						}
						.material-icons {
							float: right;
						}
					}
				}
			}
		}
	}

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
