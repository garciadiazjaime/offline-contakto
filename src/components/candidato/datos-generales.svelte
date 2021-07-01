<script>
	import { nacionalidad, medioTransporte } from '../../support/validator'
	import { fixFields } from '../../support/user'
	export let user

	fixFields(user)
	
	const dropdown = {
		ife: user.datos_generales.dropdown.ife,
		smn: user.datos_generales.dropdown.smn,
		pasaporte: user.datos_generales.dropdown.pasaporte,
		medio_utilizado: user.datos_generales.dropdown.medio_utilizado,
		referencia_vacante: user.datos_generales.dropdown.referencia_vacante,
	}

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

	function dropdownHandler(event, field) {
		if (event.target.value === "" || event.target.value === "especificar") {
			if (field === 'licencia') {
				user.datos_generales.licencia.numero = ""
			} else {
				user.datos_generales[field] = ""
			}
		}

		else if (event.target.value === "no_presento") {
			const label = "No presentó"
			if (field === 'licencia') {
				user.datos_generales.licencia.numero = label
			} else {
				user.datos_generales[field] = label
			}
		}

		else if (event.target.value !== "especificar") {
			user.datos_generales[field] = event.target.value
		}

		dropdown[field] = event.target.value
	}

	function showDropdown(event, field) {
		user.datos_generales.dropdown[field] = ""
		dropdown[field] = ""

		if (field === 'licencia') {
			user.datos_generales.licencia.numero = ""
		} else {
			user.datos_generales[field] = ""
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

	.show-dropdown-parent {
		position: relative;
	}

	.show-dropdown {
		position: absolute;
		right: 0;
		top: 6px;
		font-weight: bold;
		font-size: 18px;
		text-align: right;
		width: 20px;
	}
	.show-dropdown:hover {
		cursor: pointer;
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
<div class="show-dropdown-parent">
	<span>Folio credencial INE</span>
	{#if dropdown.ife !== "especificar"}
	<!-- svelte-ignore a11y-no-onchange -->
	<select bind:value={user.datos_generales.dropdown.ife} required on:change={(event) => dropdownHandler(event, 'ife')}>
		<option value="">Seleccionar</option>
		<option value="no_presento">No presentó</option>
		<option value="especificar">Especificar</option>
	</select>
	{:else}
	<input bind:value={user.datos_generales.ife} required>
	<span class="show-dropdown" on:click={(event) => showDropdown(event, "ife")}>X</span>
	{/if}
</div>
<div class="show-dropdown-parent">
	<span>Cartilla SMN</span>
	{#if dropdown.smn !== "especificar"}
	<!-- svelte-ignore a11y-no-onchange -->
	<select bind:value={user.datos_generales.dropdown.smn} required on:change={(event) => dropdownHandler(event, 'smn')}>
		<option value="">Seleccionar</option>
		<option value="no_presento">No presentó</option>
		<option value="especificar">Especificar</option>
	</select>
	{:else}
	<input bind:value={user.datos_generales.smn} required>
	<span class="show-dropdown" on:click={(event) => showDropdown(event, 'smn')}>X</span>
	{/if}
</div>
<div>
	<span>Tipo de licencia</span>
	<!-- svelte-ignore a11y-no-onchange -->
	<select bind:value={user.datos_generales.licencia.tipo} required on:change={licenciaChange}>
		<option value="">Seleccionar</option>
		<option value="A - Automovilista">A - Automovilista</option>
		<option value="A - Chofer">A - Chofer</option>
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
<div class="show-dropdown-parent">
	<span>No. de licencia</span>
	{#if dropdown.licencia !== "especificar"}
	<!-- svelte-ignore a11y-no-onchange -->
	<select bind:value={user.datos_generales.dropdown.licencia} required on:change={(event) => dropdownHandler(event, 'licencia')}>
		<option value="">Seleccionar</option>
		<option value="no_presento">No presentó</option>
		<option value="especificar">Especificar</option>
	</select>
	{:else}
	<input bind:value={user.datos_generales.licencia.numero} required>
	<span class="show-dropdown" on:click={(event) => showDropdown(event, 'licencia')}>X</span>
	{/if}
</div>
<div class="show-dropdown-parent">
	<span>No. de pasaporte o visa</span>
	{#if dropdown.pasaporte !== "especificar"}
	<!-- svelte-ignore a11y-no-onchange -->
	<select bind:value={user.datos_generales.dropdown.pasaporte} required on:change={(event) => dropdownHandler(event, 'pasaporte')}>
		<option value="">Seleccionar</option>
		<option value="no_presento">No presentó</option>
		<option value="especificar">Especificar</option>
	</select>
	{:else}
	<input bind:value={user.datos_generales.pasaporte} required maxlength="30">
	<span class="show-dropdown" on:click={(event) => showDropdown(event, 'pasaporte')}>X</span>
	{/if}
</div>
<div>
	<span>Tiempo radicando en la ciudad</span>
	<select bind:value={user.datos_generales.tiempo_radicando} required>
		<option value="">Seleccionar</option>
		<option value="menos de 1 año">menos de 1 año</option>
		<option value="1 a 5 años">1 a 5 años</option>
		<option value="más de 5 años">más de 5 años</option>
		<option value="más de 10 años">más de 10 años</option>
		<option value="toda la vida">toda la vida</option>
	</select>
</div>
<div class="show-dropdown-parent">
	<span>Medio que utiliza para transporte</span>
	<div>
		{#if dropdown.medio_utilizado !== "especificar"}
		<!-- svelte-ignore a11y-no-onchange -->
		<select bind:value={user.datos_generales.dropdown.medio_utilizado} required on:change={(event) => dropdownHandler(event, 'medio_utilizado')}>
			<option value="">Seleccionar</option>
			{#each medioTransporte as item}
				<option value={item[0]}>{item[1]}</option>
			{/each}
			<option value="especificar">Especificar</option>
		</select>
		{:else}
		<input bind:value={user.datos_generales.medio_utilizado} required>
		<span class="show-dropdown" on:click={(event) => showDropdown(event, 'medio_utilizado')}>X</span>
		{/if}
	</div>
</div>
<div class="show-dropdown-parent">
	<span>Medio por el qué se enteró de la vacante</span>
	{#if dropdown.referencia_vacante !== "especificar"}
	<!-- svelte-ignore a11y-no-onchange -->
	<select bind:value={user.datos_generales.dropdown.referencia_vacante} required on:change={(event) => dropdownHandler(event, 'referencia_vacante')}>
		<option value="">Seleccionar</option>
		<option value="Bolsas de trabajo">Bolsas de trabajo</option>
		<option value="Redes sociales">Redes sociales</option>
		<option value="Modulo">Modulo</option>
		<option value="Medios impresos">Medios impresos</option>
		<option value="Televisión">Televisión</option>
		<option value="especificar">Especificar</option>
		<option value="Radio">Radio</option>
		<option value="Otros">Otros</option>
	</select>
	{:else}
	<input bind:value={user.datos_generales.referencia_vacante} required>
	<span class="show-dropdown" on:click={(event) => showDropdown(event, 'referencia_vacante')}>X</span>
	{/if}
</div>
<div>
	<span>Tiempo de trayecto al lugar de trabajo</span>
	<input bind:value={user.datos_generales.tiempo_transporte} required>
</div>
