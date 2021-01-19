<script>
	import Alert from '../Alert.svelte'
	import { updateUser } from '../../support/user'

	export let user
	let msg = ''

	const preview = user.adjuntos || {}

	async function changeHandler(event) {
		event.preventDefault()

		const electron = require('electron')
		const mainProcess = electron.remote.require('./main.js');

		if (!electron || !electron.remote || !electron.remote.dialog) {
			return null
		}

		const data = await electron.remote.dialog.showOpenDialog({
			filters: [
				{ name: 'Images', extensions: ['jpg', 'png', 'gif'] },
			]
		})

		if (data.canceled) {
			return null
		}

		const fileName = event.target.name
		const response = await mainProcess.saveUserFile(data)
		preview[fileName] = response[0]

		updateUser(user)
	}

	async function clickHandlerDelete() {
		const electron = require('electron')
		const mainProcess = electron.remote.require('./main.js');

		if (!electron || !electron.remote || !electron.remote.dialog) {
			return null
		}


		const { value: fileName } = this.attributes['data-file']

		await mainProcess.deleteUserFile(user.adjuntos[fileName])

		preview[fileName] = null
		user.adjuntos[fileName] = null

		updateUser(user)
	}
</script>


<style>
	span {
		display: block;
	}

	p {
		display: flex;
		align-items: center;
	}

	p span {
		width: 240px;
		padding-right: 6px;
	}

	h2 {
		padding-top: 29px;
	}

	button {
		height: 32px;
		font-size: 26px;
		margin: 0 12px;
	}

	img {
		width: 100px;
		height: auto;
	}

	strong {
		display: inline-block;
		width: 40px;
		text-align: center;
		color: #dc2b2b;
		font-size: 24px;
		padding: 12px;
		cursor: pointer;
	}
</style>

<h1>Adjuntos</h1>

<p>
	<span><b>1. Foto de perfil del candidato</b></span>
	<button on:click={changeHandler} name="file1">Seleccionar Archivo</button>
	<img src={preview.file1} alt="" />
	{#if preview.file1}
	<strong on:click={clickHandlerDelete} data-file="file1">x</strong>
	{/if}
</p>

<h2>2. Fotografias del domicilio</h2>
<p>
	<span>a. Interior derecho</span>
	<button on:click={changeHandler} name="file2">Seleccionar Archivo</button>
	<img src={preview.file2} alt="" />
	{#if preview.file2}
	<strong on:click={clickHandlerDelete} data-file="file2">x</strong>
	{/if}
</p>
<p>
	<span>b. Interior izquierdo</span>
	<button on:click={changeHandler} name="file3">Seleccionar Archivo</button>
	<img src={preview.file3} alt="" />
	{#if preview.file3}
	<strong on:click={clickHandlerDelete} data-file="file3">x</strong>
	{/if}
</p>
<p>
	<span>c. Exterior derecho</span>
	<button on:click={changeHandler} name="file4">Seleccionar Archivo</button>
	<img src={preview.file4} alt="" />
	{#if preview.file4}
	<strong on:click={clickHandlerDelete} data-file="file4">x</strong>
	{/if}
</p>
<p>
	<span>d. Exterior izquierdo</span>
	<button on:click={changeHandler} name="file5">Seleccionar Archivo</button>
	<img src={preview.file5} alt="" />
	{#if preview.file5}
	<strong on:click={clickHandlerDelete} data-file="file5">x</strong>
	{/if}
</p>
<p>
	<span>e. Frente</span>
	<button on:click={changeHandler} name="file6">Seleccionar Archivo</button>
	<img src={preview.file6} alt="" />
	{#if preview.file6}
	<strong on:click={clickHandlerDelete} data-file="file6">x</strong>
	{/if}
</p>

<br />

<p>
	<span><b>3. Gestor Entrevistador</b></span>
	<button on:click={changeHandler} name="file7">Seleccionar Archivo</button>
	<img src={preview.file7} alt="" />
	{#if preview.file7}
	<strong on:click={clickHandlerDelete} data-file="file7">x</strong>
	{/if}
</p>
<p>
	<span><b>4. Croquis</b></span>
	<button on:click={changeHandler} name="file8">Seleccionar Archivo</button>
	<img src={preview.file8} alt="" />
	{#if preview.file8}
	<strong on:click={clickHandlerDelete} data-file="file8">x</strong>
	{/if}
</p>
<p>
	<span><b>5. Aviso Privacidad</b></span>
	<button on:click={changeHandler} name="file9">Seleccionar Archivo</button>
	<img src={preview.file9} alt="" />
	{#if preview.file9}
	<strong on:click={clickHandlerDelete} data-file="file9">x</strong>
	{/if}
</p>
<p>
	<span><b>6. Constancia</b></span>
	<button on:click={changeHandler} name="file10">Seleccionar Archivo</button>
	<img src={preview.file10} alt="" />
	{#if preview.file10}
	<strong on:click={clickHandlerDelete} data-file="file10">x</strong>
	{/if}
</p>

<h2>7. Fotografias de la Identificación</h2>
<p>
	<span>7.a Identificación con fotografia</span>
	<button on:click={changeHandler} name="file11">Seleccionar Archivo</button>
	<img src={preview.file11} alt="" />
	{#if preview.file11}
	<strong on:click={clickHandlerDelete} data-file="file11">x</strong>
	{/if}
</p>
<p>
	<span>7.b Identificación con fotografia</span>
	<button on:click={changeHandler} name="file12">Seleccionar Archivo</button>
	<img src={preview.file12} alt="" />
	{#if preview.file12}
	<strong on:click={clickHandlerDelete} data-file="file12">x</strong>
	{/if}
</p>
<p>
	<span>7.c Identificación con fotografia</span>
	<button on:click={changeHandler} name="file13">Seleccionar Archivo</button>
	<img src={preview.file13} alt="" />
	{#if preview.file13}
	<strong on:click={clickHandlerDelete} data-file="file13">x</strong>
	{/if}
</p>
<p>
	<span>7.d Identificación con fotografia</span>
	<button on:click={changeHandler} name="file14">Seleccionar Archivo</button>
	<img src={preview.file14} alt="" />
	{#if preview.file14}
	<strong on:click={clickHandlerDelete} data-file="file14">x</strong>
	{/if}
</p>

<br />

<p>
	<span><b>8. Acta de nacimiento</b></span>
	<button on:click={changeHandler} name="file15">Seleccionar Archivo</button>
	<img src={preview.file15} alt="" />
	{#if preview.file15}
	<strong on:click={clickHandlerDelete} data-file="file15">x</strong>
	{/if}
</p>
<p>
	<span><b>9. Comprobante de domicilio</b></span>
	<button on:click={changeHandler} name="file16">Seleccionar Archivo</button>
	<img src={preview.file16} alt="" />
	{#if preview.file16}
	<strong on:click={clickHandlerDelete} data-file="file16">x</strong>
	{/if}
</p>

<br>

<h2>10. Semanas Cotizadas</h2>
<p>
	<span>10.a Semanas Cotizadas</span>
	<button on:click={changeHandler} name="file17">Seleccionar Archivo</button>
	<img src={preview.file17} alt="" />
	{#if preview.file17}
	<strong on:click={clickHandlerDelete} data-file="file17">x</strong>
	{/if}
</p>
<p>
	<span>10.b Semanas Cotizadas</span>
	<button on:click={changeHandler} name="file18">Seleccionar Archivo</button>
	<img src={preview.file18} alt="" />
	{#if preview.file18}
	<strong on:click={clickHandlerDelete} data-file="file18">x</strong>
	{/if}
</p>
<p>
	<span>10.c Semanas Cotizadas</span>
	<button on:click={changeHandler} name="file19">Seleccionar Archivo</button>
	<img src={preview.file19} alt="" />
	{#if preview.file19}
	<strong on:click={clickHandlerDelete} data-file="file19">x</strong>
	{/if}
</p>
<p>
	<span>10.d Semanas Cotizadas</span>
	<button on:click={changeHandler} name="file20">Seleccionar Archivo</button>
	<img src={preview.file20} alt="" />
	{#if preview.file20}
	<strong on:click={clickHandlerDelete} data-file="file20">x</strong>
	{/if}
</p>
<p>
	<span>10.e Semanas Cotizadas</span>
	<button on:click={changeHandler} name="file21">Seleccionar Archivo</button>
	<img src={preview.file21} alt="" />
	{#if preview.file21}
	<strong on:click={clickHandlerDelete} data-file="file21">x</strong>
	{/if}
</p>


<h2>11. Carta Laboral</h2>
<p>
	<span>a. Principal</span>
	<button on:click={changeHandler} name="file22">Seleccionar Archivo</button>
	<img src={preview.file22} alt="" />
	{#if preview.file22}
	<strong on:click={clickHandlerDelete} data-file="file22">x</strong>
	{/if}
</p>
<p>
	<span>b. Extra</span>
	<button on:click={changeHandler} name="file23">Seleccionar Archivo</button>
	<img src={preview.file23} alt="" />
	{#if preview.file23}
	<strong on:click={clickHandlerDelete} data-file="file23">x</strong>
	{/if}
</p>


<h2>12. Adicionales</h2>
<p>
	<span>Adicionales 1</span>
	<button on:click={changeHandler} name="file24">Seleccionar Archivo</button>
	<img src={preview.file24} alt="" />
	{#if preview.file24}
	<strong on:click={clickHandlerDelete} data-file="file24">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales 2</span>
	<button on:click={changeHandler} name="file25">Seleccionar Archivo</button>
	<img src={preview.file25} alt="" />
	{#if preview.file25}
	<strong on:click={clickHandlerDelete} data-file="file25">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales 3</span>
	<button on:click={changeHandler} name="file26">Seleccionar Archivo</button>
	<img src={preview.file26} alt="" />
	{#if preview.file26}
	<strong on:click={clickHandlerDelete} data-file="file26">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales 4</span>
	<button on:click={changeHandler} name="file27">Seleccionar Archivo</button>
	<img src={preview.file27} alt="" />
	{#if preview.file27}
	<strong on:click={clickHandlerDelete} data-file="file27">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales 5</span>
	<button on:click={changeHandler} name="file28">Seleccionar Archivo</button>
	<img src={preview.file28} alt="" />
	{#if preview.file28}
	<strong on:click={clickHandlerDelete} data-file="file28">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales 6</span>
	<button on:click={changeHandler} name="file29">Seleccionar Archivo</button>
	<img src={preview.file29} alt="" />
	{#if preview.file29}
	<strong on:click={clickHandlerDelete} data-file="file29">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales 7</span>
	<button on:click={changeHandler} name="file30">Seleccionar Archivo</button>
	<img src={preview.file30} alt="" />
	{#if preview.file30}
	<strong on:click={clickHandlerDelete} data-file="file30">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales 8</span>
	<button on:click={changeHandler} name="file31">Seleccionar Archivo</button>
	<img src={preview.file31} alt="" />
	{#if preview.file31}
	<strong on:click={clickHandlerDelete} data-file="file31">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales 9</span>
	<button on:click={changeHandler} name="file32">Seleccionar Archivo</button>
	<img src={preview.file32} alt="" />
	{#if preview.file32}
	<strong on:click={clickHandlerDelete} data-file="file32">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales 10</span>
	<button on:click={changeHandler} name="file33">Seleccionar Archivo</button>
	<img src={preview.file33} alt="" />
	{#if preview.file33}
	<strong on:click={clickHandlerDelete} data-file="file33">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales 11</span>
	<button on:click={changeHandler} name="file34">Seleccionar Archivo</button>
	<img src={preview.file34} alt="" />
	{#if preview.file34}
	<strong on:click={clickHandlerDelete} data-file="file34">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales 12</span>
	<button on:click={changeHandler} name="file35">Seleccionar Archivo</button>
	<img src={preview.file35} alt="" />
	{#if preview.file35}
	<strong on:click={clickHandlerDelete} data-file="file35">x</strong>
	{/if}
</p>


<p>
	<span>Extra A (Cualquier formato)</span>
	<button on:click={changeHandler} name="file36">Seleccionar Archivo</button>
	<img src={preview.file36} alt="" />
	{#if preview.file36}
	<strong on:click={clickHandlerDelete} data-file="file36">x</strong>
	{/if}
</p>

<Alert msg={msg} />
