<script>
  import { STEPS } from '../support/user'

  export let updateView
  export let user

  
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
</style>

<ul>
  <li><span on:click={() => clicHandler(STEPS.generales)}>Datos Generales</span></li>
  <li><span on:click={() => clicHandler(STEPS.personal)}>Inf. Personal</span></li>
  <!-- <li><a href="./candidato/salud-actividades-habitos">Salud, Actividades y Hábitos</a></li>
  <li><a href="./candidato/informacion-academica">Inf. Académica</a></li>
  <li><a href="./candidato/vivienda">Vivienda</a></li>
  <li><a href="./candidato/marco-familiar">Marco Familiar</a></li>
  <li><a href="./candidato/informacion-economica">Inf. Económica</a></li>
  <li><a href="./candidato/referencias-personales">Referencias Personales</a></li>
  <li><a href="./candidato/evaluacion">Evaluación</a></li>
  <li><a href="./candidato/adjuntos">Adjuntos</a></li>
  <li><a href="./candidato/exportar">Export</a></li> -->
</ul>
