<script>
	export let user
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
</style>

<h1>Referencias Personales</h1>

<h2>Referencia 1</h2>
<p>
	<span>Tipo</span>
	<select bind:value={user.referencias[0].tipo}>
		<option value=""></option>
		<option value="VECINAL">Vecinal</option>
		<option value="PERSONAL">Personal</option>
	</select>
</p>
<p>
	<span>Nombre</span>
	<input bind:value={user.referencias[0].nombre}>
</p>
<p>
	<span>Domicilio</span>
	<input bind:value={user.referencias[0].domicilio}>
</p>
<p>
	<span>Teléfono</span>
	<input bind:value={user.referencias[0].telefono}>
</p>
<p>
	<span>Tiempo de conocerlo</span>
	<input bind:value={user.referencias[0].tiempo_conocido}>
</p>
<p>
	<span>Parentesco</span>
	<input bind:value={user.referencias[0].parentesco}>
</p>
<p>
	<span>Ocupación</span>
	<input bind:value={user.referencias[0].ocupacion}>
</p>
<p>
	<span>¿Cómo conoció al evaluado?</span>
	<input bind:value={user.referencias[0].lugares_labor_evaluado}>
</p>
<p>
	<span>Opinión sobre el candidato (visible en pdf)</span>
	<input bind:value={user.referencias[0].opinion}>
</p>


<h2>Referencia 2</h2>
<p>
	<span>Tipo</span>
	<select bind:value={user.referencias[1].tipo}>
		<option value=""></option>
		<option value="VECINAL">Vecinal</option>
		<option value="PERSONAL">Personal</option>
	</select>
</p>
<p>
	<span>Nombre</span>
	<input bind:value={user.referencias[1].nombre}>
</p>
<p>
	<span>Domicilio</span>
	<input bind:value={user.referencias[1].domicilio}>
</p>
<p>
	<span>Teléfono</span>
	<input bind:value={user.referencias[1].telefono}>
</p>
<p>
	<span>Tiempo de conocerlo</span>
	<input bind:value={user.referencias[1].tiempo_conocido}>
</p>
<p>
	<span>Parentesco</span>
	<input bind:value={user.referencias[1].parentesco}>
</p>
<p>
	<span>Ocupación</span>
	<input bind:value={user.referencias[1].ocupacion}>
</p>
<p>
	<span>¿Cómo conoció al evaluado?</span>
	<input bind:value={user.referencias[1].lugares_labor_evaluado}>
</p>
<p>
	<span>Opinión sobre el candidato (visible en pdf)</span>
	<input bind:value={user.referencias[1].opinion}>
</p>


<h2>Referencia 3</h2>
<p>
	<span>Tipo</span>
	<select bind:value={user.referencias[2].tipo}>
		<option value=""></option>
		<option value="VECINAL">Vecinal</option>
		<option value="PERSONAL">Personal</option>
	</select>
</p>
<p>
	<span>Nombre</span>
	<input bind:value={user.referencias[2].nombre}>
</p>
<p>
	<span>Domicilio</span>
	<input bind:value={user.referencias[2].domicilio}>
</p>
<p>
	<span>Teléfono</span>
	<input bind:value={user.referencias[2].telefono}>
</p>
<p>
	<span>Tiempo de conocerlo</span>
	<input bind:value={user.referencias[2].tiempo_conocido}>
</p>
<p>
	<span>Parentesco</span>
	<input bind:value={user.referencias[2].parentesco}>
</p>
<p>
	<span>Ocupación</span>
	<input bind:value={user.referencias[2].ocupacion}>
</p>
<p>
	<span>¿Cómo conoció al evaluado?</span>
	<input bind:value={user.referencias[2].lugares_labor_evaluado}>
</p>
<p>
	<span>Opinión sobre el candidato (visible en pdf)</span>
	<input bind:value={user.referencias[2].opinion}>
</p>
