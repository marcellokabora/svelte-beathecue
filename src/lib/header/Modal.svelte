<script lang="ts">
	import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
	import { closeModal } from 'svelte-modals';
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
	const storage = getStorage();
	let fileinput: any;
	const onFileSelected = (e: any) => {
		let image = e.target.files[0];
		uploadBytes(ref(storage, image.name), image).then((snapshot) => {
			getDownloadURL(snapshot.ref).then((downloadURL) => {
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
				<input id="color" type="text" bind:value={data.color} autocomplete="off" />
			</div>
			<div class="field">
				<label for="video">Video</label>
				<input id="video" type="text" bind:value={data.header.video} autocomplete="off" />
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

<style src="./style.scss"></style>
