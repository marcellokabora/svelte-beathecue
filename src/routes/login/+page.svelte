<script>
	import { enhance } from '$app/forms';
</script>

<form method="POST" action="?/login" use:enhance>
	<input name="email" type="email" />
	<input name="password" type="password" />
	<button>Log in</button>
</form>

<style lang="scss">
	form {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
