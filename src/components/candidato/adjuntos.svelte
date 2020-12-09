<script>
	export let user
	const preview = {}
	const validExtensions = /jpeg|jpg|gif|bmp|png/i

	function changeHandler() {
		const input = this

		if (input.files && input.files[0]) {
			
			if (!validExtensions.test(input.files[0].type)) {
				return alert('Error: Este archivo no es una imagen.')
			}

			const { value: fileName } = this.attributes.name
			const reader = new FileReader();
			
			reader.onload = (e) => {
				preview[fileName] = e.target.result
			}
			
			reader.readAsDataURL(input.files[0]);
		}
	}
</script>


<style>
	span {
		display: block;
	}
	input {
		height: 32px;
		font-size: 26px;
		width: 100%;
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

	img {
		width: 100px;
		height: auto;
	}
</style>

<h1>Adjuntos</h1>

<p>
	<span><b>1. Foto de perfil del candidato</b></span>
	<input type="file" on:change={changeHandler} name="file1">
	<img src={preview.file1} alt="" />
</p>

<h2>2. Fotografias del domicilio</h2>
<p>
	<span>a. Interior derecho</span>
	<input type="file" on:change={changeHandler} name="file2">
	<img src={preview.file2} alt="" />
</p>
<p>
	<span>b. Interior izquierdo</span>
	<input type="file" on:change={changeHandler} name="file3">
	<img src={preview.file3} alt="" />
</p>
<p>
	<span>c. Exterior derecho</span>
	<input type="file" on:change={changeHandler} name="file4">
	<img src={preview.file4} alt="" />
</p>
<p>
	<span>d. Exterior izquierdo</span>
	<input type="file" on:change={changeHandler} name="file5">
	<img src={preview.file5} alt="" />
</p>
<p>
	<span>e. Frente</span>
	<input type="file" on:change={changeHandler} name="file6">
	<img src={preview.file6} alt="" />
</p>

<br />

<p>
	<span><b>3. Gestor Entrevistador</b></span>
	<input type="file" on:change={changeHandler} name="file7">
	<img src={preview.file7} alt="" />
</p>
<p>
	<span><b>4. Croquis</b></span>
	<input type="file" on:change={changeHandler} name="file8">
	<img src={preview.file8} alt="" />
</p>
<p>
	<span><b>5. Aviso Privacidad</b></span>
	<input type="file" on:change={changeHandler} name="file9">
	<img src={preview.file9} alt="" />
</p>
<p>
	<span><b>6. Constancia</b></span>
	<input type="file" on:change={changeHandler} name="file10">
	<img src={preview.file10} alt="" />
</p>

<h2>7. Fotografias de la Identificación</h2>
<p>
	<span>7.a Identificación con fotografia</span>
	<input type="file" on:change={changeHandler} name="file11">
	<img src={preview.file11} alt="" />
</p>
<p>
	<span>7.b Identificación con fotografia</span>
	<input type="file" on:change={changeHandler} name="file12">
	<img src={preview.file12} alt="" />
</p>
<p>
	<span>7.c Identificación con fotografia</span>
	<input type="file" on:change={changeHandler} name="file13">
	<img src={preview.file13} alt="" />
</p>
<p>
	<span>7.d Identificación con fotografia</span>
	<input type="file" on:change={changeHandler} name="file14">
	<img src={preview.file14} alt="" />
</p>

<br />

<p>
	<span><b>8. Acta de nacimiento</b></span>
	<input type="file" on:change={changeHandler} name="file15">
	<img src={preview.file15} alt="" />
</p>
<p>
	<span><b>9. Comprobante de domicilio</b></span>
	<input type="file" on:change={changeHandler} name="file16">
	<img src={preview.file16} alt="" />
</p>

<br>

<h2>10. Semanas Cotizadas</h2>
<p>
	<span>10.a Semanas Cotizadas</span>
	<input type="file" on:change={changeHandler} name="file17">
	<img src={preview.file17} alt="" />
</p>
<p>
	<span>10.b Semanas Cotizadas</span>
	<input type="file" on:change={changeHandler} name="file18">
	<img src={preview.file18} alt="" />
</p>
<p>
	<span>10.c Semanas Cotizadas</span>
	<input type="file" on:change={changeHandler} name="file19">
	<img src={preview.file19} alt="" />
</p>
<p>
	<span>10.d Semanas Cotizadas</span>
	<input type="file" on:change={changeHandler} name="file20">
	<img src={preview.file20} alt="" />
</p>
<p>
	<span>10.e Semanas Cotizadas</span>
	<input type="file" on:change={changeHandler} name="file21">
	<img src={preview.file21} alt="" />
</p>


<h2>11. Carta Laboral</h2>
<p>
	<span>a. Principal</span>
	<input type="file" on:change={changeHandler} name="file22">
	<img src={preview.file22} alt="" />
</p>
<p>
	<span>b. Extra</span>
	<input type="file" on:change={changeHandler} name="file23">
	<img src={preview.file23} alt="" />
</p>


<h2>12. Adicionales</h2>
<p>
	<span>Adicionales 1</span>
	<input type="file" on:change={changeHandler} name="file24">
	<img src={preview.file24} alt="" />
</p>
<p>
	<span>Adicionales 2</span>
	<input type="file" on:change={changeHandler} name="file25">
	<img src={preview.file25} alt="" />
</p>
<p>
	<span>Adicionales 3</span>
	<input type="file" on:change={changeHandler} name="file26">
	<img src={preview.file26} alt="" />
</p>
<p>
	<span>Adicionales 4</span>
	<input type="file" on:change={changeHandler} name="file27">
	<img src={preview.file27} alt="" />
</p>
<p>
	<span>Adicionales 5</span>
	<input type="file" on:change={changeHandler} name="file28">
	<img src={preview.file28} alt="" />
</p>
<p>
	<span>Adicionales 6</span>
	<input type="file" on:change={changeHandler} name="file29">
	<img src={preview.file29} alt="" />
</p>
<p>
	<span>Adicionales 7</span>
	<input type="file" on:change={changeHandler} name="file30">
	<img src={preview.file30} alt="" />
</p>
<p>
	<span>Adicionales 8</span>
	<input type="file" on:change={changeHandler} name="file31">
	<img src={preview.file31} alt="" />
</p>
<p>
	<span>Adicionales 9</span>
	<input type="file" on:change={changeHandler} name="file32">
	<img src={preview.file32} alt="" />
</p>
<p>
	<span>Adicionales 10</span>
	<input type="file" on:change={changeHandler} name="file33">
	<img src={preview.file33} alt="" />
</p>
<p>
	<span>Adicionales 11</span>
	<input type="file" on:change={changeHandler} name="file34">
	<img src={preview.file34} alt="" />
</p>
<p>
	<span>Adicionales 12</span>
	<input type="file" on:change={changeHandler} name="file35">
	<img src={preview.file35} alt="" />
</p>


<p>
	<span>Extra A (Cualquier formato)</span>
	<input type="file" on:change={changeHandler} name="file36">
	<img src={preview.file36} alt="" />
</p>
