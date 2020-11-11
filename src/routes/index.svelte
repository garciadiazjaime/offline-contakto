<script>
	import { onMount } from 'svelte';

	import DatosGenerales from '../components/candidato/datos-generales.svelte'
	import InformacionPersonal from '../components/candidato/informacion-personal.svelte'
	import { STEPS, getUsers, getUser } from '../support/user'

	let activeView = ''
	let users = {}
	let activeUser = {}
	const LIMIT_USERS = 15

	onMount(async () => {
		users = getUsers()
	});

	function getNewUser() {
		return {
			generales: {},
			personal: {}
		}
	}

	function addUserHandler() {
		users = getUsers()
		if (Object.keys(users).length >= LIMIT_USERS) {
			return alert(`No se pueden crear más de ${LIMIT_USERS} candidatos.`)
		}

		activeUser = getNewUser()

		activeView = STEPS.generales
	}

	function updateView(view, user) {
		activeView = view

		users = getUsers()

		activeUser = user || getNewUser()
	}

	function editUserHandler(uuid) {
		activeUser = getUser(uuid)

		activeView = STEPS.generales
	}
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		background-color: #101010;
		padding: 12px;

		position: fixed;
		width: 100%;
		z-index: 1;
	}

	nav ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	nav ul::after {
		content: '';
		display: block;
		clear: both;
	}

	nav li {
		display: block;
		float: left;
	}
	
  .container {
		position: relative;
		top: 74px;
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
    margin: 6px;
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

	li:hover {
		text-decoration: underline;
	}
	
	.link {
		cursor: pointer
	}
</style>

<svelte:head>
	<title>Contakto Offline</title>
</svelte:head>

<nav>
	<ul>
		<li>
			<a href="/" on:click={() => updateView('')}>
				<img src="http://www.contaktoapp.com/static/media/logo_white.png" alt="">
			</a>
		</li>
	</ul>
</nav>


<div class="container">

	<section class="list">
    <div class="controls">
      <h3>Entrevistas</h3>
      <span class="btn" on:click={addUserHandler}>+</span>
    </div>
    <ul>
      {#each Object.keys(users) as uuid}
				<li><span class="link" on:click={() => editUserHandler(uuid)}>{users[uuid].generales.nombre}</span></li>
			{/each}
    </ul>
  </section>

	<section class="view">
		{#if activeView === STEPS.generales}
			<DatosGenerales updateView={updateView} user={activeUser}	/>
		{:else if activeView === STEPS.personal}
			<InformacionPersonal updateView={updateView} user={activeUser} />
		{/if}
	</section>
</div>

