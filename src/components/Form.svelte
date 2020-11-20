
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
</style>

<form>

  <slot></slot>

  <span class="btn" on:click={saveHandler}>Guardar</span>
  <span class="btn" on:click={cancelHandler}>Cancelar</span>
</form>
