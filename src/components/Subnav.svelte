<script>
  import { STEPS } from '../support/user'

  export let updateView
  export let user
  export let activeView

  
  function clicHandler(step) {
    updateView(step, user)
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
  }
</style>

<ul>
  <li class:active="{activeView === STEPS.generales}" on:click={() => clicHandler(STEPS.generales)}>Datos Generales</li>
  <li class:active="{activeView === STEPS.personal}" on:click={() => clicHandler(STEPS.personal)}>Inf. Personal</li>
  <li class:active="{activeView === STEPS.salud}" on:click={() => clicHandler(STEPS.salud)}>Salud, Actividades y Hábitos</li>
  <li class:active="{activeView === STEPS.academica}" on:click={() => clicHandler(STEPS.academica)}>Inf. Académica</li>
  <!-- <li><a href="./candidato/vivienda">Vivienda</a></li>
  <li><a href="./candidato/marco-familiar">Marco Familiar</a></li>
  <li><a href="./candidato/informacion-economica">Inf. Económica</a></li>
  <li><a href="./candidato/referencias-personales">Referencias Personales</a></li>
  <li><a href="./candidato/evaluacion">Evaluación</a></li>
  <li><a href="./candidato/adjuntos">Adjuntos</a></li>
  <li><a href="./candidato/exportar">Export</a></li> -->
</ul>
