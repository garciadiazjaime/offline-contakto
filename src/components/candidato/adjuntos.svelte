<script>
	import Alert from '../Alert.svelte'
	import { updateUser } from '../../support/user'

	export let user
	let msg = ''

	const preview = user.adjuntos || {}

	function toBase64(arr) {
		if (!arr || !arr.reduce) {
			return ""
		}

		return btoa(
				arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
		);
	}

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

		const { imageBuffer, imageName } = response[0]

		preview[fileName] = {
			imageName,
			imageBuffer: `data:image/png;base64,${toBase64(imageBuffer)}`
		}

		updateUser(user)
	}

	async function clickHandlerDelete() {
		const electron = require('electron')
		const mainProcess = electron.remote.require('./main.js');

		if (!electron || !electron.remote || !electron.remote.dialog) {
			return null
		}

		const { value: fileName } = this.attributes['data-file']

		await mainProcess.deleteUserFile(user.adjuntos[fileName].imageName)

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
	<button on:click={changeHandler} name="adj2">Seleccionar Archivo</button>
	{#if preview.adj2}
		<img src={preview.adj2.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj2">x</strong>
	{/if}
</p>

<h2>2. Fotografias del domicilio</h2>
<p>
	<span>a. Interior derecho</span>
	<button on:click={changeHandler} name="adj3">Seleccionar Archivo</button>
	{#if preview.adj3}
		<img src={preview.adj3.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj3">x</strong>
	{/if}
</p>
<p>
	<span>b. Interior izquierdo</span>
	<button on:click={changeHandler} name="adj4">Seleccionar Archivo</button>
	{#if preview.adj4}
		<img src={preview.adj4.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj4">x</strong>
	{/if}
</p>
<p>
	<span>c. Exterior derecho</span>
	<button on:click={changeHandler} name="adj5">Seleccionar Archivo</button>
	{#if preview.adj5}
		<img src={preview.adj5.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj5">x</strong>
	{/if}
</p>
<p>
	<span>d. Exterior izquierdo</span>
	<button on:click={changeHandler} name="adj6">Seleccionar Archivo</button>
	{#if preview.adj6}
		<img src={preview.adj6.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj6">x</strong>
	{/if}
</p>
<p>
	<span>e. Frente</span>
	<button on:click={changeHandler} name="adj9">Seleccionar Archivo</button>
	{#if preview.adj9}
		<img src={preview.adj9.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj9">x</strong>
	{/if}
</p>

<br />

<p>
	<span><b>3. Gestor Entrevistador</b></span>
	<button on:click={changeHandler} name="adj10">Seleccionar Archivo</button>
	{#if preview.adj10}
		<img src={preview.adj10.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj10">x</strong>
	{/if}
</p>
<p>
	<span><b>4. Croquis</b></span>
	<button on:click={changeHandler} name="adj13">Seleccionar Archivo</button>
	{#if preview.adj13}
		<img src={preview.adj13.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj13">x</strong>
	{/if}
</p>
<p>
	<span><b>5. Aviso Privacidad</b></span>
	<button on:click={changeHandler} name="adj11">Seleccionar Archivo</button>
	{#if preview.adj11}
		<img src={preview.adj11.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj11">x</strong>
	{/if}
</p>
<p>
	<span><b>6. Constancia</b></span>
	<button on:click={changeHandler} name="adj12">Seleccionar Archivo</button>
	{#if preview.adj12}
		<img src={preview.adj12.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj12">x</strong>
	{/if}
</p>

<h2>7. Fotografias de la Identificación</h2>
<p>
	<span>7.a Identificación con fotografia</span>
	<button on:click={changeHandler} name="adj14">Seleccionar Archivo</button>
	{#if preview.adj14}
		<img src={preview.adj14.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj14">x</strong>
	{/if}
</p>
<p>
	<span>7.b Identificación con fotografia</span>
	<button on:click={changeHandler} name="adj22">Seleccionar Archivo</button>
	{#if preview.adj22}
		<img src={preview.adj22.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj22">x</strong>
	{/if}
</p>
<p>
	<span>7.c Identificación con fotografia</span>
	<button on:click={changeHandler} name="adj23">Seleccionar Archivo</button>
	{#if preview.adj23}
		<img src={preview.adj23.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj23">x</strong>
	{/if}
</p>
<p>
	<span>7.d Identificación con fotografia</span>
	<button on:click={changeHandler} name="adj24">Seleccionar Archivo</button>
	{#if preview.adj24}
		<img src={preview.adj24.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj24">x</strong>
	{/if}
</p>

<br />

<p>
	<span><b>8. Acta de nacimiento</b></span>
	<button on:click={changeHandler} name="adj17">Seleccionar Archivo</button>
	{#if preview.adj17}
		<img src={preview.adj17.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj17">x</strong>
	{/if}
</p>
<p>
	<span><b>9. Comprobante de domicilio</b></span>
	<button on:click={changeHandler} name="adj16">Seleccionar Archivo</button>
	{#if preview.adj16}
		<img src={preview.adj16.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj16">x</strong>
	{/if}
</p>

<br>

<h2>10. Carta Laboral</h2>
<p>
	<span>a. Principal</span>
	<button on:click={changeHandler} name="adj18">Seleccionar Archivo</button>
	{#if preview.adj18}
		<img src={preview.adj18.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj18">x</strong>
	{/if}
</p>
<p>
	<span>b. Extra</span>
	<button on:click={changeHandler} name="adj37">Seleccionar Archivo</button>
	{#if preview.adj37}
		<img src={preview.adj37.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj37">x</strong>
	{/if}
</p>


<h2>11. Adicionales</h2>
<p>
	<span>Adicionales A</span>
	<button on:click={changeHandler} name="adj19">Seleccionar Archivo</button>
	{#if preview.adj19}
		<img src={preview.adj19.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj19">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales B</span>
	<button on:click={changeHandler} name="adj20">Seleccionar Archivo</button>
	{#if preview.adj20}
		<img src={preview.adj20.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj20">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales C</span>
	<button on:click={changeHandler} name="adj21">Seleccionar Archivo</button>
	{#if preview.adj21}
		<img src={preview.adj21.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj21">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales D</span>
	<button on:click={changeHandler} name="adj29">Seleccionar Archivo</button>
	{#if preview.adj29}
		<img src={preview.adj29.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj29">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales E</span>
	<button on:click={changeHandler} name="adj30">Seleccionar Archivo</button>
	{#if preview.adj30}
		<img src={preview.adj30.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj30">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales F</span>
	<button on:click={changeHandler} name="adj31">Seleccionar Archivo</button>
	{#if preview.adj31}
		<img src={preview.adj31.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj31">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales G</span>
	<button on:click={changeHandler} name="adj32">Seleccionar Archivo</button>
	{#if preview.adj32}
		<img src={preview.adj32.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj32">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales H</span>
	<button on:click={changeHandler} name="adj33">Seleccionar Archivo</button>
	{#if preview.adj33}
		<img src={preview.adj33.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj33">x</strong>
	{/if}
</p>
<p>
	<span>Adicionales I</span>
	<button on:click={changeHandler} name="adj34">Seleccionar Archivo</button>
	{#if preview.adj34}
		<img src={preview.adj34.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj34">x</strong>
	{/if}
</p>
<p>
	<span>Extra A</span>
	<button on:click={changeHandler} name="adj35">Seleccionar Archivo</button>
	{#if preview.adj35}
		<img src={preview.adj35.imageBuffer} alt="" />
		<strong on:click={clickHandlerDelete} data-file="adj35">x</strong>
	{/if}
</p>

<Alert msg={msg} />
