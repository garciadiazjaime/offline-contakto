<script>
	export let user
	const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
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

	table {
		width: 100%;
	}
</style>


<h1>Vivienda</h1>

<p>
	<span>Nombre del propietario</span>
	<input bind:value={user.situacion_vivienda.propietario.nombre}>
</p>
<p>
	<span>Parentesco</span>
	<input bind:value={user.situacion_vivienda.propietario.parentesco}>
</p>
<p>
	<span>Renta mensual</span>
	<input bind:value={user.situacion_vivienda.caracteristicas_vivienda.renta_mensual}>
</p>

<h2>Vivienda</h2>
<p>
	<span>Tipo</span>
	<select bind:value={user.situacion_vivienda.caracteristicas_vivienda.propia}>
		<option value=""></option>
		<option value="PROPIA">Propia</option>
		<option value="RENTADA">Rentada</option>
		<option value="HIPOTECA">Hipotecada</option>
		<option value="PRESTADA">Prestada</option>
	</select>
</p>
<p>
	<span>Otra</span>
	<input bind:value={user.situacion_vivienda.caracteristicas_vivienda.otra}>
</p>
<p>
	<span>Valor aproximado</span>
	<input bind:value={user.situacion_vivienda.caracteristicas_vivienda.valor_aproximado}>
</p>

<h2>Tipo de inmueble</h2>
<p>
	<span>Tipo</span>
	<select bind:value={user.situacion_vivienda.tipo_inmueble.casa}>
		<option value=""></option>
		<option value="CASA">Casa</option>
		<option value="TERRENO">Terreno compartido</option>
		<option value="DEPARTAMENTO">Departamento</option>
		<option value="POPULAR">Vivienda popular</option>
	</select>
</p>
<p>
	<span>Otro</span>
	<input bind:value={user.situacion_vivienda.tipo_inmueble.otro_tipo}>
</p>

<h2>Distribución dimensional</h2>
<p>
	<span>Habitaciones</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.habitaciones}>
		<option value=""></option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</p>
<p>
	<span>Baños</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.banos}>
		<option value=""></option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</p>
<p>
	<span>Salas</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.salas}>
		<option value=""></option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</p>
<p>
	<span>Comedor</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.comedor}>
		<option value=""></option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</p>
<p>
	<span>Cocina</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.cocina}>
		<option value=""></option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</p>
<p>
	<span>Patios</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.patios}>
		<option value=""></option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</p>
<p>
	<span>Cocheras</span>
	<select bind:value={user.situacion_vivienda.distribucion_dimensiones.cocheras}>
		<option value=""></option>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</p>

<br />

<p>
	<span>Tiempo de radicar en el domicilio</span>
	<input bind:value={user.situacion_vivienda.tiempo_radicando}>
</p>
<p>
	<span>Tipo de mobiliario</span>
	<select bind:value={user.situacion_vivienda.tipo_mobiliario}>
		<option value=""></option>
		<option value="INSUFICIENTE">Insuficiente</option>
		<option value="SUFICIENTE">Suficiente</option>
	</select>
</p>
<p>
	<span>Sector socioeconómico</span>
	<select bind:value={user.situacion_vivienda.sector_socioeconomico}>
		<option value=""></option>
		<option value="A">A - Clase Alta</option>
		<option value="B">B - Clase Media</option>
		<option value="C">C - Clase Media-Baja</option>
		<option value="D">D - Clase Baja</option>
	</select>
</p>
<p>
	<span>Personas que viven con el evaluado</span>
	<input bind:value={user.situacion_vivienda.personas_viven_con_evaluado}>
</p>
<p>
	<span>Conservación de Vivienda</span>
	<select bind:value={user.situacion_vivienda.conservacion}>
		<option value=""></option>
		<option value="BUENO">Buen estado</option>
		<option value="REGULAR">Regular estado</option>
		<option value="MALO">Mal estado</option>
	</select>
</p>
<p>
	<span>Tamaño aproximado (mts2)</span>
	<input bind:value={user.situacion_vivienda.tamano_aprox_mts2}>
</p>
<p>
	<span>Si tiene más de 5 Años viviendo en el domicilio, especifique su domicilio anterior completo</span>
	<input bind:value={user.situacion_vivienda.domicilio_anterior}>
</p>
<p>
	<span>Direcciones de cómo llegar al domicilio</span>
	<input bind:value={user.situacion_vivienda.domicilio_direcciones}>
</p>

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
</table>
