<script context="module">
	export async function preload(page) {
		const { uuid } = page.query;

		return { uuid };
	}
</script>

<script>
	import { onMount } from 'svelte';

	import Subnav from '../components/Subnav.svelte'
	import Alert from '../components/Alert.svelte'

	import { getUsers } from '../support/user'
	import { subscribe, publish } from '../support/events'

	export let uuid;
	export let section;
	export let user;

	let users = {}
	let msg = ''
	let VERSION = ''
	let isOnline = true
	const LIMIT_USERS = 15

	let electron

	onMount(async () => {
		window.addEventListener('offline', () => isOnline = false);
		window.addEventListener('online', () => isOnline = true);

		users = getUsers()

		subscribe('UPDATE_LIST', () => {
			users = getUsers()
		})

		if (!window.require) {
			return
		}

		if (!electron) {
      electron = require('electron')
    }
		console.log('electron found... setup listeners...')

    const { ipcRenderer } = electron

		ipcRenderer.send('app_version')
    ipcRenderer.on('app_version', (event, arg) => {
			VERSION = arg.version
    })

    ipcRenderer.on('update_available', () => {
      alert('Una nueva versión se está descargando, favor de esperar...')
      ipcRenderer.removeAllListeners('update_available');
    });

    ipcRenderer.on('update_downloaded', () => {
      alert('Actualización descargada, favor de reiniciar aplicación')

      ipcRenderer.removeAllListeners('update_downloaded');

			ipcRenderer.send('restart_app');
    });
	});

	function clickHandlerAdd(e) {
		users = getUsers()

		if (Object.keys(users).length >= LIMIT_USERS) {
			e.preventDefault()

			publish('UPDATE_MSG', { msg: `No se pueden crear más de ${LIMIT_USERS} candidatos.` })
		}
	}
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		height: 40px;
		background-color: #101010;
		padding: 12px;

		position: fixed;
		width: 100%;
		z-index: 1;
		color: white;
		font-size: 38px;
		line-height: 38px;
	}

	a {
		text-decoration: none;
	}
	
  .container {
		position: relative;
		top: 50px;
	}

	.view {
		padding: 12px;
		position: relative;
		left: 224px;
		width: calc(100% - 248px)
	}

  .list {
		background: #f5f5f5;
		width: 200px;
		padding: 12px;
		height: 100vh;
		position: fixed;
		left: 0;
	}

  h3 {
    display: inline-block;
  }

  .btn {
    display: inline-block;
    padding: 12px 20px;
    font-size: 20px;
	}
	
	.btn:hover {
		cursor: pointer;
	}

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding: 6px 0;
	}

	li a{
		display: block;
	}

	li:hover {
		background-color:#e5e5e5
	}
	
	.link {
		cursor: pointer
	}

	.active {
		text-decoration: underline;
		font-weight: bold;
	}
</style>

<svelte:head>
	<title>Contakto Offline</title>
</svelte:head>

<nav>
	<a href="/candidatos">
		Contakto Offline <small>{VERSION}</small>
	</a>
</nav>


<div class="container">

	<section class="list">
    <div class="controls">
      <h3>Entrevistas</h3>
      <a class="btn" href="/candidato/agregar" on:click={clickHandlerAdd}>+</a>
    </div>
    <ul>
      {#each Object.keys(users).sort((a, b) => users[a].datos_generales.nombre - users[b].datos_generales.nombre) as userUUID}
				<li><a class="link" class:active="{userUUID === uuid}" href="/candidato/{userUUID}/datos-generales">{users[userUUID].datos_generales.nombre}</a></li>
			{/each}
    </ul>
  </section>

	<section class="view">
		{#if uuid }
			<Subnav uuid={uuid} section={section} user={user}/>
		{/if}
		<slot></slot>
	</section>
</div>

<Alert msg={msg} />
