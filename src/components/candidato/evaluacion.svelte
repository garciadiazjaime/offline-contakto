<script>
	export let user
</script>

<style>
	span {
		display: block;
	}
	textarea {
		width: 100%;
		font-size: 26px;
		height: 96px;
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

<h1>Evaluación</h1>

<h2>Documentos evaluados</h2>
<p>
	<span>Acta de nacimiento</span>
	<input bind:checked={user.cuadro_evaluacion.documentos_cotejados[0].estatus} type="checkbox">
</p>
<p>
	<span>Acta de matrimonio</span>
	<input bind:checked={user.cuadro_evaluacion.documentos_cotejados[1].estatus} type="checkbox">
</p>
<p>
	<span>Comprobante de domicilio</span>
	<input bind:checked={user.cuadro_evaluacion.documentos_cotejados[2].estatus} type="checkbox">
</p>
<p>
	<span>Comprobrante de identificación</span>
	<input bind:checked={user.cuadro_evaluacion.documentos_cotejados[3].estatus} type="checkbox">
</p>
<p>
	<span>Comprobante de NSS</span>
	<input bind:checked={user.cuadro_evaluacion.documentos_cotejados[4].estatus} type="checkbox">
</p>
<p>
	<span>CURP</span>
	<input bind:checked={user.cuadro_evaluacion.documentos_cotejados[5].estatus} type="checkbox">
</p>
<p>
	<span>Cartilla SMN</span>
	<input bind:checked={user.cuadro_evaluacion.documentos_cotejados[6].estatus} type="checkbox">
</p>
<p>
	<span>Último grado de estudios</span>
	<input bind:checked={user.cuadro_evaluacion.documentos_cotejados[7].estatus} type="checkbox">
</p>
<p>
	<span>Cartas laborales</span>
	<input bind:checked={user.cuadro_evaluacion.documentos_cotejados[8].estatus} type="checkbox">
</p>
<p>
	<span>En caso de no presentar algún documento, especificar cuál y el motivo por el que no lo presentó</span>
	<input bind:value={user.cuadro_evaluacion.documentos_cotejados[9].observaciones} type="input" required>
</p>

<h2>Calificación de 1% a 100%</h2>
<h3>Aspecto del Hogar</h3>
<p>
	<span>Orden</span>
	<input bind:value={user.cuadro_evaluacion.aspectos_hogar[0].estatus} required>
</p>
<p>
	<span>Limpieza</span>
	<input bind:value={user.cuadro_evaluacion.aspectos_hogar[1].estatus} required>
</p>
<p>
	<span>Conservación</span>
	<input bind:value={user.cuadro_evaluacion.aspectos_hogar[2].estatus} required>
</p>

<h3>Aspecto del candidato</h3>
<p>
	<span>Puntualidad</span>
	<input bind:value={user.cuadro_evaluacion.aspectos_candidato[0].estatus} required>
</p>
<p>
	<span>Apariencia física</span>
	<input bind:value={user.cuadro_evaluacion.aspectos_candidato[1].estatus} required>
</p>
<p>
	<span>Colaboración</span>
	<input bind:value={user.cuadro_evaluacion.aspectos_candidato[2].estatus} required>
</p>
<p>
	<span>Actitud</span>
	<input bind:value={user.cuadro_evaluacion.aspectos_candidato[3].estatus} required>
</p>

<h2>Conclusión</h2>
<p>
	<span>Conclusiones de la entrevista (visible en conclusión pdf)</span>
	<textarea bind:value={user.investigacion.conclusiones} required></textarea>
</p>
