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
	<select bind:value={user.referencias1Tipo}>
		<option value=""></option>
		<option value="VECINAL">Vecinal</option>
		<option value="PERSONAL">Personal</option>
	</select>
</p>
<p>
	<span>Nombre</span>
	<input bind:value={user.referencias.ref1Tipo}>
</p>
<p>
	<span>Domicilio</span>
	<input bind:value={user.referencias.ref1Domicilio}>
</p>
<p>
	<span>Teléfono</span>
	<input bind:value={user.referencias.ref1Telefono}>
</p>
<p>
	<span>Tiempo de conocerlo</span>
	<input bind:value={user.referencias.ref1Tiempo}>
</p>
<p>
	<span>Parentesco</span>
	<input bind:value={user.referencias.ref1Parentesco}>
</p>
<p>
	<span>Ocupación</span>
	<input bind:value={user.referencias.ref1Ocupacion}>
</p>
<p>
	<span>¿Cómo conoció al evaluado?</span>
	<input bind:value={user.referencias.ref1Conocio}>
</p>
<p>
	<span>Opinión sobre el candidato (visible en pdf)</span>
	<input bind:value={user.referencias.ref1Opinion}>
</p>


<h2>Referencia 2</h2>
<p>
	<span>Tipo</span>
	<select bind:value={user.referencias2Tipo}>
		<option value=""></option>
		<option value="VECINAL">Vecinal</option>
		<option value="PERSONAL">Personal</option>
	</select>
</p>
<p>
	<span>Nombre</span>
	<input bind:value={user.referencias.ref2Tipo}>
</p>
<p>
	<span>Domicilio</span>
	<input bind:value={user.referencias.ref2Domicilio}>
</p>
<p>
	<span>Teléfono</span>
	<input bind:value={user.referencias.ref2Telefono}>
</p>
<p>
	<span>Tiempo de conocerlo</span>
	<input bind:value={user.referencias.ref2Tiempo}>
</p>
<p>
	<span>Parentesco</span>
	<input bind:value={user.referencias.ref2Parentesco}>
</p>
<p>
	<span>Ocupación</span>
	<input bind:value={user.referencias.ref2Ocupacion}>
</p>
<p>
	<span>¿Cómo conoció al evaluado?</span>
	<input bind:value={user.referencias.ref2Conocio}>
</p>
<p>
	<span>Opinión sobre el candidato (visible en pdf)</span>
	<input bind:value={user.referencias.ref2Opinion}>
</p>


<h2>Referencia 3</h2>
<p>
	<span>Tipo</span>
	<select bind:value={user.referencias3Tipo}>
		<option value=""></option>
		<option value="VECINAL">Vecinal</option>
		<option value="PERSONAL">Personal</option>
	</select>
</p>
<p>
	<span>Nombre</span>
	<input bind:value={user.referencias.ref3Tipo}>
</p>
<p>
	<span>Domicilio</span>
	<input bind:value={user.referencias.ref3Domicilio}>
</p>
<p>
	<span>Teléfono</span>
	<input bind:value={user.referencias.ref3Telefono}>
</p>
<p>
	<span>Tiempo de conocerlo</span>
	<input bind:value={user.referencias.ref3Tiempo}>
</p>
<p>
	<span>Parentesco</span>
	<input bind:value={user.referencias.ref3Parentesco}>
</p>
<p>
	<span>Ocupación</span>
	<input bind:value={user.referencias.ref3Ocupacion}>
</p>
<p>
	<span>¿Cómo conoció al evaluado?</span>
	<input bind:value={user.referencias.ref3Conocio}>
</p>
<p>
	<span>Opinión sobre el candidato (visible en pdf)</span>
	<input bind:value={user.referencias.ref3Opinion}>
</p>
