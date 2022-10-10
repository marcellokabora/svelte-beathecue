<script lang="ts">
	import { closeModal } from 'svelte-modals';

	// provided by Modals
	export let isOpen = true;

	export let data: any;
	export let changeColor: any;
	export let changeCover: any;
	export let changeVideo: any;
	function handleModal() {
		changeColor(data.color);
		changeVideo(data.header.video);
		changeCover(data.header.cover);
		closeModal();
	}

	import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

	const storage = getStorage();

	// 'file' comes from the Blob or File API

	let fileinput: any;

	const onFileSelected = (e: any) => {
		let image = e.target.files[0];
		uploadBytes(ref(storage, image.name), image).then((snapshot) => {
			getDownloadURL(snapshot.ref).then((downloadURL) => {
				console.log('File available at', downloadURL);
				data.header.cover = downloadURL;
			});
		});
	};
</script>

{#if isOpen}
	<div role="dialog" class="modal" data-aos="fade-down">
		<div class="contents">
			<div class="field">
				<label for="color">Color</label>
				<input id="color" type="text" placeholder="Color" bind:value={data.color} />
			</div>
			<div class="field">
				<label for="video">Video</label>
				<input id="video" type="text" placeholder="Video" bind:value={data.header.video} />
			</div>
			<div class="field">
				<label for="file">Photo</label>
				<button
					on:click={() => {
						fileinput.click();
					}}
				>
					Choose Image
				</button>
				<input
					id="file"
					style="display:none"
					type="file"
					accept=".jpg, .jpeg, .png"
					on:change={(e) => onFileSelected(e)}
					bind:this={fileinput}
				/>
			</div>
			<div class="actions">
				<button on:click={closeModal}>Cancel</button>
				<button on:click={handleModal}>Save</button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.field {
		margin: 10px;
		display: flex;
		align-items: center;
		label {
			margin-right: 10px;
			width: 50px;
		}
		input,
		button {
			padding: 10px;
			border: 1px solid silver;
			border-radius: 5px;
			width: 100%;
			text-align: left;
			cursor: pointer;
		}
	}
	.actions {
		margin-top: 10px;
		display: flex;
		justify-content: end;
		button {
			padding: 10px 20px;
			font-weight: bold;
			margin-left: 10px;
		}
	}
</style>
