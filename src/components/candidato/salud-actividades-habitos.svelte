<script>
	export let user

	function inactividadLaboralChange(event) {
		if (event.target.value === 'NO') {
			user.actividades_habitos.inactividad_laboral = 'no aplica'
			user.actividades_habitos.inactividad_laboral_actividad = 'no aplica'		
		} else {
			user.actividades_habitos.inactividad_laboral = ''
			user.actividades_habitos.inactividad_laboral_actividad = ''
		}
	}

	function negociosPropiosChange(event) {
		if (event.target.value === 'NO') {
			user.actividades_habitos.negocios = 'no aplica'		
			user.actividades_habitos.negocios_actividad = 'no aplica'
		} else {
			user.actividades_habitos.negocios = ''
			user.actividades_habitos.negocios_actividad = ''
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

<h1>Salud, Actividades y Hábitos</h1>

<div>
	<span>Peso (kg)</span>
	<input bind:value={user.datos_salud.peso_kg} required>
</div>
<div>
	<span>Estatura (mts)</span>
	<input bind:value={user.datos_salud.estatura_mts} required>
</div>
<div>
	<span>Salud física</span>
	<select bind:value={user.datos_salud.salud_fisica}>
		<option value="">Seleccionar</option>
		<option value="BUENA">BUENA</option>
		<option value="REGULAR">REGULAR</option>
		<option value="MALA">MALA</option>
	</select>
</div>


<div>
	<span>Salud visual</span>
	<select bind:value={user.datos_salud.salud_visual}>
		<option value="">Seleccionar</option>
		<option value="BUENA">BUENA</option>
		<option value="REGULAR">REGULAR</option>
		<option value="MALA">MALA</option>
	</select>
</div>
<div>
	<span>Embarazada (# meses)</span>
	<input bind:value={user.datos_salud.embarazo_meses} required>
</div>
<div>
	<span>Ejercicio que practica y con qué frecuencia lo hace</span>
	<input bind:value={user.datos_salud.ejercicio_tipo_frecuencia} required>
</div>
<div>
	<span>Accidentes (si/no) y especificar</span>
	<input bind:value={user.datos_salud.accidentes} required>
</div>
<div>
	<span>Intervenciones quirúrgicas (si/no) y especificar</span>
	<input bind:value={user.datos_salud.intervenciones_quirurgicas} required>
</div>
<div>
	<span>Enfermedades que padecen familiares:</span>
	<input bind:value={user.datos_salud.enfermedades_familiares} required>
</div>

<div>
	<span>Ha estado bajo algún tratamiento médico o psicológico</span>
	<input bind:value={user.datos_salud.tratamiento_medico_psicologico} required>
</div>
<div>
	<span>Enfermedades padecidas con mayor frecuencia</span>
	<input bind:value={user.datos_salud.enfermedades_mayor_frecuencia} required>
</div>
<div>
	<span>Institución médica a la que acude</span>
	<input bind:value={user.datos_salud.institucion_medica} required>
</div>

<div>
	<span>Religión:</span>
	<input bind:value={user.datos_generales.religion} required>
</div>
<div>
	<span>Horarios y días en los que las practica</span>
	<input bind:value={user.datos_generales.religion_tiempo} required>
</div>

<h2>Inactividad laboral</h2>
<div>
	<span></span>
	<select on:change={inactividadLaboralChange}>
		<option value="">Seleccionar</option>
		<option value="SI">Sí</option>
		<option value="NO">No</option>
	</select>
</div>
<div>
	<span>Periodos:</span>
	<input bind:value={user.actividades_habitos.inactividad_laboral} required>
</div>
<div>
	<span>Actividades que realizó</span>
	<input bind:value={user.actividades_habitos.inactividad_laboral_actividad} required>
</div>

<h2>Negocios por cuenta propia</h2>
<div>
	<span></span>
	<select on:change={negociosPropiosChange}>
		<option value="">Seleccionar</option>
		<option value="SI">Sí</option>
		<option value="NO">No</option>
	</select>
</div>
<div>
	<span>Periodos:</span>
	<input bind:value={user.actividades_habitos.negocios} required>
</div>
<div>
	<span>Actividades que realizó</span>
	<input bind:value={user.actividades_habitos.negocios_actividad} required>
</div>

<h2>Especificar cada cuanto consume</h2>
<div>
	<span>Tabaco:</span>
	<input bind:value={user.actividades_habitos.frecuencia_tabaco} required>
</div>
<div>
	<span>Alcohol:</span>
	<input bind:value={user.actividades_habitos.frecuencia_alcohol} required>
</div>
<div>
	<span>Otras:</span>
	<input bind:value={user.actividades_habitos.frecuencia_otras_sust} required>
</div>
