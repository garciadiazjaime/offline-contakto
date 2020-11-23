<script context="module">
	export async function preload(page) {
		const { uuid } = page.params;

		return { uuid };
	}
</script>

<script>
	import Layout from '../../../components/Layout.svelte'
	import Form from '../../../components/Form.svelte'
	import DatosGenerales from '../../../components/candidato/datos-generales.svelte'
	import { getUser, STEPS } from '../../../support/user'

	export let uuid
	let user

	$: {
		user = getUser(uuid)
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

<Layout uuid={uuid} section={STEPS.personal}>
	<Form user={user}>
		<h1>Inf. Personal</h1>

		<p>
			<span>Demandas Laborales y/o Antecedentes Penales</span>
			<input bind:value={user.personal.demandas}>
		</p>
		<p>
			<span>Cuenta con algún tatuaje o arete:(Cuantos y en que parte del cuerpo)</span>
			<input bind:value={user.personal.tatuaje}>
		</p>

		<h2>Historial en empresa</h2>
		<p>
			<span><h3>Ha trabajado anteriormente en la empresa</h3></span>
			<select bind:value={user.personal.empresaAnterior}>
				<option value=""></option>
				<option value="SI">Sí</option>
				<option value="NO">No</option>
			</select>
		</p>
		<p>
			<span>Puesto</span>
			<input bind:value={user.personal.empresaPuestoAnterior}>
		</p>
		<p>
			<span>Periodo</span>
			<input bind:value={user.personal.empresoPeriodoAnterior}>
		</p>
		<p>
			<span>Sucursal</span>
			<input bind:value={user.personal.empresoSucursalAnterior}>
		</p>
		<p>
			<span>Motivo de Salida</span>
			<input bind:value={user.personal.empresaSalidaAnterior}>
		</p>

		<p>
			<span><h3>Tiene algún familiar trabajando en la empresa</h3></span>
			<select bind:value={user.personal.empresaFamiliar}>
				<option value=""></option>
				<option value="SI">Sí</option>
				<option value="NO">No</option>
			</select>
		</p>

		<p>
			<span>Puesto</span>
			<input bind:value={user.personal.empresaPuestoFamiliar}>
		</p>
		<p>
			<span>Nombre</span>
			<input bind:value={user.personal.empresaNombreFamiliar}>
		</p>
		<p>
			<span>Sucursal</span>
			<input bind:value={user.personal.empresaSucursalFamiliar}>
		</p>
		<p>
			<span>Parentesco</span>
			<input bind:value={user.personal.empresaParentescoFamiliar}>
		</p>
	</Form>
</Layout>
