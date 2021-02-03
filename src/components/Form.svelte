
<script>
	import { goto } from '@sapper/app';
	import { onMount } from 'svelte';

	import { saveUser, updateUser } from '../support/user'
	import Alert from './Alert.svelte'
	import { publish } from '../support/events'

	export let user;

	const telephoneRegex = /^[\d]{3}-[\d]{3}-[\d]{4}$/

	function areInputsNotEmpty(fields) {
		if (!fields.length) {
			return true
		}

		if (fields[0] === '') {
			return false
		}

		return areInputsNotEmpty(fields.slice(1))
	}

	function arePhonesValid(fields) {
		if (!fields.length) {
			return true
		}
		
		if (!telephoneRegex.test(fields[0]) && fields[0].toLowerCase() !== 'no tiene') {
			return false
		}

		return arePhonesValid(fields.slice(1))
	}

	function isFormReady() {
		const fields = []
		document.querySelectorAll('form input').forEach(input => {
			fields.push(input.value)
		})

		return areInputsNotEmpty(fields)
	}

	function saveHandler() {
		if (!isFormReady()) {
			return publish('UPDATE_MSG', { msg: 'Es necesario llenar todos los campos' })
		}

		if (!arePhonesValid([user.datos_generales.telefono.casa, user.datos_generales.telefono.movil, user.datos_generales.telefono.recados.numero])) {
			return publish('UPDATE_MSG', { msg: 'Teléfonos deben llevar el formato: 123-123-1234 o "no tiene"' })
		}

		if (!user.uuid) {
			saveUser(user)
			return goto('/candidatos');
		} else {
			updateUser(user)
		}

		publish('UPDATE_MSG', { msg: 'Información guardada', type: 'success' })
		publish('UPDATE_LIST')
	}

	function cancelHandler() {
		goto('/candidatos');
	}
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

<Alert />
