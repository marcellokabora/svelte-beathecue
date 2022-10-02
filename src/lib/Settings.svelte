<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let editmode = false;
	export let data: any;
	let settings = false;
	const dispatch = createEventDispatcher();
	const onAdd = () => {
		settings = !settings;
		dispatch('add');
	};
	const onRemove = () => {
		settings = !settings;
		dispatch('remove');
	};
</script>

{#if editmode}
	<div class="settings">
		<span class="material-icons" on:click={() => (settings = !settings)}>settings</span>
		{#if settings}
			<div class="menus">
				<div class="menu" on:click={onAdd}>
					<span class="text">Add</span>
					<span class="material-icons">add</span>
				</div>
				{#if data[1]}
					<div class="menu" on:click={onRemove}>
						<span class="text">remove</span>
						<span class="material-icons">remove</span>
					</div>
				{/if}
			</div>
		{/if}
	</div>
{/if}

<style lang="scss">
	.settings {
		position: absolute;
		left: 15px;
		top: 15px;
		.material-icons {
			cursor: pointer;
		}
		.menus {
			background-color: rgba(0, 0, 0, 0.2);
			padding: 5px;
			border-radius: 5px;
			.menu {
				display: flex;
				align-items: center;
				padding: 10px;
				background-color: black;
				border-radius: 5px;
				cursor: pointer;
				&:not(:last-child) {
					margin-bottom: 5px;
				}
				&:hover {
					background-color: #2c2c2c;
				}
				.text {
					text-transform: uppercase;
					flex: 1;
					font-size: 12px;
					font-weight: bold;
					padding-right: 10px;
				}
			}
		}
	}
</style>
