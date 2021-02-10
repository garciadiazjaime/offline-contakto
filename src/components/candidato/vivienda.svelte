<script>
	export let user
	const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

	function tipoViviendaChange(event) {
		user.situacion_vivienda.caracteristicas_vivienda.propia = event.target.value
	}

	function tipoInmuebleChange(event) {
		user.situacion_vivienda.tipo_inmueble.casa = event.target.value
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


<h1>Vivienda</h1>

<div>
	<span>Nombre del propietario</span>
	<input bind:value={user.situacion_vivienda.propietario.nombre} required>
</div>
<div>
	<span>Parentesco</span>
	<input bind:value={user.situacion_vivienda.propietario.parentesco} required>
</div>
<div>
	<span>Renta mensual</span>
	<input bind:value={user.situacion_vivienda.caracteristicas_vivienda.renta_mensual} placeholder="$m.n. o no aplica" required>
</div>

<h2>Vivienda</h2>
<div>
	<span>Tipo</span>
	<div>
		<select on:change={tipoViviendaChange}>
			<option value="">Seleccionar</option>
			<option value="PROPIA">Propia</option>
			<option value="RENTADA">Rentada</option>
			<option value="HIPOTECA">Hipotecada</option>
			<option value="PRESTADA">Prestada</option>
			<option value="">Otro</option>
		</select>
		<input bind:value={user.situacion_vivienda.caracteristicas_vivienda.propia} required>
	</div>
</div>
<div>
	<span>Otra</span>
 	<input bind:value={user.situacion_vivienda.caracteristicas_vivienda.otra} required>
</div>
<div>
	<span>Valor aproximado</span>
	<input bind:value={user.situacion_vivienda.caracteristicas_vivienda.valor_aproximado} required>
</div>

<h2>Tipo de inmueble</h2>
<div>
	<span>Tipo</span>
	<div>
		<select on:change={tipoInmuebleChange}>
			<option value="">Seleccionar</option>
			<option value="CASA">Casa</option>
			<option value="TERRENO">Terreno compartido</option>
			<option value="DEPARTAMENTO">Departamento</option>
			<option value="POPULAR">Vivienda popular</option>
			<option value="">Otro</option>
		</select>
		<input bind:value={user.situacion_vivienda.tipo_inmueble.casa}>
	</div>
</div>
<div>
	<span>Otro</span>
	<input bind:value={user.situacion_vivienda.tipo_inmueble.otro_tipo} required>
</div>

<h2>Distribución dimensional</h2>
<div>
	<span>Habitaciones</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.habitaciones}>
		<option value="">Seleccionar</option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</div>
<div>
	<span>Baños</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.banos}>
		<option value="">Seleccionar</option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</div>
<div>
	<span>Salas</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.salas}>
		<option value="">Seleccionar</option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</div>
<div>
	<span>Comedor</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.comedor}>
		<option value="">Seleccionar</option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</div>
<div>
	<span>Cocina</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.cocina}>
		<option value="">Seleccionar</option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</div>
<div>
	<span>Patios</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.patios}>
		<option value="">Seleccionar</option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</div>
<div>
	<span>Cocheras</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.cocheras}>
		<option value="">Seleccionar</option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</div>

<br />

<div>
	<span>Tiempo de radicar en el domicilio</span>
	<input bind:value={user.situacion_vivienda.tiempo_radicando} required>
</div>
<div>
	<span>Tipo de mobiliario</span>
	<select bind:value={user.situacion_vivienda.tipo_mobiliario}>
		<option value="">Seleccionar</option>
		<option value="INSUFICIENTE">Insuficiente</option>
		<option value="SUFICIENTE">Suficiente</option>
	</select>
</div>
<div>
	<span>Sector socioeconómico</span>
	<select bind:value={user.situacion_vivienda.sector_socioeconomico}>
		<option value="">Seleccionar</option>
		<option value="A/B: Clase rica">A/B: Clase rica</option>
		<option value="C+: Clase media alta">C+: Clase media alta</option>
		<option value="C: Clase Media">C: Clase Media</option>
		<option value="D+: Clase media baja">D+: Clase media baja</option>
		<option value="D: Clase pobre">D: Clase pobre</option>
		<option value="E: Pobreza extrema">E: Pobreza extrema</option>
	</select>
</div>
<div>
	<span>Número de personas y parentescos de quienes viven con el evaluado</span>
	<input bind:value={user.situacion_vivienda.personas_viven_con_evaluado} required>
</div>
<div>
	<span>Conservación de Vivienda</span>
	<select bind:value={user.situacion_vivienda.conservacion}>
		<option value="">Seleccionar</option>
		<option value="BUENO">Buen estado</option>
		<option value="REGULAR">Regular estado</option>
		<option value="MALO">Mal estado</option>
	</select>
</div>
<div>
	<span>Tamaño aproximado (mts2)</span>
	<input bind:value={user.situacion_vivienda.tamano_aprox_mts2} required>
</div>
<div>
	<span>Si tiene menos de 5 años viviendo en el domicilio, especifique su domicilio anterior completo</span>
	<input bind:value={user.situacion_vivienda.domicilio_anterior} required>
</div>
<div>
	<span>Direcciones de cómo llegar al domicilio</span>
	<input bind:value={user.situacion_vivienda.domicilio_direcciones} required>
</div>

<h2>Personas que viven con el evaluado</h2>
<table>
	<tr>
		<th>Parentesco</th>
		<th>Nombre</th>
		<th>Edad</th>
		<th>Ocupación</th>
		<th>Empresa</th>
		<th>Residencia</th>
		<th>Teléfono</th>
	</tr>

	<tr>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[0].parentesco}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[0].nombre}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[0].edad}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[0].ocupacion}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[0].empresa}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[0].residencia}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[0].telefono}></td>
	</tr>

	<tr>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[1].parentesco}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[1].nombre}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[1].edad}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[1].ocupacion}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[1].empresa}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[1].residencia}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[1].telefono}></td>
	</tr>

	<tr>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[2].parentesco}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[2].nombre}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[2].edad}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[2].ocupacion}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[2].empresa}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[2].residencia}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[2].telefono}></td>
	</tr>

	<tr>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[3].parentesco}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[3].nombre}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[3].edad}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[3].ocupacion}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[3].empresa}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[3].residencia}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[3].telefono}></td>
	</tr>

	<tr>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[4].parentesco}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[4].nombre}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[4].edad}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[4].ocupacion}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[4].empresa}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[4].residencia}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[4].telefono}></td>
	</tr>

	<tr>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[5].parentesco}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[5].nombre}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[5].edad}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[5].ocupacion}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[5].empresa}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[5].residencia}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[5].telefono}></td>
	</tr>

	<tr>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[6].parentesco}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[6].nombre}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[6].edad}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[6].ocupacion}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[6].empresa}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[6].residencia}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[6].telefono}></td>
	</tr>

	<tr>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[7].parentesco}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[7].nombre}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[7].edad}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[7].ocupacion}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[7].empresa}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[7].residencia}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[7].telefono}></td>
	</tr>

	<tr>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[8].parentesco}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[8].nombre}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[8].edad}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[8].ocupacion}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[8].empresa}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[8].residencia}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[8].telefono}></td>
	</tr>

	<tr>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[9].parentesco}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[9].nombre}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[9].edad}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[9].ocupacion}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[9].empresa}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[9].residencia}></td>
		<td><input bind:value={user.situacion_vivienda.marco_familiar[9].telefono}></td>
	</tr>
</table>
