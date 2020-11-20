<script>
	import Layout from '../../components/Layout.svelte'
	import Form from '../../components/Form.svelte'
	import DatosGenerales from '../../components/candidato/datos-generales.svelte'
	import { getUser, STEPS } from '../../support/user'

	let user = {
		generales: {},
		personal: {},
		salud: {},
		academica: {}
  }
</script>


<Layout>
	<Form user={user}>
		<DatosGenerales user={user} />
	</Form>
</Layout>
