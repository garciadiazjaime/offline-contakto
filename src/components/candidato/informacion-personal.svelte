<script>
	export let user
</script>

<style>
	span {
		display: block;
	}
	input, select {
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
</style>


<h1>Inf. Personal</h1>

<p>
	<span>Demandas Laborales y/o Antecedentes Penales</span>
	<input bind:value={user.info_personal.antecedentes_penales}>
</p>
<p>
	<span>Cuenta con algún tatuaje o arete:(Cuantos y en que parte del cuerpo)</span>
	<input bind:value={user.info_personal.tatuajes}>
</p>

<h2>Historial en empresa</h2>
<p>
	<span><h3>Ha trabajado anteriormente en la empresa</h3></span>
	<select bind:value={user.info_personal.trabajo_anterior_en_empresa.tiene}>
		<option value=""></option>
		<option value="SI">Sí</option>
		<option value="NO">No</option>
	</select>
</p>
<p>
	<span>Puesto</span>
	<input bind:value={user.info_personal.trabajo_anterior_en_empresa.puesto}>
</p>
<p>
	<span>Periodo</span>
	<input bind:value={user.info_personal.trabajo_anterior_en_empresa.periodo}>
</p>
<p>
	<span>Sucursal</span>
	<input bind:value={user.info_personal.trabajo_anterior_en_empresa.sucursal}>
</p>
<p>
	<span>Motivo de Salida</span>
	<input bind:value={user.info_personal.trabajo_anterior_en_empresa.motivo_salida}>
</p>

<p>
	<span><h3>Tiene algún familiar trabajando en la empresa</h3></span>
	<select bind:value={user.info_personal.familiar_en_empresa.tiene}>
		<option value=""></option>
		<option value="SI">Sí</option>
		<option value="NO">No</option>
	</select>
</p>

<p>
	<span>Puesto</span>
	<input bind:value={user.info_personal.familiar_en_empresa.puesto}>
</p>
<p>
	<span>Nombre</span>
	<input bind:value={user.info_personal.familiar_en_empresa.nombre}>
</p>
<p>
	<span>Sucursal</span>
	<input bind:value={user.info_personal.familiar_en_empresa.sucursal}>
</p>
<p>
	<span>Parentesco</span>
	<input bind:value={user.info_personal.familiar_en_empresa.parentesco}>
</p>
