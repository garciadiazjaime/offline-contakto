<script context="module">
	export async function preload(page) {
		const { uuid } = page.query;

		return { uuid };
	}
</script>

<script>
	import { onMount } from 'svelte';

	import Subnav from '../components/Subnav.svelte'

	import { getUsers } from '../support/user'

	export let uuid;
	export let section;
	export let user;

	let users = {}
	const LIMIT_USERS = 15

	onMount(async () => {
		users = getUsers()
	});

	function clickHandlerAdd(e) {
		users = getUsers()

		if (Object.keys(users).length >= LIMIT_USERS) {
			e.preventDefault()

			alert(`No se pueden crear más de ${LIMIT_USERS} candidatos.`)
		}
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

	li:hover {
		text-decoration: underline;
	}
	
	.link {
		cursor: pointer
	}

	.active {
		text-decoration: underline;
	}
</style>

<svelte:head>
	<title>Contakto Offline</title>
</svelte:head>

<nav>
	<ul>
		<li>
			<a href="/">
				<img src="http://www.contaktoapp.com/static/media/logo_white.png" alt="">
			</a>
		</li>
	</ul>
</nav>


<div class="container">

	<section class="list">
    <div class="controls">
      <h3>Entrevistas</h3>
      <a class="btn" href="/candidato/agregar" on:click={clickHandlerAdd}>+</a>
    </div>
    <ul>
      {#each Object.keys(users).sort((a, b) => users[a].generales.nombre - users[b].generales.nombre) as userUUID}
				<li><a class="link" class:active="{userUUID === uuid}" href="/candidato/{userUUID}/datos-generales">{users[userUUID].generales.nombre}</a></li>
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
