<script>
	import { onMount } from 'svelte';

	import Layout from '../components/Layout.svelte'
	import Alert from '../components/Alert.svelte'

	let msg = ''

	onMount(() => {
		const url = new URL(window.location)
		if(url.search.includes('exito')) {
			msg = 'Información guardada'
		}
	})
</script>

<svelte:head>
	<title>Contakto Offline</title>
</svelte:head>

<Layout />

<Alert msg={msg} />
