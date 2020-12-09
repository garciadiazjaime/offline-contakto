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
	<input bind:checked={user.evaluacion.nacimiento} type="checkbox">
</p>
<p>
	<span>Acta de matrimonio</span>
	<input bind:checked={user.evaluacion.matrimonio} type="checkbox">
</p>
<p>
	<span>Comprobante de domicilio</span>
	<input bind:checked={user.evaluacion.domicilio} type="checkbox">
</p>
<p>
	<span>Comprobrante de identificación</span>
	<input bind:checked={user.evaluacion.identificacion} type="checkbox">
</p>
<p>
	<span>Comprobante de NSS</span>
	<input bind:checked={user.evaluacion.nss} type="checkbox">
</p>
<p>
	<span>CURP</span>
	<input bind:checked={user.evaluacion.curp} type="checkbox">
</p>
<p>
	<span>Cartilla SMN</span>
	<input bind:checked={user.evaluacion.smn} type="checkbox">
</p>
<p>
	<span>Último grado de estudios</span>
	<input bind:checked={user.evaluacion.ultimoEstudio} type="checkbox">
</p>
<p>
	<span>Cartas laborales</span>
	<input bind:checked={user.evaluacion.carta} type="checkbox">
</p>
<p>
	<span>En caso de no presentar algún documento, especificar cuál y el motivo por el que no lo presentó</span>
	<input bind:value={user.evaluacion.acta} type="input">
</p>

<h2>Calificación de 1% a 100%</h2>
<h3>Aspecto del Hogar</h3>
<p>
	<span>Orden</span>
	<input bind:checked={user.evaluacion.orden} type="checkbox">
</p>
<p>
	<span>Limpieza</span>
	<input bind:checked={user.evaluacion.limpieza} type="checkbox">
</p>
<p>
	<span>Conservación</span>
	<input bind:checked={user.evaluacion.conservacion} type="checkbox">
</p>

<h3>Aspecto del candidato</h3>
<p>
	<span>Puntualidad</span>
	<input bind:checked={user.evaluacion.puntualidad} type="checkbox">
</p>
<p>
	<span>Apariencia física</span>
	<input bind:checked={user.evaluacion.apariencia} type="checkbox">
</p>
<p>
	<span>Colaboración</span>
	<input bind:checked={user.evaluacion.colaboracion} type="checkbox">
</p>
<p>
	<span>Actitud</span>
	<input bind:checked={user.evaluacion.actitud} type="checkbox">
</p>

<h2>Conclusión</h2>
<p>
	<span>Conclusiones de la entrevista (visible en conclusión pdf)</span>
	<textarea bind:value={user.evaluacion.acta}></textarea>
</p>
