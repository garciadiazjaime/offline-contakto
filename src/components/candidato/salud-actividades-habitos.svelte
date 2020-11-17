<script>
	import Subnav from '../Subnav.svelte'
	import { getUser, saveUser, updateUser, STEPS } from '../../support/user'

	export let updateView;
	export let user;
	export let activeView;

	function saveHandler() {
		updateUser(user)

		updateView(STEPS.salud, user)
	}

	function cancelHandler() {
		updateView()
	}
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

	.btn {
		display: inline-block;
		padding: 12px;
		font-size: 20px;
		border: 1px solid black;
	}

	.btn:first-of-type {
		margin-right: 12px;
	}

	.btn:hover {
		text-decoration: underline;
	}
	
	.btn:hover {
		cursor: pointer;
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


<Subnav updateView={updateView} user={user} activeView={activeView} />

<h1>Salud, Actividades y Hábitos</h1>

<p>
	<span>Peso (kg)</span>
	<input bind:value={user.salud.peso}>
</p>
<p>
	<span>Estatura (mts)</span>
	<input bind:value={user.salud.estatura}>
</p>
<p>
	<span>Salud física</span>
	<input bind:value={user.salud.fisica}>
</p>


<p>
	<span>Salud visual</span>
	<input bind:value={user.salud.visual}>
</p>
<p>
	<span>Embarazada (# meses)</span>
	<input bind:value={user.salud.embarazada}>
</p>
<p>
	<span>Ejercicio que practica y con qué frecuencia lo hace</span>
	<input bind:value={user.salud.ejercicio}>
</p>
<p>
	<span>Accidentes</span>
	<input bind:value={user.salud.accidentes}>
</p>
<p>
	<span>Intervenciones quirúrgicas</span>
	<input bind:value={user.salud.intervenciones}>
</p>
<p>
	<span>Enfermedades que padecen familiares:</span>
	<input bind:value={user.salud.enfermedadesFamiliares}>
</p>

<p>
	<span>Ha estado bajo algún tratamiento médico o psicológico</span>
	<input bind:value={user.salud.tratamiento}>
</p>
<p>
	<span>Enfermedades padecidas con mayor frecuencia</span>
	<input bind:value={user.salud.enfermedades}>
</p>
<p>
	<span>Institución médica a la que acude</span>
	<input bind:value={user.salud.instituciones}>
</p>

<p>
	<span>Religión:</span>
	<input bind:value={user.salud.religion}>
</p>
<p>
	<span>Horarios y días en los que las practica</span>
	<input bind:value={user.salud.horario}>
</p>

<h2>Inactividad laboral</h2>
<p>
	<span>Periodos:</span>
	<input bind:value={user.salud.periodo}>
</p>
<p>
	<span>Actividades que realizó</span>
	<input bind:value={user.salud.actividad}>
</p>

<h2>Negocios por cuenta propia</h2>
<p>
	<span>Periodos:</span>
	<input bind:value={user.salud.negocioPeriodo}>
</p>
<p>
	<span>Actividades que realizó</span>
	<input bind:value={user.salud.negocioActividad}>
</p>

<h2>Especificar cada cuanto consume</h2>
<p>
	<span>Tabaco:</span>
	<input bind:value={user.salud.tabaco}>
</p>
<p>
	<span>Alcohol:</span>
	<input bind:value={user.salud.alcohol}>
</p>
<p>
	<span>Otras:</span>
	<input bind:value={user.salud.otras}>
</p>

<span class="btn" on:click={saveHandler}>Guardar</span>
<span class="btn" on:click={cancelHandler}>Cancelar</span>
