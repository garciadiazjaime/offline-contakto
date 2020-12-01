
<script>
	import { goto } from '@sapper/app';

	import { saveUser, updateUser } from '../support/user'

  export let user;

	function saveHandler() {
		if (!user.generales.nombre) {
			alert('Es necesario capturar nombre')
			return
    }

		if (!user.uuid) {
			saveUser(user)
		} else {
			updateUser(user)
		}

		goto('/');
	}

	function cancelHandler() {
		goto('/');
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
