<script>
	export let user

	function estudiaActualmenteChange(event) {
		if (event.target.value === 'NO') {
			user.info_academica.estudios_institucion = 'No aplica'
			user.info_academica.estudios_que = 'No aplica'
			user.info_academica.estudios_horarios = 'No aplica'
			user.info_academica.estudios_dias = 'No aplica'			
		} else {
			user.info_academica.estudios_institucion = ''
			user.info_academica.estudios_que = ''
			user.info_academica.estudios_horarios = ''
			user.info_academica.estudios_dias = ''
		}
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

	h2 {
		padding-top: 29px;
	}
</style>


<h1>Inf. Académica</h1>

<h2>Primaria</h2>
<div>
	<span>Institución</span>
	<input bind:value={user.info_academica.primaria.institucion} required>
</div>
<div>
	<span>Lugar (ciudad)</span>
	<input bind:value={user.info_academica.primaria.ciudad} required>
</div>
<div>
	<span>Años</span>
	<input bind:value={user.info_academica.primaria.anos} required>
</div>
<div>
	<span>Certificado</span>
	<select bind:value={user.info_academica.primaria.certificado} required>
		<option value="">Seleccionar</option>
		<option value="SI">Sí</option>
		<option value="NO">No</option>
	</select> 
</div>

<h2>Secundaria</h2>
<div>
	<span>Institución</span>
	<input bind:value={user.info_academica.secundaria.institucion} required>
</div>
<div>
	<span>Lugar (ciudad)</span>
	<input bind:value={user.info_academica.secundaria.ciudad} required>
</div>
<div>
	<span>Años</span>
	<input bind:value={user.info_academica.secundaria.anos} required>
</div>
<div>
	<span>Certificado</span>
	<select bind:value={user.info_academica.secundaria.certificado} required>
		<option value="">Seleccionar</option>
		<option value="SI">Sí</option>
		<option value="NO">No</option>
	</select> 
</div>

<h2>Preparatoria</h2>
<div>
	<span>Institución</span>
	<input bind:value={user.info_academica.preparatoria.institucion} required>
</div>
<div>
	<span>Lugar (ciudad)</span>
	<input bind:value={user.info_academica.preparatoria.ciudad} required>
</div>
<div>
	<span>Años</span>
	<input bind:value={user.info_academica.preparatoria.anos} required>
</div>
<div>
	<span>Certificado</span>
	<select bind:value={user.info_academica.preparatoria.certificado} required>
		<option value="">Seleccionar</option>
		<option value="SI">Sí</option>
		<option value="NO">No</option>
	</select> 
</div>

<h2>Profesional</h2>
<div>
	<span>Institución y carrera</span>
	<input bind:value={user.info_academica.profesional.institucion} required>
</div>
<div>
	<span>Lugar (ciudad)</span>
	<input bind:value={user.info_academica.profesional.ciudad} required>
</div>
<div>
	<span>Años</span>
	<input bind:value={user.info_academica.profesional.anos} required>
</div>
<div>
	<span>Certificado</span>
	<select bind:value={user.info_academica.profesional.certificado} required>
		<option value="">Seleccionar</option>
		<option value="SI">Sí</option>
		<option value="NO">No</option>
	</select> 
</div>

<h2>Otro</h2>
<div>
	<span>Institución</span>
	<input bind:value={user.info_academica.otro_grado.institucion} required>
</div>
<div>
	<span>Lugar (ciudad)</span>
	<input bind:value={user.info_academica.otro_grado.ciudad} required>
</div>
<div>
	<span>Años</span>
	<input bind:value={user.info_academica.otro_grado.anos} required>
</div>
<div>
	<span>Certificado</span>
	<select bind:value={user.info_academica.otro_grado.certificado} required>
		<option value="">Seleccionar</option>
		<option value="SI">Sí</option>
		<option value="NO">No</option>
	</select> 
</div>

<br />
<div>
	<span>Cédula profesional:</span>
	<input bind:value={user.info_academica.cedula_profesional} required>
</div>
<div>
	<span>Año de expedición:</span>
	<input bind:value={user.info_academica.cedula_prof_ano_exp} required>
</div>

<br />
<div>
	<span>Dominio de otro idioma:</span>
	<input bind:value={user.info_academica.otro_idioma.idioma} required>
</div>
<div>
	<span>Hablado</span>
	<input bind:value={user.info_academica.otro_idioma.hablado} required>
</div>
<div>
	<span>Leido</span>
	<input bind:value={user.info_academica.otro_idioma.leido} required>
</div>
<div>
	<span>Escuchado</span>
	<input bind:value={user.info_academica.otro_idioma.escuchado} required>
</div>

<h2>Estudios</h2>
<div>
	<span>Estudia Actualmente</span>
	<!-- svelte-ignore a11y-no-onchange -->
	<select bind:value={user.info_academica.estudia_actualmente} on:change={estudiaActualmenteChange} required>
		<option value="">Seleccionar</option>
		<option value="SI">Sí</option>
		<option value="NO">No</option>
	</select> 
</div>
<div>
	<span>Institución</span>
	<input bind:value={user.info_academica.estudios_institucion} required>
</div>

<div>
	<span>Qué estudia?</span>
	<input bind:value={user.info_academica.estudios_que} required>
</div>
<div>
	<span>Horarios</span>
	<input bind:value={user.info_academica.estudios_horarios} required>
</div>
<div>
	<span>Días</span>
	<input bind:value={user.info_academica.estudios_dias} required>
</div>
