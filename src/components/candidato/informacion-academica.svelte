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
	<input bind:value={user.academica.institucion}>
</p>
<p>
	<span>Lugar (ciudad)</span>
	<input bind:value={user.academica.lugar}>
</p>
<p>
	<span>Años</span>
	<input bind:value={user.academica.anios}>
</p>
<p>
	<span>Certificado</span>
	<input bind:value={user.academica.certificado}>
</p>

<h2>Secundaria</h2>
<p>
	<span>Institución</span>
	<input bind:value={user.academica.secundaria}>
</p>
<p>
	<span>Lugar (ciudad)</span>
	<input bind:value={user.academica.secundariaLugar}>
</p>
<p>
	<span>Años</span>
	<input bind:value={user.academica.secundariaAnios}>
</p>
<p>
	<span>Certificado</span>
	<input bind:value={user.academica.secundariaCertificado}>
</p>

<h2>Preparatoria</h2>
<p>
	<span>Institución</span>
	<input bind:value={user.academica.prepa}>
</p>
<p>
	<span>Lugar (ciudad)</span>
	<input bind:value={user.academica.prepaLugar}>
</p>
<p>
	<span>Años</span>
	<input bind:value={user.academica.prepaAnios}>
</p>
<p>
	<span>Certificado</span>
	<input bind:value={user.academica.prepaCertificado}>
</p>

<h2>Profesional</h2>
<p>
	<span>Institución</span>
	<input bind:value={user.academica.uni}>
</p>
<p>
	<span>Lugar (ciudad)</span>
	<input bind:value={user.academica.uniLugar}>
</p>
<p>
	<span>Años</span>
	<input bind:value={user.academica.uniAnios}>
</p>
<p>
	<span>Certificado</span>
	<input bind:value={user.academica.uniCertificado}>
</p>

<h2>Otro</h2>
<p>
	<span>Institución</span>
	<input bind:value={user.academica.otro}>
</p>
<p>
	<span>Lugar (ciudad)</span>
	<input bind:value={user.academica.otroLugar}>
</p>
<p>
	<span>Años</span>
	<input bind:value={user.academica.otroAnios}>
</p>
<p>
	<span>Certificado</span>
	<input bind:value={user.academica.otroCertificado}>
</p>

<br />
<p>
	<span>Cédula profesional:</span>
	<input bind:value={user.academica.cedula}>
</p>
<p>
	<span>Año de expedición:</span>
	<input bind:value={user.academica.cedulaExpedicion}>
</p>

<br />
<p>
	<span>Dominio de otro idioma:</span>
	<input bind:value={user.academica.idioma}>
</p>
<p>
	<span>Hablado</span>
	<input bind:value={user.academica.idiomaHablado}>
</p>
<p>
	<span>Leido</span>
	<input bind:value={user.academica.idiomaLeido}>
</p>
<p>
	<span>Escuchado</span>
	<input bind:value={user.academica.idiomaEscuchado}>
</p>

<h2>Estudios</h2>
<p>
	<span>Estudia Actualmente</span>
	<select bind:value={user.academica.estudios}>
		<option value=""></option>
		<option value="SI">Sí</option>
		<option value="NO">No</option>
		<option value="NA">NA</option>
	</select> 
</p>
<p>
	<span>Institución</span>
	<input bind:value={user.academica.estudiosInstitucion}>
</p>

<p>
	<span>Qué estudia?</span>
	<input bind:value={user.academica.estudiosDescripcion}>
</p>
<p>
	<span>Horarios</span>
	<input bind:value={user.academica.estudiosHorario}>
</p>
<p>
	<span>Días</span>
	<input bind:value={user.academica.estudiosDiass}>
</p>
