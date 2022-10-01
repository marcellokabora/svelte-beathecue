<script lang="ts">
	import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
	const iSave = () => {
		signInWithEmailAndPassword(getAuth(), email, password)
			.then((result) => {
				showlogin = false;
				showuser = true;
			})
			.catch((error) => {});
	};
	let email: string = '';
	let password: string = '';
	export let showlogin = false;
	export let showuser = false;
</script>

<main>
	<div class="form">
		<input name="email" type="email" placeholder="Email" bind:value={email} />
		<input name="password" type="password" placeholder="Password" bind:value={password} />
		<button type="submit" on:click={iSave}>LOGIN</button>
	</div>
</main>

<style lang="scss">
	main {
		.form {
			display: flex;
			flex-direction: column;
			justify-content: end;
			input {
				margin-bottom: 10px;
				border-radius: 5px;
				padding: 10px 10px;
				text-align: right;
			}
			button {
				background-color: black;
				height: 40px;
				font-weight: bold;
				color: white;
				border-radius: 5px;
				cursor: pointer;
			}
		}
	}
</style>
