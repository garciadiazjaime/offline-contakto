<script>
  import JSZip from 'jszip/dist/jszip'
  import { saveAs } from 'file-saver';

  import { STEPS } from '../support/user'

  import successkid from 'images/successkid.jpg';

  export let uuid
  export let section
  export let user

  function toDataURL(url) {
    return fetch(url)
      .then(response => response.blob())
      .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result.replace('data:image/png;base64,', ''))
        reader.onerror = reject
        reader.readAsDataURL(blob)
      }))
  }

  async function clickHandler(event) {
    event.preventDefault()

    console.log(user)

    const exportName = 'user'
    const zip = new JSZip();

    zip.file("data.json", JSON.stringify(user));

    const img = zip.folder("images");
    const imageData = await toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0')

    img.file("image_1.jpg", imageData, { base64: true });

    const content = await zip.generateAsync({type:"blob"})
    
    saveAs(content, "user.zip");
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
  <li><a class:active="{section == STEPS.marco}" href="/candidato/{uuid}/marco-familiar">Marco Familiar</a></li>
  <li><a class:active="{section == STEPS.economica}" href="/candidato/{uuid}/informacion-economica">Inf. Económica</a></li>
  <li><a class:active="{section == STEPS.referencias}" href="/candidato/{uuid}/referencias-personales">Referencias Personales</a></li>
  <li><a class:active="{section == STEPS.evaluacion}" href="/candidato/{uuid}/evaluacion">Evaluación</a></li>
  <li><a class:active="{section == STEPS.adjuntos}" href="/candidato/{uuid}/adjuntos">Adjuntos</a></li>
  <li><a href="/exportar" on:click={clickHandler}>Exportar</a></li>
</ul>
