<script lang="ts">
	import { data } from '$lib/header/data';
	import { doc, setDoc } from 'firebase/firestore';
	import { db } from '../../firebase';

	let id = '';

	const iSave = () => {
		data.id = id;
		setDoc(doc(db, 'event', id), data).then(() => (location.href = '/event/' + id));
	};
</script>

<main>
	<input type="text" bind:value={id} />
	<button on:click={iSave}>SAVE</button>
</main>

<style lang="scss">
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
