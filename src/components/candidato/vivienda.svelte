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
	<input bind:value={user.situacion_vivienda.caracteristicas_vivienda.renta_mensual} placeholder="$m.n. o No aplica" required>
</div>

<h2>Vivienda</h2>
<div>
	<span>Tipo</span>
	<div>
		<!-- svelte-ignore a11y-no-onchange -->
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
	<span>Valor aproximado</span>
	<input bind:value={user.situacion_vivienda.caracteristicas_vivienda.valor_aproximado} required>
</div>

<h2>Tipo de inmueble</h2>
<div>
	<span>Tipo</span>
	<div>
		<!-- svelte-ignore a11y-no-onchange -->
		<select on:change={tipoInmuebleChange}>
			<option value="">Seleccionar</option>
			<option value="CASA">Casa</option>
			<option value="TERRENO">Terreno compartido</option>
			<option value="DEPARTAMENTO">Departamento</option>
			<option value="POPULAR">Vivienda popular</option>
			<option value="">Otro</option>
		</select>
		<input bind:value={user.situacion_vivienda.tipo_inmueble.casa} required>
	</div>
</div>

<h2>Distribución dimensional</h2>
<div>
	<span>Habitaciones</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.habitaciones} required>
		<option value="">Seleccionar</option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</div>
<div>
	<span>Baños</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.banos} required>
		<option value="">Seleccionar</option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</div>
<div>
	<span>Salas</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.salas} required>
		<option value="">Seleccionar</option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</div>
<div>
	<span>Comedor</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.comedor} required>
		<option value="">Seleccionar</option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</div>
<div>
	<span>Cocina</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.cocina} required>
		<option value="">Seleccionar</option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</div>
<div>
	<span>Patios</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.patios} required>
		<option value="">Seleccionar</option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</div>
<div>
	<span>Cocheras</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.cocheras} required>
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
	<select bind:value={user.situacion_vivienda.tipo_mobiliario} required>
		<option value="">Seleccionar</option>
		<option value="INSUFICIENTE">Insuficiente</option>
		<option value="SUFICIENTE">Suficiente</option>
	</select>
</div>
<div>
	<span>Sector socioeconómico</span>
	<select bind:value={user.situacion_vivienda.sector_socioeconomico} required>
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
	<select bind:value={user.situacion_vivienda.conservacion} required>
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

	{#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as index}
		<tr>
			<td><input bind:value={user.situacion_vivienda.marco_familiar[index].parentesco}></td>
			<td><input bind:value={user.situacion_vivienda.marco_familiar[index].nombre}></td>
			<td><input bind:value={user.situacion_vivienda.marco_familiar[index].edad}></td>
			<td><input bind:value={user.situacion_vivienda.marco_familiar[index].ocupacion}></td>
			<td><input bind:value={user.situacion_vivienda.marco_familiar[index].empresa}></td>
			<td><input bind:value={user.situacion_vivienda.marco_familiar[index].residencia}></td>
			<td><input bind:value={user.situacion_vivienda.marco_familiar[index].telefono}></td>
		</tr>
	{/each}
</table>
