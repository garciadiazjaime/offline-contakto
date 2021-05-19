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

	function licenciaChange(event) {
		if (event.target.value === 'No Tiene') {
			user.datos_generales.licencia.numero = 'No Aplica'
		} else {
			user.datos_generales.licencia.numero = ''
		}
	}

	function edoCivilChange(event) {
		if (event.target.value === 'Soltero') {
			user.datos_generales.fecha_matrimonio = 'No Aplica'
		}
	}

	function telefonoHandler(event, field) {
		const x = event.target.value.slice(0, 12).replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
		const phone = !x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');
		if (field === 'user.datos_generales.telefono.casa') {
			user.datos_generales.telefono.casa = phone
		}
		else if (field === 'user.datos_generales.telefono.movil') {
			user.datos_generales.telefono.movil = phone
		}
		else if (field === 'user.datos_generales.telefono.recados.numero') {
			user.datos_generales.telefono.recados.numero = phone
		}
	}

	function dateHandler(event, field) {
		const [year, month, day] = event.target.value.split('-')
		const date = `${day}/${month}/${year}`

		if (field === 'user.datos_generales.origen.fecha') {
			user.datos_generales.origen.fecha = date
		}
		else if(field === 'user.datos_generales.fecha_matrimonio') {
			user.datos_generales.fecha_matrimonio = date
		}
	}

	function telSelectHandler(event, field) {
		const value = event.target.value === "1" ? 'No tiene' : ''

		if (field === 'user.datos_generales.telefono.casa') {
			user.datos_generales.telefono.casa = value
		}
		else if (field === 'user.datos_generales.telefono.movil') {
			user.datos_generales.telefono.movil = value
		}
		else if (field === 'user.datos_generales.telefono.recados.numero') {
			user.datos_generales.telefono.recados.numero = value
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

	.date-picker {
		width: 64px;
		border: none;
	}
	.date-picker:focus, .date-picker:focus{
		outline: none;
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
	<div>
		<input on:keyup={e => telefonoHandler(e, 'user.datos_generales.telefono.casa')} bind:value={user.datos_generales.telefono.casa} placeholder="###-###-####" required>
		<!-- svelte-ignore a11y-no-onchange -->
		<select on:change={e => telSelectHandler(e, 'user.datos_generales.telefono.casa')}>
			<option value=0>Seleccionar</option>
			<option value=1>No tiene</option>
		</select>
	</div>
</div>
<div>
	<span>Celular</span>
	<div>
		<input on:keyup={e => telefonoHandler(e, 'user.datos_generales.telefono.movil')} bind:value={user.datos_generales.telefono.movil} placeholder="###-###-####" required>
		<!-- svelte-ignore a11y-no-onchange -->
		<select on:change={e => telSelectHandler(e, 'user.datos_generales.telefono.movil')}>
			<option value=0>Seleccionar</option>
			<option value=1>No tiene</option>
		</select>
	</div>
</div>
<div>
	<span>Recado</span>
	<div>
		<input on:keyup={e => telefonoHandler(e, 'user.datos_generales.telefono.recados.numero')} bind:value={user.datos_generales.telefono.recados.numero} placeholder="###-###-####" required>
		<!-- svelte-ignore a11y-no-onchange -->
		<select on:change={e => telSelectHandler(e, 'user.datos_generales.telefono.recados.numero')}>
			<option value=0>Seleccionar</option>
			<option value=1>No tiene</option>
		</select>
	</div>
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
	<div>
		<input bind:value={user.datos_generales.origen.fecha} placeholder="DD/MM/AAAA" required>
		<input on:change={e => dateHandler(e, 'user.datos_generales.origen.fecha')} type="date" class="date-picker">
	</div>
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
	<!-- svelte-ignore a11y-no-onchange -->
	<select bind:value={user.datos_generales.licencia.tipo} required on:change={licenciaChange}>
		<option value="">Seleccionar</option>
		<option value="A">A</option>
		<option value="B">B</option>
		<option value="C">C</option>
		<option value="D">D</option>
		<option value="E">E</option>
		<option value="E1">E1</option>
		<option value="Federal">Federal</option>
		<option value="Binacional">Binacional</option>
		<option value="No Tiene">No Tiene</option>
	</select>
</div>
<div>
	<span>No. de licencia</span>
	<input bind:value={user.datos_generales.licencia.numero} required>
</div>
<div>
	<span>No. de pasaporte o visa</span>
	<input bind:value={user.datos_generales.pasaporte} required maxlength="30">
</div>
<div>
	<span>NSS (IMSS)</span>
	<input bind:value={user.datos_generales.nss} required>
</div>
<div>
	<span>Estado civil</span>
	<!-- svelte-ignore a11y-no-onchange -->
	<select bind:value={user.datos_generales.estado_civil} required on:change={edoCivilChange}>
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
	<div>
		<input bind:value={user.datos_generales.fecha_matrimonio} placeholder="DD/MM/AAAA" required>
		<input on:change={e => dateHandler(e, 'user.datos_generales.fecha_matrimonio')} type="date" class="date-picker">
	</div>
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
