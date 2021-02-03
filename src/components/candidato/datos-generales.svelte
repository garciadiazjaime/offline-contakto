<script>
	export let user

	const states = ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Distrito Federal", "Durango", "Estado de Mexico", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacan", "Morelos", "Nayarit", "Nuevo Leon", "Oaxaca", "Puebla", "Queretaro", "Quintana Roo", "San Luis Potosi", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatan", "Zacatecas"];

	function nacionalidadChange(event) {
		const nacionalidad = this.checked ? 'Mexicana' : ''
		user.datos_generales.origen.nacionalidad = nacionalidad
	}
</script>


<style>
	span {
		display: block;
	}

	input:not([type='checkbox']), select {
		height: 32px;
		font-size: 26px;
		width: 100%;
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

	.nacionalidad {
		width: 100%;
	}
</style>


<h1>Datos Generales</h1>

<p>
	<span>Nombre</span>
	<input bind:value={user.datos_generales.nombre}>
</p>
<p>
	<span>Apellido</span>
	<input bind:value={user.datos_generales.apellido}>
</p>
<p>
	<span>Email</span>
	<input bind:value={user.datos_generales.email}>
</p>

<h2>Domicilio</h2>
<p>
	<span>Calle</span>
	<input bind:value={user.datos_generales.direccion.calle}>
</p>
<p>
	<span>Colonia</span>
	<input bind:value={user.datos_generales.direccion.colonia}>
</p>
<p>
	<span>Num ext-int</span>
	<input bind:value={user.datos_generales.direccion.num}>
</p>
<p>
	<span>Ciudad</span>
	<input bind:value={user.datos_generales.direccion.ciudad}>
</p>
<p>
	<span>Estado</span>
	<select bind:value={user.datos_generales.direccion.estado}>
		<option>Seleccionar</option>
		{#each states as state}
		<option value={state}>{state}</option>
		{/each}
	</select>
</p>
<p>
	<span>Código Postal</span>
	<input bind:value={user.datos_generales.direccion.cp}>
</p>

<h2>Teléfonos</h2>
<p>
	<span>Casa</span>
	<input bind:value={user.datos_generales.telefono.casa} placeholder="###-###-####">
</p>
<p>
	<span>Celular</span>
	<input bind:value={user.datos_generales.telefono.movil} placeholder="###-###-####">
</p>
<p>
	<span>Recado</span>
	<input bind:value={user.datos_generales.telefono.recados.numero} placeholder="###-###-####">
</p>
<p>
	<span>Parentesco</span>
	<input bind:value={user.datos_generales.telefono.recados.parentesco}>
</p>

<h2>Datos adicionales</h2>
<p>
	<span>Lugar de nacimiento</span>
	<input bind:value={user.datos_generales.origen.lugar}>
</p>
<p>
	<span>Fecha de nacimiento</span>
	<input bind:value={user.datos_generales.origen.fecha} placeholder="DD/MM/AAAA">
</p>
<p>
	<span>
		Nacionalidad <br />
		<span class="nacionalidad">
			<input type="checkbox" on:change={nacionalidadChange}> Mexicana 
		</span>
	</span>
	<input bind:value={user.datos_generales.origen.nacionalidad}>
</p>
<p>
	<span>RFC</span>
	<input bind:value={user.datos_generales.rfc}>
</p>
<p>
	<span>CURP</span>
	<input bind:value={user.datos_generales.curp}>
</p>
<p>
	<span>Folio credencial INE</span>
	<input bind:value={user.datos_generales.ife}>
</p>
<p>
	<span>Cartilla SMN</span>
	<input bind:value={user.datos_generales.smn}>
</p>
<p>
	<span>Tipo de licencia</span>
	<input bind:value={user.datos_generales.licencia.tipo}>
</p>
<p>
	<span>No. de licencia</span>
	<input bind:value={user.datos_generales.licencia.numero}>
</p>
<p>
	<span>No. de pasaporte o visa</span>
	<input bind:value={user.datos_generales.pasaporte}>
</p>
<p>
	<span>NSS (IMSS)</span>
	<input bind:value={user.datos_generales.nss}>
</p>
<p>
	<span>Estado civil</span>
	<input bind:value={user.datos_generales.estado_civil}>
</p>
<p>
	<span>Fecha de matrimonio</span>
	<input bind:value={user.datos_generales.fecha_matrimonio}>
</p>
<p>
	<span>Religión</span>
	<input bind:value={user.datos_generales.religion}>
</p>
<p>
	<span>Tiempo radicando en la ciudad</span>
	<input bind:value={user.datos_generales.tiempo_radicando}>
</p>
<p>
	<span>Medio que utiliza para transporte</span>
	<input bind:value={user.datos_generales.medio_utilizado}>
</p>
<p>
	<span>Medio por el qué se enteró de la vacante</span>
	<input bind:value={user.datos_generales.referencia_vacante}>
</p>
<p>
	<span>Tiempo de trayecto al lugar de trabajo</span>
	<input bind:value={user.datos_generales.tiempo_transporte}>
</p>
