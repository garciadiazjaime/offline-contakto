<script>
	import Layout from '../../components/Layout.svelte'
	import Form from '../../components/Form.svelte'
	import DatosGenerales from '../../components/candidato/datos-generales.svelte'
	import { getUser, STEPS, getEmptyUser } from '../../support/user'

	let user = getEmptyUser()
</script>


<Layout>
	<Form user={user} section={STEPS.generales}>
		<DatosGenerales user={user} />
	</Form>
</Layout>
