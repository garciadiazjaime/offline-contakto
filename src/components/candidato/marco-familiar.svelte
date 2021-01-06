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
		<td><input bind:value={user.marco_familiar.padre.nombre}></td>
		<td><input bind:value={user.marco_familiar.padre.edad}></td>
		<td><input bind:value={user.marco_familiar.padre.ocupacion}></td>
		<td><input bind:value={user.marco_familiar.padre.empresa}></td>
		<td><input bind:value={user.marco_familiar.padre.residencia}></td>
		<td><input bind:value={user.marco_familiar.padre.telefono}></td>
	</tr>

	<tr>
		<td>Madre</td>
		<td><input bind:value={user.marco_familiar.madre.nombre}></td>
		<td><input bind:value={user.marco_familiar.madre.edad}></td>
		<td><input bind:value={user.marco_familiar.madre.ocupacion}></td>
		<td><input bind:value={user.marco_familiar.madre.empresa}></td>
		<td><input bind:value={user.marco_familiar.madre.residencia}></td>
		<td><input bind:value={user.marco_familiar.madre.telefono}></td>
	</tr>

	<tr>
		<td>Hermano</td>
		<td><input bind:value={user.marco_familiar.hermano[0].nombre}></td>
		<td><input bind:value={user.marco_familiar.hermano[0].edad}></td>
		<td><input bind:value={user.marco_familiar.hermano[0].ocupacion}></td>
		<td><input bind:value={user.marco_familiar.hermano[0].empresa}></td>
		<td><input bind:value={user.marco_familiar.hermano[0].residencia}></td>
		<td><input bind:value={user.marco_familiar.hermano[0].telefono}></td>
	</tr>

	<tr>
		<td>Hermano</td>
		<td><input bind:value={user.marco_familiar.hermano[1].nombre}></td>
		<td><input bind:value={user.marco_familiar.hermano[1].edad}></td>
		<td><input bind:value={user.marco_familiar.hermano[1].ocupacion}></td>
		<td><input bind:value={user.marco_familiar.hermano[1].empresa}></td>
		<td><input bind:value={user.marco_familiar.hermano[1].residencia}></td>
		<td><input bind:value={user.marco_familiar.hermano[1].telefono}></td>
	</tr>

	<tr>
		<td>Hermano</td>
		<td><input bind:value={user.marco_familiar.hermano[2].nombre}></td>
		<td><input bind:value={user.marco_familiar.hermano[2].edad}></td>
		<td><input bind:value={user.marco_familiar.hermano[2].ocupacion}></td>
		<td><input bind:value={user.marco_familiar.hermano[2].empresa}></td>
		<td><input bind:value={user.marco_familiar.hermano[2].residencia}></td>
		<td><input bind:value={user.marco_familiar.hermano[2].telefono}></td>
	</tr>

	<tr>
		<td>Hermano</td>
		<td><input bind:value={user.marco_familiar.hermano[3].nombre}></td>
		<td><input bind:value={user.marco_familiar.hermano[3].edad}></td>
		<td><input bind:value={user.marco_familiar.hermano[3].ocupacion}></td>
		<td><input bind:value={user.marco_familiar.hermano[3].empresa}></td>
		<td><input bind:value={user.marco_familiar.hermano[3].residencia}></td>
		<td><input bind:value={user.marco_familiar.hermano[3].telefono}></td>
	</tr>

	<tr>
		<td>Pareja</td>
		<td><input bind:value={user.marco_familiar.pareja.nombre}></td>
		<td><input bind:value={user.marco_familiar.pareja.edad}></td>
		<td><input bind:value={user.marco_familiar.pareja.ocupacion}></td>
		<td><input bind:value={user.marco_familiar.pareja.empresa}></td>
		<td><input bind:value={user.marco_familiar.pareja.residencia}></td>
		<td><input bind:value={user.marco_familiar.pareja.telefono}></td>
	</tr>

	<tr>
		<td>Hijo</td>
		<td><input bind:value={user.marco_familiar.hijo[0].nombre}></td>
		<td><input bind:value={user.marco_familiar.hijo[0].edad}></td>
		<td><input bind:value={user.marco_familiar.hijo[0].ocupacion}></td>
		<td><input bind:value={user.marco_familiar.hijo[0].empresa}></td>
		<td><input bind:value={user.marco_familiar.hijo[0].residencia}></td>
		<td><input bind:value={user.marco_familiar.hijo[0].telefono}></td>
	</tr>

	<tr>
		<td>Hijo</td>
		<td><input bind:value={user.marco_familiar.hijo[1].nombre}></td>
		<td><input bind:value={user.marco_familiar.hijo[1].edad}></td>
		<td><input bind:value={user.marco_familiar.hijo[1].ocupacion}></td>
		<td><input bind:value={user.marco_familiar.hijo[1].empresa}></td>
		<td><input bind:value={user.marco_familiar.hijo[1].residencia}></td>
		<td><input bind:value={user.marco_familiar.hijo[1].telefono}></td>
	</tr>

	<tr>
		<td>Hijo</td>
		<td><input bind:value={user.marco_familiar.hijo[2].nombre}></td>
		<td><input bind:value={user.marco_familiar.hijo[2].edad}></td>
		<td><input bind:value={user.marco_familiar.hijo[2].ocupacion}></td>
		<td><input bind:value={user.marco_familiar.hijo[2].empresa}></td>
		<td><input bind:value={user.marco_familiar.hijo[2].residencia}></td>
		<td><input bind:value={user.marco_familiar.hijo[2].telefono}></td>
	</tr>

	<tr>
		<td>Hijo</td>
		<td><input bind:value={user.marco_familiar.hijo[3].nombre}></td>
		<td><input bind:value={user.marco_familiar.hijo[3].edad}></td>
		<td><input bind:value={user.marco_familiar.hijo[3].ocupacion}></td>
		<td><input bind:value={user.marco_familiar.hijo[3].empresa}></td>
		<td><input bind:value={user.marco_familiar.hijo[3].residencia}></td>
		<td><input bind:value={user.marco_familiar.hijo[3].telefono}></td>
	</tr>

	<tr>
		<td><input bind:value={user.marco_familiar.otro[0].parentesco}></td>
		<td><input bind:value={user.marco_familiar.otro[0].nombre}></td>
		<td><input bind:value={user.marco_familiar.otro[0].edad}></td>
		<td><input bind:value={user.marco_familiar.otro[0].ocupacion}></td>
		<td><input bind:value={user.marco_familiar.otro[0].empresa}></td>
		<td><input bind:value={user.marco_familiar.otro[0].residencia}></td>
		<td><input bind:value={user.marco_familiar.otro[0].telefono}></td>
	</tr>

	<tr>
		<td><input bind:value={user.marco_familiar.otro[1].parentesco}></td>
		<td><input bind:value={user.marco_familiar.otro[1].nombre}></td>
		<td><input bind:value={user.marco_familiar.otro[1].edad}></td>
		<td><input bind:value={user.marco_familiar.otro[1].ocupacion}></td>
		<td><input bind:value={user.marco_familiar.otro[1].empresa}></td>
		<td><input bind:value={user.marco_familiar.otro[1].residencia}></td>
		<td><input bind:value={user.marco_familiar.otro[1].telefono}></td>
	</tr>

	<tr>
		<td><input bind:value={user.marco_familiar.otro[2].parentesco}></td>
		<td><input bind:value={user.marco_familiar.otro[2].nombre}></td>
		<td><input bind:value={user.marco_familiar.otro[2].edad}></td>
		<td><input bind:value={user.marco_familiar.otro[2].ocupacion}></td>
		<td><input bind:value={user.marco_familiar.otro[2].empresa}></td>
		<td><input bind:value={user.marco_familiar.otro[2].residencia}></td>
		<td><input bind:value={user.marco_familiar.otro[2].telefono}></td>
	</tr>
</table>
