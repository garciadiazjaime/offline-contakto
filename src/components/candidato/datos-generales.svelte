<script>
	import { nacionalidad, medioTransporte } from '../../support/validator'
	export let user

	const states = ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Distrito Federal", "Durango", "Estado de Mexico", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacan", "Morelos", "Nayarit", "Nuevo Leon", "Oaxaca", "Puebla", "Queretaro", "Quintana Roo", "San Luis Potosi", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatan", "Zacatecas"];

	function nacionalidadChange(event) {
		user.datos_generales.origen.nacionalidad = event.target.value
	}

	function transporteChange(event) {
		user.datos_generales.medio_utilizado = event.target.value
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


<h1>Datos Generales</h1>

<div>
	<span>Nombre</span>
	<input bind:value={user.datos_generales.nombre} required>
</div>
<div>
	<span>Apellido</span>
	<input bind:value={user.datos_generales.apellido} required>
</div>
<div>
	<span>Email</span>
	<input bind:value={user.datos_generales.email} required>
</div>

<h2>Domicilio</h2>
<div>
	<span>Calle</span>
	<input bind:value={user.datos_generales.direccion.calle} required>
</div>
<div>
	<span>Colonia</span>
	<input bind:value={user.datos_generales.direccion.colonia} required>
</div>
<div>
	<span>Num ext-int</span>
	<input bind:value={user.datos_generales.direccion.num} required>
</div>
<div>
	<span>Ciudad</span>
	<input bind:value={user.datos_generales.direccion.ciudad} required>
</div>
<div>
	<span>Estado</span>
	<select bind:value={user.datos_generales.direccion.estado} required>
		<option value="">Seleccionar</option>
		{#each states as state}
		<option value={state}>{state}</option>
		{/each}
	</select>
</div>
<div>
	<span>Código Postal</span>
	<input bind:value={user.datos_generales.direccion.cp} required>
</div>

<h2>Teléfonos</h2>
<div>
	<span>Casa</span>
	<input bind:value={user.datos_generales.telefono.casa} placeholder="###-###-####" required>
</div>
<div>
	<span>Celular</span>
	<input bind:value={user.datos_generales.telefono.movil} placeholder="###-###-####" required>
</div>
<div>
	<span>Recado</span>
	<input bind:value={user.datos_generales.telefono.recados.numero} placeholder="###-###-####" required>
</div>
<div>
	<span>Parentesco</span>
	<input bind:value={user.datos_generales.telefono.recados.parentesco} required>
</div>

<h2>Datos adicionales</h2>
<div>
	<span>Lugar de nacimiento</span>
	<input bind:value={user.datos_generales.origen.lugar} required>
</div>
<div>
	<span>Fecha de nacimiento</span>
	<input bind:value={user.datos_generales.origen.fecha} placeholder="DD/MM/AAAA" required>
</div>
<div>
	<span>
		Nacionalidad
	</span>
	<div>
		<!-- svelte-ignore a11y-no-onchange -->
		<select on:change={nacionalidadChange}>
			<option value="">Seleccionar</option>
			{#each nacionalidad as item}
				<option value={item[0]}>{item[1]}</option>
			{/each}
		</select>
		<input bind:value={user.datos_generales.origen.nacionalidad} required>
	</div>
</div>
<div>
	<span>RFC</span>
	<input bind:value={user.datos_generales.rfc} required>
</div>
<div>
	<span>CURP</span>
	<input bind:value={user.datos_generales.curp} required>
</div>
<div>
	<span>Folio credencial INE</span>
	<input bind:value={user.datos_generales.ife} required>
</div>
<div>
	<span>Cartilla SMN</span>
	<input bind:value={user.datos_generales.smn} required>
</div>
<div>
	<span>Tipo de licencia</span>
	<select bind:value={user.datos_generales.licencia.tipo} required>
		<option value="">Seleccionar</option>
		<option value="A">A</option>
		<option value="B">B</option>
		<option value="C">C</option>
		<option value="D">D</option>
		<option value="E">E</option>
		<option value="E1">E1</option>
		<option value="Federal">Federal</option>
		<option value="Binacional">Binacional</option>
	</select>
</div>
<div>
	<span>No. de licencia</span>
	<input bind:value={user.datos_generales.licencia.numero} required>
</div>
<div>
	<span>No. de pasaporte o visa</span>
	<input bind:value={user.datos_generales.pasaporte} required>
</div>
<div>
	<span>NSS (IMSS)</span>
	<input bind:value={user.datos_generales.nss} required>
</div>
<div>
	<span>Estado civil</span>
	<select bind:value={user.datos_generales.estado_civil} required>
		<option value="">Seleccionar</option>
		<option value="Soltero">Soltero(a)</option>
		<option value="Casado">Casado(a)</option>
		<option value="Divorciado">Divorciado(a)</option>
		<option value="Unión Libre">Unión Libre</option>
		<option value="Viudo">Viudo(a)</option>
	</select>
</div>
<div>
	<span>Fecha de matrimonio</span>
	<input bind:value={user.datos_generales.fecha_matrimonio} placeholder="DD/MM/AAAA" required>
</div>
<div>
	<span>Religión</span>
	<input bind:value={user.datos_generales.religion} required>
</div>
<div>
	<span>Tiempo radicando en la ciudad</span>
	<input bind:value={user.datos_generales.tiempo_radicando} required>
</div>
<div>
	<span>Medio que utiliza para transporte</span>
	<div>
		<!-- svelte-ignore a11y-no-onchange -->
		<select on:change={transporteChange}>
			<option value="">Seleccionar</option>
			{#each medioTransporte as item}
				<option value={item[0]}>{item[1]}</option>
			{/each}
		</select>
		<input bind:value={user.datos_generales.medio_utilizado} required>
	</div>
</div>
<div>
	<span>Medio por el qué se enteró de la vacante</span>
	<input bind:value={user.datos_generales.referencia_vacante} required>
</div>
<div>
	<span>Tiempo de trayecto al lugar de trabajo</span>
	<input bind:value={user.datos_generales.tiempo_transporte} required>
</div>
