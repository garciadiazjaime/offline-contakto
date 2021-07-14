<script>
	export let user

	function telefonoHandler(event, index) {
		const x = event.target.value.slice(0, 12).replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
		const phone = !x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');

		user.referencias[index].telefono = phone
	}

	function telSelectHandler(event, index) {
		const value = event.target.value === "1" ? 'No tiene' : ''

		user.referencias[index].telefono = value
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

	p {
		display: flex;
		align-items: center;
	}

	p span{
		width: 240px;
		padding-right: 6px;
	}

	h2 {
		padding-top: 29px;
	}

	.paragraph span {
		width: 475px;
	}
</style>

<h1>Referencia</h1>

{#each [0, 1, 2] as index}
	<h2>Referencia {user.referencias[index].tipo}</h2>
	<p>
		<span>Nombre</span>
		<input bind:value={user.referencias[index].nombre} required>
	</p>
	<p>
		<span>Domicilio</span>
		<input bind:value={user.referencias[index].domicilio} required>
	</p>
	<p class="paragraph">
		<span>Teléfono</span>
		<input on:keyup={event => telefonoHandler(event, index)} bind:value={user.referencias[index].telefono} placeholder="###-###-####" required>
		<!-- svelte-ignore a11y-no-onchange -->
		<select on:change={event => telSelectHandler(event, index)}>
			<option value=0>Seleccionar</option>
			<option value=1>No tiene</option>
		</select>
	</p>
	<p>
		<span>Tiempo de conocerlo</span>
		<input bind:value={user.referencias[index].tiempo_conocido} required>
	</p>
	<p>
		<span>Parentesco</span>
		<input bind:value={user.referencias[index].parentesco} required>
	</p>
	<p>
		<span>Ocupación (en caso de empleado, obligatorio especificar)</span>
		<input bind:value={user.referencias[index].ocupacion} required>
	</p>
	<p>
		<span>¿Cómo conoció al evaluado?</span>
		<input bind:value={user.referencias[index].lugares_labor_evaluado}>
	</p>
	<p>
		<span>Opinión sobre el candidato (visible en pdf)</span>
		<input bind:value={user.referencias[index].opinion}>
	</p>
{/each}
