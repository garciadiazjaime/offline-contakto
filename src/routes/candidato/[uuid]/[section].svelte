<script context="module">
	export async function preload(page) {
		const { uuid, section } = page.params;

		return { uuid, section };
	}
</script>

<script>
	import Layout from '../../../components/Layout.svelte'
	import Form from '../../../components/Form.svelte'
  import DatosGenerales from '../../../components/candidato/datos-generales.svelte'
  import InformacionPersonal from '../../../components/candidato/informacion-personal.svelte'
  import SaludActividadesHabitos from '../../../components/candidato/salud-actividades-habitos.svelte'
  import InformacionAcademica from '../../../components/candidato/informacion-academica.svelte'
  import Vivienda from '../../../components/candidato/vivienda.svelte'
  import MarcoFamiliar from '../../../components/candidato/marco-familiar.svelte'
  import Economica from '../../../components/candidato/informacion-economica.svelte'
  import Referencias from '../../../components/candidato/referencias-personales.svelte'
  import Evaluacion from '../../../components/candidato/evaluacion.svelte'
  import Adjuntos from '../../../components/candidato/adjuntos.svelte'
  
	import { getUser, STEPS } from '../../../support/user'

  export let uuid
  export let section
	let user

	$: {
		user = getUser(uuid)
	}
</script>

<Layout uuid={uuid} section={section} user={user}>
	<Form user={user} section={section}>
    {#if section === STEPS.generales}
		<DatosGenerales user={user} />
    {:else if section === STEPS.personal}
    <InformacionPersonal user={user} />
    {:else if section === STEPS.salud}
    <SaludActividadesHabitos user={user} />
    {:else if section === STEPS.academica}
    <InformacionAcademica user={user} />
    {:else if section === STEPS.vivienda}
    <Vivienda user={user} />
    {:else if section === STEPS.marco}
    <MarcoFamiliar user={user}  />
    {:else if section === STEPS.economica}
    <Economica user={user}  />
    {:else if section === STEPS.referencias}
    <Referencias user={user}  />
    {:else if section === STEPS.evaluacion}
    <Evaluacion user={user}  />
    {:else if section === STEPS.adjuntos}
    <Adjuntos user={user}  />
    {/if}
	</Form>
</Layout>
