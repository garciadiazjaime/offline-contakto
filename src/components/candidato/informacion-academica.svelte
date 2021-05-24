<script>
	export let user

	import Select from "../form/select.svelte"

	function schoolChangeHandler(event) {
		const { name: field, value } = event.target
		const label = value === 'NO' || value === '2' ? 'No aplica' : ''

		if (field === 'estudia_actualmente') {
			user.info_academica.estudia_actualmente = value
			user.info_academica.estudios_institucion = label
			user.info_academica.estudios_que = label
			user.info_academica.estudios_horarios = label
			user.info_academica.estudios_dias = label

			return
		}

		if (field === 'cedula_profesional') {
			user.info_academica.cedula_profesional_tiene = value
			user.info_academica.cedula_profesional = label
			user.info_academica.cedula_prof_ano_exp = label

			return
		}

		if (field === 'otro_idioma') {
			user.info_academica[field].tiene = value
			user.info_academica[field].idioma = label
			user.info_academica[field].hablado = label
			user.info_academica[field].leido = label
			user.info_academica[field].escuchado = label

			return
		}

		user.info_academica[field].tiene = value
		user.info_academica[field].institucion = label
		user.info_academica[field].ciudad = label
		user.info_academica[field].anos = label
		user.info_academica[field].certificado = value === 'NO' ? value : ''
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

<div>
	<span><strong>Cuenta con Primaria?</strong></span>
	<Select value={user.info_academica.primaria.tiene} handler={schoolChangeHandler} name="primaria" required/>
</div>
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
<br  />
<div>
	<span><strong>Cuenta con Secundaria?</strong></span>
	<Select value={user.info_academica.secundaria.tiene} handler={schoolChangeHandler} name="secundaria" required/>
</div>
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

<br />
<div>
	<span><strong>Cuenta con Preparatoria?</strong></span>
	<Select value={user.info_academica.preparatoria.tiene} handler={schoolChangeHandler} name="preparatoria" required/>
</div>
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

<br />
<div>
	<span><strong>Cuenta con Carrera Profesional?</strong></span>
	<Select value={user.info_academica.profesional.tiene} handler={schoolChangeHandler} name="profesional" required/>
</div>
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

<br />
<div>
	<span><strong>Cuenta con Otro Estudio?</strong></span>
	<Select value={user.info_academica.otro_grado.tiene} handler={schoolChangeHandler} name="otro_grado" required/>
</div>
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
	<span><strong>Cuenta con Cédula profesional?</strong></span>
	<Select value={user.info_academica.cedula_profesional_tiene} handler={schoolChangeHandler} name="cedula_profesional" required/>
</div>
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
	<span><strong>Domina de otro idioma?</strong></span>
	<Select value={user.info_academica.otro_idioma.tiene} handler={schoolChangeHandler} name="otro_idioma" required/>
</div>
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
	<Select value={user.info_academica.estudia_actualmente} handler={schoolChangeHandler} name="estudia_actualmente" type="num" required />
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
