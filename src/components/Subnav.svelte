<script>
  import { STEPS, deleteUser } from '../support/user'

  export let uuid
  export let section
  export let user

  async function clickHandlerExport(event) {
    event.preventDefault()

    const electron = require('electron')
		const mainProcess = electron.remote.require('./main.js');

		if (!electron || !electron.remote || !electron.remote.dialog) {
			return null
    }
    
    await mainProcess.generateZip(user)
  }

  function clickHandlerDelete(e) {
    if(confirm('Confirmar que se quiere eliminar al candidato')) {
      return deleteUser(uuid)
    }
    
    e.preventDefault()
  }
</script>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    color: #428bca;
    padding: 6px;
    display: inline-block;
  }

  li:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .active {
    text-decoration: underline;
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

  .delete {
    color: #dc2b2b;
    font-size: .8em;
  }
</style>

<ul>
  <li><a class:active="{section == STEPS.generales}" href="/candidato/{uuid}/datos-generales">Datos Generales</a></li>
  <li><a class:active="{section == STEPS.personal}" href="/candidato/{uuid}/informacion-personal">Inf. Personal</a></li>
  <li><a class:active="{section == STEPS.salud}" href="/candidato/{uuid}/salud-actividades-habitos">Actividades y Hábitos</a></li>
  <li><a class:active="{section == STEPS.academica}" href="/candidato/{uuid}/informacion-academica">Inf. Académica</a></li>
  <li><a class:active="{section == STEPS.vivienda}" href="/candidato/{uuid}/vivienda">Vivienda</a></li>
  <li><a class:active="{section == STEPS.marco}" href="/candidato/{uuid}/marco-familiar">Marco Familiar</a></li>
  <li><a class:active="{section == STEPS.economica}" href="/candidato/{uuid}/informacion-economica">Inf. Económica</a></li>
  <li><a class:active="{section == STEPS.referencias}" href="/candidato/{uuid}/referencias-personales">Referencias Personales</a></li>
  <li><a class:active="{section == STEPS.evaluacion}" href="/candidato/{uuid}/evaluacion">Evaluación</a></li>
  <li><a class:active="{section == STEPS.adjuntos}" href="/candidato/{uuid}/adjuntos">Adjuntos</a></li>
  <li><a href="/exportar" on:click={clickHandlerExport}>Exportar</a></li>
  <li><a href="/candidatos" on:click={clickHandlerDelete} class="delete">Eliminar</a></li>
</ul>
