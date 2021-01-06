
<script>
	import { goto } from '@sapper/app';
	import { onMount } from 'svelte';

	import { saveUser, updateUser } from '../support/user'
	import Alert from './Alert.svelte'

	export let user;
	
	let msg = ''

	function saveHandler() {
		if (!user.datos_generales.nombre) {
			return msg = 'Es necesario capturar nombre'
		}

		if (!user.uuid) {
			saveUser(user)
		} else {
			updateUser(user)
		}

		goto('/candidatos?exito');
	}

	function cancelHandler() {
		goto('/candidatos');
	}

	onMount(() => {
		const url = new URL(window.location)
		if(url.search.includes('exito')) {
			msg = 'Información guardada'
		}
	})
</script>

<style>
	span {
		display: block;
	}

	.control {
		text-align: right;
		margin: 12px 0;
	}

	.btn {
		display: inline-block;
		padding: 12px;
		font-size: 20px;
		border: 1px solid black;
	}

	.btn:first-of-type {
		margin-right: 12px;
	}

	.btn:hover {
		text-decoration: underline;
	}
	
	.btn:hover {
		cursor: pointer;
	}

	.success {
		background: #428bca;
		color: white;
		border-color: #357ebd;
	}
</style>

<form>

  <slot></slot>

	<div class="control">
		<span class="btn" on:click={cancelHandler}>Cancelar</span>
		<span class="btn success" on:click={saveHandler}>Guardar</span>
	</div>
</form>

<Alert msg={msg} />
