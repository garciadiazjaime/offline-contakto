<script>
	import { motivoSalida } from '../../support/validator'

	export let user

	function  motivoSalidaChange(event) {
		user.info_personal.trabajo_anterior_en_empresa.motivo_salida = event.target.value
	}

	function trabajoAnteriorChange(event) {
		if (event.target.value === 'NO') {
			user.info_personal.trabajo_anterior_en_empresa.puesto = 'No aplica'
			user.info_personal.trabajo_anterior_en_empresa.periodo = 'No aplica'
			user.info_personal.trabajo_anterior_en_empresa.sucursal = 'No aplica'
			user.info_personal.trabajo_anterior_en_empresa.motivo_salida = 'No aplica'
		} else {
			user.info_personal.trabajo_anterior_en_empresa.puesto = ''
			user.info_personal.trabajo_anterior_en_empresa.periodo = ''
			user.info_personal.trabajo_anterior_en_empresa.sucursal = ''
			user.info_personal.trabajo_anterior_en_empresa.motivo_salida = ''
		}
	}

	function familiarTrabajandoChange(event) {
		if (event.target.value === 'NO') {
			user.info_personal.familiar_en_empresa.tiene = 'No aplica'
			user.info_personal.familiar_en_empresa.puesto = 'No aplica'
			user.info_personal.familiar_en_empresa.nombre = 'No aplica'
			user.info_personal.familiar_en_empresa.sucursal = 'No aplica'
			user.info_personal.familiar_en_empresa.parentesco = 'No aplica'
		} else {
			user.info_personal.familiar_en_empresa.tiene = ''
			user.info_personal.familiar_en_empresa.puesto = ''
			user.info_personal.familiar_en_empresa.nombre = ''
			user.info_personal.familiar_en_empresa.sucursal = ''
			user.info_personal.familiar_en_empresa.parentesco = ''
		}
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

	select {
		height: 38px;
	}

	div {
		display: flex;
		padding: 0 0 12px;
	}

	div span {
		width: 240px;
		padding-right: 6px;
	}

	div div {
		width: 100%;
	}

	h2 {
		padding-top: 29px;
	}
</style>


<h1>Inf. Personal</h1>

<div>
	<span>Demandas Laborales y/o Antecedentes Penales</span>
	<input bind:value={user.info_personal.antecedentes_penales} required>
</div>
<div>
	<span>Cuenta con algún tatuaje o arete:(Cuantos y en que parte del cuerpo)</span>
	<input bind:value={user.info_personal.tatuajes} required>
</div>

<h2>Historial en empresa</h2>
<div>
	<span><h3>Ha trabajado anteriormente en la empresa</h3></span>
	<!-- svelte-ignore a11y-no-onchange -->
	<select bind:value={user.info_personal.trabajo_anterior_en_empresa.tiene} on:change={trabajoAnteriorChange} required>
		<option value="">Seleccionar</option>
		<option value="SI">Sí</option>
		<option value="NO">No</option>
	</select>
</div>
<div>
	<span>Puesto</span>
	<input bind:value={user.info_personal.trabajo_anterior_en_empresa.puesto} required>
</div>
<div>
	<span>Periodo</span>
	<input bind:value={user.info_personal.trabajo_anterior_en_empresa.periodo} required>
</div>
<div>
	<span>Sucursal</span>
	<input bind:value={user.info_personal.trabajo_anterior_en_empresa.sucursal} required>
</div>
<div>
	<span>Motivo de Salida</span>
	<div>
		<!-- svelte-ignore a11y-no-onchange -->
		<select on:change={motivoSalidaChange}>
			<option value="">Seleccionar</option>
			{#each motivoSalida as item}
				<option value={item[0]}>{item[1]}</option>
			{/each}
		</select>
		<input bind:value={user.info_personal.trabajo_anterior_en_empresa.motivo_salida} required>
	</div>
</div>

<div>
	<span><h3>Tiene algún familiar trabajando en la empresa</h3></span>
	<select bind:value={user.info_personal.familiar_en_empresa.tiene} on:change={familiarTrabajandoChange} required>
		<option value=""></option>
		<option value="SI">Sí</option>
		<option value="NO">No</option>
	</select>
</div>

<div>
	<span>Puesto</span>
	<input bind:value={user.info_personal.familiar_en_empresa.puesto} required>
</div>
<div>
	<span>Nombre</span>
	<input bind:value={user.info_personal.familiar_en_empresa.nombre} required>
</div>
<div>
	<span>Sucursal</span>
	<input bind:value={user.info_personal.familiar_en_empresa.sucursal} required>
</div>
<div>
	<span>Parentesco</span>
	<input bind:value={user.info_personal.familiar_en_empresa.parentesco} required>
</div>
