<script>
  import { STEPS } from '../support/user'

  export let uuid
  export let section
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

  a {
    text-decoration: none;
  }
</style>

<ul>
  <li><a class:active="{section == STEPS.generales}" href="/candidato/{uuid}/datos-generales">Datos Generales</a></li>
  <li><a class:active="{section == STEPS.personal}" href="/candidato/{uuid}/informacion-personal">Inf. Personal</a></li>
  <li><a class:active="{section == STEPS.salud}" href="/candidato/{uuid}/salud-actividades-habitos">Actividades y Hábitos</a></li>
  <li><a class:active="{section == STEPS.academica}" href="/candidato/{uuid}/informacion-academica">Inf. Académica</a></li>
  <li><a class:active="{section == STEPS.vivienda}" href="/candidato/{uuid}/vivienda">Vivienda</a></li>
  <!-- <li><a href="./candidato/marco-familiar">Marco Familiar</a></li>
  <li><a href="./candidato/informacion-economica">Inf. Económica</a></li>
  <li><a href="./candidato/referencias-personales">Referencias Personales</a></li>
  <li><a href="./candidato/evaluacion">Evaluación</a></li>
  <li><a href="./candidato/adjuntos">Adjuntos</a></li>
  <li><a href="./candidato/exportar">Export</a></li> -->
</ul>
