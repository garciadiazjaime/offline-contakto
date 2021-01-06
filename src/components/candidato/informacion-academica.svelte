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


<h1>Inf. Académica</h1>

<h2>Primaria</h2>
<p>
	<span>Institución</span>
	<input bind:value={user.info_academica.primaria.institucion}>
</p>
<p>
	<span>Lugar (ciudad)</span>
	<input bind:value={user.info_academica.primaria.ciudad}>
</p>
<p>
	<span>Años</span>
	<input bind:value={user.info_academica.primaria.anos}>
</p>
<p>
	<span>Certificado</span>
	<input bind:value={user.info_academica.primaria.certificado}>
</p>

<h2>Secundaria</h2>
<p>
	<span>Institución</span>
	<input bind:value={user.info_academica.secundaria.institucion}>
</p>
<p>
	<span>Lugar (ciudad)</span>
	<input bind:value={user.info_academica.secundaria.ciudad}>
</p>
<p>
	<span>Años</span>
	<input bind:value={user.info_academica.secundaria.anos}>
</p>
<p>
	<span>Certificado</span>
	<input bind:value={user.info_academica.secundaria.certificado}>
</p>

<h2>Preparatoria</h2>
<p>
	<span>Institución</span>
	<input bind:value={user.info_academica.preparatoria.institucion}>
</p>
<p>
	<span>Lugar (ciudad)</span>
	<input bind:value={user.info_academica.preparatoria.ciudad}>
</p>
<p>
	<span>Años</span>
	<input bind:value={user.info_academica.preparatoria.anos}>
</p>
<p>
	<span>Certificado</span>
	<input bind:value={user.info_academica.preparatoria.certificado}>
</p>

<h2>Profesional</h2>
<p>
	<span>Institución</span>
	<input bind:value={user.info_academica.profesional.institucion}>
</p>
<p>
	<span>Lugar (ciudad)</span>
	<input bind:value={user.info_academica.profesional.ciudad}>
</p>
<p>
	<span>Años</span>
	<input bind:value={user.info_academica.profesional.anos}>
</p>
<p>
	<span>Certificado</span>
	<input bind:value={user.info_academica.profesional.certificado}>
</p>

<h2>Otro</h2>
<p>
	<span>Institución</span>
	<input bind:value={user.info_academica.otro_grado.institucion}>
</p>
<p>
	<span>Lugar (ciudad)</span>
	<input bind:value={user.info_academica.otro_grado.ciudad}>
</p>
<p>
	<span>Años</span>
	<input bind:value={user.info_academica.otro_grado.anos}>
</p>
<p>
	<span>Certificado</span>
	<input bind:value={user.info_academica.otro_grado.certificado}>
</p>

<br />
<p>
	<span>Cédula profesional:</span>
	<input bind:value={user.info_academica.cedula_profesional}>
</p>
<p>
	<span>Año de expedición:</span>
	<input bind:value={user.info_academica.cedula_prof_ano_exp}>
</p>

<br />
<p>
	<span>Dominio de otro idioma:</span>
	<input bind:value={user.info_academica.otro_idioma.idioma}>
</p>
<p>
	<span>Hablado</span>
	<input bind:value={user.info_academica.otro_idioma.hablado}>
</p>
<p>
	<span>Leido</span>
	<input bind:value={user.info_academica.otro_idioma.leido}>
</p>
<p>
	<span>Escuchado</span>
	<input bind:value={user.info_academica.otro_idioma.escuchado}>
</p>

<h2>Estudios</h2>
<p>
	<span>Estudia Actualmente</span>
	<select bind:value={user.info_academica.estudia_actualmente}>
		<option value=""></option>
		<option value="1">Sí</option>
		<option value="2">No</option>
		<option value="0">NA</option>
	</select> 
</p>
<p>
	<span>Institución</span>
	<input bind:value={user.info_academica.estudios_institucion}>
</p>

<p>
	<span>Qué estudia?</span>
	<input bind:value={user.info_academica.estudios_que}>
</p>
<p>
	<span>Horarios</span>
	<input bind:value={user.info_academica.estudios_horarios}>
</p>
<p>
	<span>Días</span>
	<input bind:value={user.info_academica.estudios_dias}>
</p>
