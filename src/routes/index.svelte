<script>

	import Layout from '../components/Layout.svelte'


	let login = true
</script>

<style>
	.login {
		background: #7c7b7b;
		position: absolute;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 42px;
		color: white;
	}

	.login a {
		padding: 100%;
	}
</style>

<svelte:head>
	<title>Contakto Offline</title>
</svelte:head>

{#if !login}
<div class="login">
	<a href="/" on:click={() => login = true}>
		<img src="http://www.contaktoapp.com/static/media/logo_white.png" alt="">
	</a>
</div>
{:else}
	<Layout />
{/if}
