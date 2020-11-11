<script>
	import { onMount } from 'svelte';

	import Subnav from '../Subnav.svelte'
	import { getUser, saveUser, updateUser, STEPS } from '../../support/user'

	
	export let updateView;
	export let user;

	const data = user.personal || {}


	function saveHandler() {
		const newData = {
			...user,
			personal: data
		}

		if (!newData.uuid) {
			saveUser(newData)
		} else {
			updateUser(newData)
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
	input, select {
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

<Subnav updateView={updateView} user={user} />



<h1>Inf. Personal</h1>

<p>
	<span>Demandas Laborales y/o Antecedentes Penales</span>
	<input bind:value={data.demandas}>
</p>
<p>
	<span>Cuenta con algún tatuaje o arete:(Cuantos y en que parte del cuerpo)</span>
	<input bind:value={data.tatuaje}>
</p>

<h2>Historial en empresa</h2>
<p>
	<span><h3>Ha trabajado anteriormente en la empresa</h3></span>
	<select bind:value={data.empresaAnterior}>
		<option value=""></option>
		<option value="SI">Sí</option>
		<option value="NO">No</option>
	</select>
</p>
<p>
	<span>Puesto</span>
	<input bind:value={data.empresaPuestoAnterior}>
</p>
<p>
	<span>Periodo:</span>
	<input bind:value={data.empresoPeriodoAnterior}>
</p>
<p>
	<span>Sucursal</span>
	<input bind:value={data.empresoSucursalAnterior}>
</p>
<p>
	<span>Motivo de Salida:</span>
	<input bind:value={data.empresaSalidaAnterior}>
</p>

<p>
	<span><h3>Tiene algún familiar trabajando en la empresa:</h3></span>
	<input bind:value={data.empresaFamiliar}>
</p>

<p>
	<span>Puesto:</span>
	<input bind:value={data.empresaPuestoFamiliar}>
</p>
<p>
	<span>Nombre:</span>
	<input bind:value={data.empresaNombreFamiliar}>
</p>
<p>
	<span>Sucursal:</span>
	<input bind:value={data.empresaSucursalFamiliar}>
</p>
<p>
	<span>Parentesco:</span>
	<input bind:value={data.empresaParentescoFamiliar}>
</p>

<span class="btn" on:click={saveHandler}>Guardar</span>
<span class="btn" on:click={cancelHandler}>Cancelar</span>
