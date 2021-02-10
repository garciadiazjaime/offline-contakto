
<script>
	import { goto } from '@sapper/app';
	import { onMount } from 'svelte';

	import { saveUser, updateUser, STEPS } from '../support/user'
	import Alert from './Alert.svelte'
	import { publish } from '../support/events'
	import { isDatosGeneralesValid, isInfoPersonalValid, isActividadesHabitosValid } from '../support/validator'

	export let user;
	export let section;

	function areInputsNotEmpty(fields) {
		if (!fields.length) {
			return true
		}

		if (fields[0] === '') {
			return false
		}

		return areInputsNotEmpty(fields.slice(1))
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

		let isFormValid = true

		if (section === STEPS.generales) {
			isFormValid = isDatosGeneralesValid(user)
		}

		if (!isFormValid) {
			return null
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
