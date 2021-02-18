<script>

	import Layout from '../components/Layout.svelte'

	let login = false
</script>

<style>
	.login {
		display: block;
		font-size: 42px;
		text-align: center;
		height: 100%;
		border: 1px solid black;
		margin: 10% 20% 0;
	}

	a {
		text-decoration: none;
	}
	a:hover {
		box-shadow: 0 0 6px 6px #EEE;
	}
</style>

<svelte:head>
	<title>Contakto Offline</title>
</svelte:head>

<a href="/candidatos" class="login" on:click={() => login = true}>
	<h1>Contakto Offline</h1>
	<small>V1.7</small>
</a>
