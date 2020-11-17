<script>
	import Subnav from '../Subnav.svelte'
	import { getUser, saveUser, updateUser, STEPS } from '../../support/user'

	export let updateView;
	export let user;
	export let activeView;

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

		updateView(STEPS.generales, user)
	}

	function cancelHandler() {
		updateView()
	}
</script>

<style>
	span {
		display: block;
	}
	input {
		height: 32px;
		font-size: 26px;
		width: 100%;
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

	p {
		display: flex;
		align-items: center;
	}

	p span {
		width: 240px;
		padding-right: 6px;
	}

	h2 {
		padding-top: 29px;
	}
</style>

{#if user.uuid }
<Subnav updateView={updateView} user={user} activeView={activeView} />
{/if}

<h1>Datos Generales</h1>

<p>
	<span>Nombre</span>
	<input bind:value={user.generales.nombre}>
</p>
<p>
	<span>Apellido</span>
	<input bind:value={user.generales.apellido}>
</p>
<p>
	<span>Email</span>
	<input bind:value={user.generales.email}>
</p>

<h2>Domicilio</h2>
<p>
	<span>Calle</span>
	<input bind:value={user.generales.calle}>
</p>
<p>
	<span>Colonia</span>
	<input bind:value={user.generales.colonia}>
</p>
<p>
	<span>Num ext-int</span>
	<input bind:value={user.generales.numExterior}>
</p>
<p>
	<span>Ciudad</span>
	<input bind:value={user.generales.ciudad}>
</p>
<p>
	<span>Estado</span>
	<input bind:value={user.generales.estado}>
</p>
<p>
	<span>Código Postal</span>
	<input bind:value={user.generales.codigoPostal}>
</p>

<h2>Teléfonos</h2>
<p>
	<span>Casa</span>
	<input bind:value={user.generales.telefonoCasa}>
</p>
<p>
	<span>Celular</span>
	<input bind:value={user.generales.telefonoCelular}>
</p>
<p>
	<span>Recado</span>
	<input bind:value={user.generales.telefonoRecado}>
</p>
<p>
	<span>Parentesco</span>
	<input bind:value={user.generales.telefonoParentesco}>
</p>

<h2>Datos adicionales</h2>
<p>
	<span>Lugar de nacimiento</span>
	<input bind:value={user.generales.lugarNacimiento}>
</p>
<p>
	<span>Fecha de nacimiento</span>
	<input bind:value={user.generales.fechaNacimiento}>
</p>
<p>
	<span>Nacionalidad</span>
	<input bind:value={user.generales.nacionalidad}>
</p>
<p>
	<span>RFC</span>
	<input bind:value={user.generales.rfc}>
</p>
<p>
	<span>CURP</span>
	<input bind:value={user.generales.curp}>
</p>
<p>
	<span>Folio credencial INE</span>
	<input bind:value={user.generales.ine}>
</p>
<p>
	<span>Cartilla SMN</span>
	<input bind:value={user.generales.smn}>
</p>
<p>
	<span>Tipo de licencia</span>
	<input bind:value={user.generales.tipoLicencia}>
</p>
<p>
	<span>No. de licencia</span>
	<input bind:value={user.generales.licencia}>
</p>
<p>
	<span>No. de pasaporte o visa</span>
	<input bind:value={user.generales.pasaporte}>
</p>
<p>
	<span>NSS (IMSS)</span>
	<input bind:value={user.generales.nss}>
</p>
<p>
	<span>Estado civil</span>
	<input bind:value={user.generales.estadoCivil}>
</p>
<p>
	<span>Fecha de matrimonio</span>
	<input bind:value={user.generales.fechaMatrimonio}>
</p>
<p>
	<span>Religión</span>
	<input bind:value={user.generales.religion}>
</p>
<p>
	<span>Tiempo radicando en la ciudad</span>
	<input bind:value={user.generales.tiempoRadicado}>
</p>
<p>
	<span>Medio que utiliza para transporte</span>
	<input bind:value={user.generales.medioTransporte}>
</p>
<p>
	<span>Medio por el qué se enteró de la vacante</span>
	<input bind:value={user.generales.medioEntero}>
</p>
<p>
	<span>Tiempo de trayecto al lugar de trabajo</span>
	<input bind:value={user.generales.tiempoTrayecto}>
</p>

<span class="btn" on:click={saveHandler}>Guardar</span>
<span class="btn" on:click={cancelHandler}>Cancelar</span>
