<script>
  import JSZip from 'jszip/dist/jszip'
  import { saveAs } from 'file-saver';

  import { STEPS, deleteUser } from '../support/user'

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

  async function clickHandlerExport(event) {
    event.preventDefault()

    const exportName = 'user'
    const zip = new JSZip();

    const data = { ...user }
    delete data.adjuntos


    zip.file("data.json", JSON.stringify(data));

    const img = zip.folder("images");

    Object.keys(user.adjuntos).map(filename => {
      const imageData = user.adjuntos[filename].replace(/^data:image\/png;base64,/, "")
      img.file(`${filename}.jpg`, imageData, { base64: true });
    })
    

    const content = await zip.generateAsync({type:"blob"})
    
    const zipName = `user_${data.datos_generales.nombre.toLowerCase().replace(/\W/ig, '')}.zip`
    saveAs(content, zipName);
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
