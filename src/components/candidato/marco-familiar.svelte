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
		<th>Ocupación (en caso de empleado, obligatorio especificar)</th>
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

	{#each [0, 1, 2, 3] as index}
		<tr>
			<td>Hermano</td>
			<td><input bind:value={user.marco_familiar.hermano[index].nombre}></td>
			<td><input bind:value={user.marco_familiar.hermano[index].edad}></td>
			<td><input bind:value={user.marco_familiar.hermano[index].ocupacion}></td>
			<td><input bind:value={user.marco_familiar.hermano[index].empresa}></td>
			<td><input bind:value={user.marco_familiar.hermano[index].residencia}></td>
			<td><input bind:value={user.marco_familiar.hermano[index].telefono}></td>
		</tr>
	{/each}

	<tr>
		<td>Pareja</td>
		<td><input bind:value={user.marco_familiar.pareja.nombre}></td>
		<td><input bind:value={user.marco_familiar.pareja.edad}></td>
		<td><input bind:value={user.marco_familiar.pareja.ocupacion}></td>
		<td><input bind:value={user.marco_familiar.pareja.empresa}></td>
		<td><input bind:value={user.marco_familiar.pareja.residencia}></td>
		<td><input bind:value={user.marco_familiar.pareja.telefono}></td>
	</tr>

	{#each [0, 1, 2, 3] as index}
		<tr>
			<td>Hijo</td>
			<td><input bind:value={user.marco_familiar.hijo[index].nombre}></td>
			<td><input bind:value={user.marco_familiar.hijo[index].edad}></td>
			<td><input bind:value={user.marco_familiar.hijo[index].ocupacion}></td>
			<td><input bind:value={user.marco_familiar.hijo[index].empresa}></td>
			<td><input bind:value={user.marco_familiar.hijo[index].residencia}></td>
			<td><input bind:value={user.marco_familiar.hijo[index].telefono}></td>
		</tr>
	{/each}
	
	{#each [0, 1, 2, 3, 4, 5, 6, 7] as index}
		<tr>
			<td><input bind:value={user.marco_familiar.otro[index].parentesco}></td>
			<td><input bind:value={user.marco_familiar.otro[index].nombre}></td>
			<td><input bind:value={user.marco_familiar.otro[index].edad}></td>
			<td><input bind:value={user.marco_familiar.otro[index].ocupacion}></td>
			<td><input bind:value={user.marco_familiar.otro[index].empresa}></td>
			<td><input bind:value={user.marco_familiar.otro[index].residencia}></td>
			<td><input bind:value={user.marco_familiar.otro[index].telefono}></td>
		</tr>
	{/each}
</table>
