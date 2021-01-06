<script>
	export let user
</script>

<style>
	span {
		display: block;
	}
	input {
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

<h1>Salud, Actividades y Hábitos</h1>

<p>
	<span>Peso (kg)</span>
	<input bind:value={user.datos_salud.peso_kg}>
</p>
<p>
	<span>Estatura (mts)</span>
	<input bind:value={user.datos_salud.estatura_mts}>
</p>
<p>
	<span>Salud física</span>
	<input bind:value={user.datos_salud.salud_fisica}>
</p>


<p>
	<span>Salud visual</span>
	<input bind:value={user.datos_salud.salud_visual}>
</p>
<p>
	<span>Embarazada (# meses)</span>
	<input bind:value={user.datos_salud.embarazo_meses}>
</p>
<p>
	<span>Ejercicio que practica y con qué frecuencia lo hace</span>
	<input bind:value={user.datos_salud.ejercicio_tipo_frecuencia}>
</p>
<p>
	<span>Accidentes</span>
	<input bind:value={user.datos_salud.accidentes}>
</p>
<p>
	<span>Intervenciones quirúrgicas</span>
	<input bind:value={user.datos_salud.intervenciones_quirurgicas}>
</p>
<p>
	<span>Enfermedades que padecen familiares:</span>
	<input bind:value={user.datos_salud.enfermedades_familiares}>
</p>

<p>
	<span>Ha estado bajo algún tratamiento médico o psicológico</span>
	<input bind:value={user.datos_salud.tratamiento_medico_psicologico}>
</p>
<p>
	<span>Enfermedades padecidas con mayor frecuencia</span>
	<input bind:value={user.datos_salud.enfermedades_mayor_frecuencia}>
</p>
<p>
	<span>Institución médica a la que acude</span>
	<input bind:value={user.datos_salud.institucion_medica}>
</p>

<p>
	<span>Religión:</span>
	<input bind:value={user.datos_generales.religion}>
</p>
<p>
	<span>Horarios y días en los que las practica</span>
	<input bind:value={user.datos_generales.religion_tiempo}>
</p>

<h2>Inactividad laboral</h2>
<p>
	<span>Periodos:</span>
	<input bind:value={user.actividades_habitos.inactividad_laboral}>
</p>
<p>
	<span>Actividades que realizó</span>
	<input bind:value={user.actividades_habitos.inactividad_laboral_actividad}>
</p>

<h2>Negocios por cuenta propia</h2>
<p>
	<span>Periodos:</span>
	<input bind:value={user.actividades_habitos.negocios}>
</p>
<p>
	<span>Actividades que realizó</span>
	<input bind:value={user.actividades_habitos.negocios_actividad}>
</p>

<h2>Especificar cada cuanto consume</h2>
<p>
	<span>Tabaco:</span>
	<input bind:value={user.actividades_habitos.frecuencia_tabaco}>
</p>
<p>
	<span>Alcohol:</span>
	<input bind:value={user.actividades_habitos.frecuencia_alcohol}>
</p>
<p>
	<span>Otras:</span>
	<input bind:value={user.actividades_habitos.frecuencia_otras_sust}>
</p>
