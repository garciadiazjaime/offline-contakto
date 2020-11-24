<script>
	export let user
</script>

<style>
	input {
		height: 32px;
		font-size: 26px;
		width: 100%;
	}

	table {
		width: 100%;
	}
</style>

<h1>Marco Familiar</h1>

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
		<td>Padre</td>
		<td><input bind:value={user.marco.persona1Nombre}></td>
		<td><input bind:value={user.marco.persona1Edad}></td>
		<td><input bind:value={user.marco.persona1Ocupacion}></td>
		<td><input bind:value={user.marco.persona1Empresa}></td>
		<td><input bind:value={user.marco.persona1Residencia}></td>
		<td><input bind:value={user.marco.persona1Telefono}></td>
	</tr>

	<tr>
		<td>Madre</td>
		<td><input bind:value={user.marco.persona2Nombre}></td>
		<td><input bind:value={user.marco.persona2Edad}></td>
		<td><input bind:value={user.marco.persona2Ocupacion}></td>
		<td><input bind:value={user.marco.persona2Empresa}></td>
		<td><input bind:value={user.marco.persona2Residencia}></td>
		<td><input bind:value={user.marco.persona2Telefono}></td>
	</tr>

	<tr>
		<td>Hermano</td>
		<td><input bind:value={user.marco.persona3Nombre}></td>
		<td><input bind:value={user.marco.persona3Edad}></td>
		<td><input bind:value={user.marco.persona3Ocupacion}></td>
		<td><input bind:value={user.marco.persona3Empresa}></td>
		<td><input bind:value={user.marco.persona3Residencia}></td>
		<td><input bind:value={user.marco.persona3Telefono}></td>
	</tr>

	<tr>
		<td>Hermano</td>
		<td><input bind:value={user.marco.persona4Nombre}></td>
		<td><input bind:value={user.marco.persona4Edad}></td>
		<td><input bind:value={user.marco.persona4Ocupacion}></td>
		<td><input bind:value={user.marco.persona4Empresa}></td>
		<td><input bind:value={user.marco.persona4Residencia}></td>
		<td><input bind:value={user.marco.persona4Telefono}></td>
	</tr>

	<tr>
		<td>Hermano</td>
		<td><input bind:value={user.marco.persona5Nombre}></td>
		<td><input bind:value={user.marco.persona5Edad}></td>
		<td><input bind:value={user.marco.persona5Ocupacion}></td>
		<td><input bind:value={user.marco.persona5Empresa}></td>
		<td><input bind:value={user.marco.persona5Residencia}></td>
		<td><input bind:value={user.marco.persona5Telefono}></td>
	</tr>

	<tr>
		<td>Hermano</td>
		<td><input bind:value={user.marco.persona6Nombre}></td>
		<td><input bind:value={user.marco.persona6Edad}></td>
		<td><input bind:value={user.marco.persona6Ocupacion}></td>
		<td><input bind:value={user.marco.persona6Empresa}></td>
		<td><input bind:value={user.marco.persona6Residencia}></td>
		<td><input bind:value={user.marco.persona6Telefono}></td>
	</tr>

	<tr>
		<td>Pareja</td>
		<td><input bind:value={user.marco.persona7Nombre}></td>
		<td><input bind:value={user.marco.persona7Edad}></td>
		<td><input bind:value={user.marco.persona7Ocupacion}></td>
		<td><input bind:value={user.marco.persona7Empresa}></td>
		<td><input bind:value={user.marco.persona7Residencia}></td>
		<td><input bind:value={user.marco.persona7Telefono}></td>
	</tr>

	<tr>
		<td>Hijo</td>
		<td><input bind:value={user.marco.persona8Nombre}></td>
		<td><input bind:value={user.marco.persona8Edad}></td>
		<td><input bind:value={user.marco.persona8Ocupacion}></td>
		<td><input bind:value={user.marco.persona1Empresa}></td>
		<td><input bind:value={user.marco.persona8Residencia}></td>
		<td><input bind:value={user.marco.persona8Telefono}></td>
	</tr>

	<tr>
		<td>Hijo</td>
		<td><input bind:value={user.marco.persona9Nombre}></td>
		<td><input bind:value={user.marco.persona9Edad}></td>
		<td><input bind:value={user.marco.persona9Ocupacion}></td>
		<td><input bind:value={user.marco.persona9Empresa}></td>
		<td><input bind:value={user.marco.persona9Residencia}></td>
		<td><input bind:value={user.marco.persona9Telefono}></td>
	</tr>

	<tr>
		<td>Hijo</td>
		<td><input bind:value={user.marco.persona10Nombre}></td>
		<td><input bind:value={user.marco.persona10Edad}></td>
		<td><input bind:value={user.marco.persona10Ocupacion}></td>
		<td><input bind:value={user.marco.persona10Empresa}></td>
		<td><input bind:value={user.marco.persona10Residencia}></td>
		<td><input bind:value={user.marco.persona10Telefono}></td>
	</tr>

	<tr>
		<td>Hijo</td>
		<td><input bind:value={user.marco.persona11Nombre}></td>
		<td><input bind:value={user.marco.persona11Edad}></td>
		<td><input bind:value={user.marco.persona11Ocupacion}></td>
		<td><input bind:value={user.marco.persona11Empresa}></td>
		<td><input bind:value={user.marco.persona11Residencia}></td>
		<td><input bind:value={user.marco.persona11Telefono}></td>
	</tr>

	<tr>
		<td><input bind:value={user.marco.persona12Parentesco} placeholder="Otro"></td>
		<td><input bind:value={user.marco.persona12Nombre}></td>
		<td><input bind:value={user.marco.persona12Edad}></td>
		<td><input bind:value={user.marco.persona12Ocupacion}></td>
		<td><input bind:value={user.marco.persona12Empresa}></td>
		<td><input bind:value={user.marco.persona12Residencia}></td>
		<td><input bind:value={user.marco.persona12Telefono}></td>
	</tr>

	<tr>
		<td><input bind:value={user.marco.persona13Parentesco} placeholder="Otro"></td>
		<td><input bind:value={user.marco.persona13Nombre}></td>
		<td><input bind:value={user.marco.persona13Edad}></td>
		<td><input bind:value={user.marco.persona13Ocupacion}></td>
		<td><input bind:value={user.marco.persona13Empresa}></td>
		<td><input bind:value={user.marco.persona13Residencia}></td>
		<td><input bind:value={user.marco.persona13Telefono}></td>
	</tr>

	<tr>
		<td><input bind:value={user.marco.persona14Parentesco} placeholder="Otro"></td>
		<td><input bind:value={user.marco.persona14Nombre}></td>
		<td><input bind:value={user.marco.persona14Edad}></td>
		<td><input bind:value={user.marco.persona14Ocupacion}></td>
		<td><input bind:value={user.marco.persona14Empresa}></td>
		<td><input bind:value={user.marco.persona14Residencia}></td>
		<td><input bind:value={user.marco.persona14Telefono}></td>
	</tr>
</table>
