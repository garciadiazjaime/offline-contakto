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

<Layout uuid={uuid} section={STEPS.generales}>
	<Form user={user}>
		<DatosGenerales user={user} />
	</Form>
</Layout>
