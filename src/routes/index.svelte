<script>
	import { onMount } from 'svelte';

	import DatosGenerales from '../components/candidato/datos-generales.svelte'
	import { getUsers } from '../support/user'

	let activeView = ''
	let users = {}

	onMount(async () => {
		users = getUsers()
	});

	function addUserHandler() {
		showView('CREATE_USER')
	}

	function showView(view) {
		activeView = view
	}

	function updateView(view) {
		activeView = view

		users = getUsers()
	}
</script>

<style>
  .container {
		display: flex;
	}

	.view {
		padding: 12px;
	}

  .list {
		background: #f5f5f5;
		width: 200px;
		padding: 12px;
		height: 100vh;
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
	
	.link {
		cursor: pointer
	}
</style>

<svelte:head>
	<title>Contakto Offline</title>
</svelte:head>

<div class="container">

	<section class="list">
    <div class="controls">
      <h3>Entrevistas</h3>
      <span class="btn" on:click={addUserHandler}>+</span>
    </div>
    <ul>
      {#each Object.keys(users) as uuid}
				<li><span class="link">{users[uuid].nombre}</span></li>
			{/each}
    </ul>
  </section>

	<section class="view">
		{#if activeView === 'CREATE_USER'}
			<DatosGenerales updateView={updateView}	/>
		{/if}
	</section>
</div>

