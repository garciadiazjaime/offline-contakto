<script context="module">
	export async function preload(page) {
		const { uuid } = page.params;

		return { uuid };
	}
</script>

<script>

	import Layout from '../../../components/Layout.svelte'
	import Form from '../../../components/Form.svelte'
	import DatosGenerales from '../../../components/candidato/datos-generales.svelte'
	import { getUser, STEPS } from '../../../support/user'

	export let uuid
	let user
	const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

	$: {
		user = getUser(uuid)
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
	:global([ref=select15]) {
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

<Layout uuid={uuid} section={STEPS.vivienda}>
	<Form user={user}>		

		<h1>Vivienda</h1>

		<p>
			<span>Nombre del propietario</span>
			<input bind:value={user.vivienda.nombre}>
		</p>
		<p>
			<span>Parentesco</span>
			<input bind:value={user.vivienda.parentesco}>
		</p>
		<p>
			<span>Renta mensual</span>
			<input bind:value={user.vivienda.renta}>
		</p>

		<h2>Vivienda</h2>
		<p>
			<span>Tipo</span>
			<select bind:value={user.vivienda.tipo}>
				<option value=""></option>
				<option value="PROPIA">Propia</option>
				<option value="RENTADA">Rentada</option>
				<option value="HIPOTECA">Hipotecada</option>
				<option value="PRESTADA">Prestada</option>
			</select>
		</p>
		<p>
			<span>Otra</span>
			<input bind:value={user.vivienda.otra}>
		</p>
		<p>
			<span>Valor aproximado</span>
			<input bind:value={user.vivienda.valuor}>
		</p>

		<h2>Tipo de inmueble</h2>
		<p>
			<span>Tipo</span>
			<select bind:value={user.vivienda.inmueble}>
				<option value=""></option>
				<option value="CASA">Casa</option>
				<option value="TERRENO">Terreno compartido</option>
				<option value="DEPARTAMENTO">Departamento</option>
				<option value="POPULAR">Vivienda popular</option>
			</select>
		</p>
		<p>
			<span>Otro</span>
			<input bind:value={user.vivienda.otro}>
		</p>

		<h2>Distribución dimensional</h2>
		<p>
			<span>Habitaciones</span>
			<select bind:value={user.vivienda.habitaciones}>
				<option value=""></option>
				{#each items as item}
					<option value={item}>{item}</option>
				{/each}
			</select>
		</p>
		<p>
			<span>Baños</span>
			<select bind:value={user.vivienda.banios}>
				<option value=""></option>
				{#each items as item}
					<option value={item}>{item}</option>
				{/each}
			</select>
		</p>
		<p>
			<span>Salas</span>
			<select bind:value={user.vivienda.salas}>
				<option value=""></option>
				{#each items as item}
					<option value={item}>{item}</option>
				{/each}
			</select>
		</p>
		<p>
			<span>Comedor</span>
			<select bind:value={user.vivienda.comedor}>
				<option value=""></option>
				{#each items as item}
					<option value={item}>{item}</option>
				{/each}
			</select>
		</p>
		<p>
			<span>Cocina</span>
			<select bind:value={user.vivienda.cocina}>
				<option value=""></option>
				{#each items as item}
					<option value={item}>{item}</option>
				{/each}
			</select>
		</p>
		<p>
			<span>Patios</span>
			<select bind:value={user.vivienda.patios}>
				<option value=""></option>
				{#each items as item}
					<option value={item}>{item}</option>
				{/each}
			</select>
		</p>
		<p>
			<span>Cocheras</span>
			<select bind:value={user.vivienda.cocheras}>
				<option value=""></option>
				{#each items as item}
					<option value={item}>{item}</option>
				{/each}
			</select>
		</p>

		<br />

		<p>
			<span>Tiempo de radicar en el domicilio</span>
			<input bind:value={user.vivienda.radicr}>
		</p>
		<p>
			<span>Tipo de mobiliario</span>
			<select bind:value={user.vivienda.mobiliario}>
				<option value=""></option>
				<option value="INSUFICIENTE">Insuficiente</option>
				<option value="SUFICIENTE">Suficiente</option>
			</select>
		</p>
		<p>
			<span>Sector socioeconómico</span>
			<select bind:value={user.vivienda.sector}>
				<option value=""></option>
				<option value="A">A - Clase Alta</option>
				<option value="B">B - Clase Media</option>
				<option value="C">C - Clase Media-Baja</option>
				<option value="D">D - Clase Baja</option>
			</select>
		</p>
		<p>
			<span>Personas que viven con el evaluado</span>
			<input bind:value={user.vivienda.personas}>
		</p>
		<p>
			<span>Conservación de vivienda</span>
			<select bind:value={user.vivienda.conservacion}>
				<option value=""></option>
				<option value="BUENO">Buen estado</option>
				<option value="REGULAR">Regular estado</option>
				<option value="MALO">Mal estado</option>
			</select>
		</p>
		<p>
			<span>Tamaño aproximado (mts2)</span>
			<input bind:value={user.vivienda.tamanio}>
		</p>
		<p>
			<span>Si tiene más de 5 Años viviendo en el domicilio, especifique su domicilio anterior completo</span>
			<input bind:value={user.vivienda.anterior}>
		</p>
		<p>
			<span>Direcciones de cómo llegar al domicilio</span>
			<input bind:value={user.vivienda.domicilio}>
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
				<td><input bind:value={user.vivienda.persona1Parentesco}></td>
				<td><input bind:value={user.vivienda.persona1Nombre}></td>
				<td><input bind:value={user.vivienda.persona1Edad}></td>
				<td><input bind:value={user.vivienda.persona1Ocupacion}></td>
				<td><input bind:value={user.vivienda.persona1Empresa}></td>
				<td><input bind:value={user.vivienda.persona1Residencia}></td>
				<td><input bind:value={user.vivienda.persona1Telefono}></td>
			</tr>

			<tr>
				<td><input bind:value={user.vivienda.persona2Parentesco}></td>
				<td><input bind:value={user.vivienda.persona2Nombre}></td>
				<td><input bind:value={user.vivienda.persona2Edad}></td>
				<td><input bind:value={user.vivienda.persona2Ocupacion}></td>
				<td><input bind:value={user.vivienda.persona2Empresa}></td>
				<td><input bind:value={user.vivienda.persona2Residencia}></td>
				<td><input bind:value={user.vivienda.persona2Telefono}></td>
			</tr>

			<tr>
				<td><input bind:value={user.vivienda.persona3Parentesco}></td>
				<td><input bind:value={user.vivienda.persona3Nombre}></td>
				<td><input bind:value={user.vivienda.persona3Edad}></td>
				<td><input bind:value={user.vivienda.persona3Ocupacion}></td>
				<td><input bind:value={user.vivienda.persona3Empresa}></td>
				<td><input bind:value={user.vivienda.persona3Residencia}></td>
				<td><input bind:value={user.vivienda.persona3Telefono}></td>
			</tr>

			<tr>
				<td><input bind:value={user.vivienda.persona4Parentesco}></td>
				<td><input bind:value={user.vivienda.persona4Nombre}></td>
				<td><input bind:value={user.vivienda.persona4Edad}></td>
				<td><input bind:value={user.vivienda.persona4Ocupacion}></td>
				<td><input bind:value={user.vivienda.persona4Empresa}></td>
				<td><input bind:value={user.vivienda.persona4Residencia}></td>
				<td><input bind:value={user.vivienda.persona4Telefono}></td>
			</tr>

			<tr>
				<td><input bind:value={user.vivienda.persona5Parentesco}></td>
				<td><input bind:value={user.vivienda.persona5Nombre}></td>
				<td><input bind:value={user.vivienda.persona5Edad}></td>
				<td><input bind:value={user.vivienda.persona5Ocupacion}></td>
				<td><input bind:value={user.vivienda.persona5Empresa}></td>
				<td><input bind:value={user.vivienda.persona5Residencia}></td>
				<td><input bind:value={user.vivienda.persona5Telefono}></td>
			</tr>
		</table>

		<br />

	</Form>
</Layout>
