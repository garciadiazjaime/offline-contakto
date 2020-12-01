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

	table {
		width: 100%;
	}
</style>

<h1>Inf. Económica</h1>

<p>
	<span>Dependientes economicos</span>
	<input bind:value={user.economica.dependientes}>
</p>

<h2>Infonavit</h2>
<table>
	<tr>
		<th>Tiene crédito activo</th>
		<th>No. de crédito</th>
		<th>Fecha en que fue tramitado</th>
		<th>Uso</th>
		<th>Para qué se tramitó?</th>
	</tr>
	<tr>
		<td>
			<select bind:value={user.economica.infonavitTiene}>
				<option value=""></option>
				<option value="SI">Sí</option>
				<option value="NO">No</option>
			</select>
		</td>
		<td><input bind:value={user.economica.infonavitCredito}></td>
		<td><input bind:value={user.economica.infonavitFecha}></td>
		<td><input bind:value={user.economica.infonavitUso}></td>
		<td><input bind:value={user.economica.infonavitPara}></td>
	</tr>
</table>

<h2>Fonacot</h2>
<table>
	<tr>
		<th>Tiene crédito activo</th>
		<th>No. de crédito</th>
		<th>Fecha en que fue tramitado</th>
		<th>Uso</th>
	</tr>
	<tr>
		<td>
			<select bind:value={user.economica.fonacotTiene}>
				<option value=""></option>
				<option value="SI">Sí</option>
				<option value="NO">No</option>
			</select>
		</td>
		<td><input bind:value={user.economica.fonacotCredito}></td>
		<td><input bind:value={user.economica.fonacotFecha}></td>
		<td><input bind:value={user.economica.fonacotUso}></td>
	</tr>
</table>

<h2>Ingresos</h2>
<table>
	<tr>
		<th>Investigado</th>
		<th>Cónyuge</th>
		<th>Padres</th>
		<th>Hermanos</th>
		<th><input bind:value={user.economica.ingresoOtroParentesco} placeholder="Otro"></th>
		<th>Total</th>
	</tr>
	<tr>
		<td><input bind:value={user.economica.ingresoInvestigado}></td>
		<td><input bind:value={user.economica.ingresoConyuge}></td>
		<td><input bind:value={user.economica.ingresoPadres}></td>
		<td><input bind:value={user.economica.ingresoHermanos}></td>
		<td><input bind:value={user.economica.ingresoOtro}></td>
		<td><input bind:value={user.economica.ingresoTotal}></td>
	</tr>
</table>

<h2>Egresos</h2>
<table>
	<tr>
		<th>Impuestos</th>
		<th>Vestimenta</th>
		<th>Gastos automóvil</th>
		<th>Transporte publico</th>
		<th>Alimentación</th>
	</tr>
	<tr>
		<td><input bind:value={user.economica.egresoImpuestos}></td>
		<td><input bind:value={user.economica.egresoVestimenta}></td>
		<td><input bind:value={user.economica.egresoAuto}></td>
		<td><input bind:value={user.economica.egresoTransporte}></td>
		<td><input bind:value={user.economica.egresoAlimentacion}></td>
	</tr>

	<tr><td colspan="5"><br /></td></tr>

	<tr>
		<th>Educación</th>
		<th>Médico</th>
		<th>Diversos</th>
		<th>Servicios (Luz, Agua, Teléfono)</th>
		<th>Serv. doméstico</th>
	</tr>
	<tr>
		<td><input bind:value={user.economica.egresoEducacion}></td>
		<td><input bind:value={user.economica.egresoMedico}></td>
		<td><input bind:value={user.economica.egresoDiversos}></td>
		<td><input bind:value={user.economica.egresoServicios}></td>
		<td><input bind:value={user.economica.egresoDomestico}></td>
	</tr>

	<tr><td colspan="5"><br /></td></tr>

	<tr>
		<th>Seguros</th>
		<th><input bind:value={user.economica.egresoOtro1Valor} placeholder="Otro"></th>
		<th><input bind:value={user.economica.egresoOtro2Valor} placeholder="Otro"></th>
		<th><input bind:value={user.economica.egresoOtro3Valor} placeholder="Otro"></th>
		<th>Total</th>
	</tr>
	<tr>
		<td><input bind:value={user.economica.egresoSeguros}></td>
		<td><input bind:value={user.economica.egresoOtro1}></td>
		<td><input bind:value={user.economica.egresoOtro2}></td>
		<td><input bind:value={user.economica.egresoOtro3}></td>
		<td><input bind:value={user.economica.egresoTotal}></td>
	</tr>
</table>

<h2>Tarjetas de Crédito</h2>
<table>
	<tr>
		<th>Institución</th>
		<th>Crédito</th>
		<th>Pago Mínimo</th>
		<th>Saldo Actual</th>
	</tr>
	<tr>
		<td><input bind:value={user.economica.credito1Institucion}></td>
		<td><input bind:value={user.economica.credito1}></td>
		<td><input bind:value={user.economica.credito1Pago}></td>
		<td><input bind:value={user.economica.credito1Saldo}></td>
	</tr>
	<tr>
		<td><input bind:value={user.economica.credito2Institucion}></td>
		<td><input bind:value={user.economica.credito2}></td>
		<td><input bind:value={user.economica.credito2Pago}></td>
		<td><input bind:value={user.economica.credito2Saldo}></td>
	</tr>
</table>

<h2>Cuentas de débito</h2>
<table>
	<tr>
		<th>Institución</th>
		<th>Saldo Mensual</th>
		<th>Antiguedad</th>
		<th>Ahorro</th>
	</tr>
	<tr>
		<td><input bind:value={user.economica.debito1Institucion}></td>
		<td><input bind:value={user.economica.debito1Saldo}></td>
		<td><input bind:value={user.economica.debito1Antiguedad}></td>
		<td><input bind:value={user.economica.debito1Ahorro}></td>
	</tr>
	<tr>
		<td><input bind:value={user.economica.debito2Institucion}></td>
		<td><input bind:value={user.economica.debito2Saldo}></td>
		<td><input bind:value={user.economica.debito2Antiguedad}></td>
		<td><input bind:value={user.economica.debito2Ahorro}></td>
	</tr>
</table>

<h2>Automóviles</h2>
<table>
	<tr>
		<th>Marca</th>
		<th>Modelo y Año</th>
		<th>Liquidad</th>
		<th>Valor Comercial (M.N.)</th>
	</tr>
	<tr>
		<td><input bind:value={user.economica.auto1Marco}></td>
		<td><input bind:value={user.economica.auto1Modelo}></td>
		<td><input bind:value={user.economica.auto1Liquidad}></td>
		<td><input bind:value={user.economica.auto1Valor}></td>
	</tr>
	<tr>
		<td><input bind:value={user.economica.auto2Marco}></td>
		<td><input bind:value={user.economica.auto2Modelo}></td>
		<td><input bind:value={user.economica.auto2Liquidad}></td>
		<td><input bind:value={user.economica.auto2Valor}></td>
	</tr>
</table>

<h2>Bienes Raíces</h2>
<table>
	<tr>
		<th>Tipo de inmueble</th>
		<th>Ubicación (dirección completa)</th>
		<th>Liquidado</th>
		<th>Valor Comercial (M.N.)</th>
	</tr>
	<tr>
		<td><input bind:value={user.economica.bienes1Tipo}></td>
		<td><input bind:value={user.economica.bienes1Ubicacion}></td>
		<td><input bind:value={user.economica.bienes1Liquidado}></td>
		<td><input bind:value={user.economica.bienes1Valor}></td>
	</tr>
	<tr>
		<td><input bind:value={user.economica.bienes2Tipo}></td>
		<td><input bind:value={user.economica.bienes2Ubicacion}></td>
		<td><input bind:value={user.economica.bienes2Liquidado}></td>
		<td><input bind:value={user.economica.bienes2Valor}></td>
	</tr>
</table>

<h2>Seguros</h2>
<table>
	<tr>
		<th>Empresa</th>
		<th>Tipo de seguridad</th>
		<th>Forma de pago</th>
		<th>Vigencia</th>
	</tr>
	<tr>
		<td><input bind:value={user.economica.seguro1Empresa}></td>
		<td><input bind:value={user.economica.seguro1Tipo}></td>
		<td><input bind:value={user.economica.seguro1Forma}></td>
		<td><input bind:value={user.economica.seguro1Vigencia}></td>
	</tr>
	<tr>
		<td><input bind:value={user.economica.seguro2Empresa}></td>
		<td><input bind:value={user.economica.seguro2Tipo}></td>
		<td><input bind:value={user.economica.seguro2Forma}></td>
		<td><input bind:value={user.economica.seguro2Vigencia}></td>
	</tr>
</table>

<h2>Deudas actuales</h2>
<table>
	<tr>
		<th>Fecha otorgamiento</th>
		<th>Tipo</th>
		<th>Insitución</th>
		<th>Cantidad total</th>
		<th>Saldo actual</th>
		<th>Pago mensual</th>
	</tr>
	<tr>
		<td><input bind:value={user.economica.deuda1Fecha}></td>
		<td><input bind:value={user.economica.deuda1Tipo}></td>
		<td><input bind:value={user.economica.deuda1Institucion}></td>
		<td><input bind:value={user.economica.deuda1Cantidad}></td>
		<td><input bind:value={user.economica.deuda1Saldo}></td>
		<td><input bind:value={user.economica.deuda1Pago}></td>
	</tr>
	<tr>
		<td><input bind:value={user.economica.deuda2Fecha}></td>
		<td><input bind:value={user.economica.deuda2Tipo}></td>
		<td><input bind:value={user.economica.deuda2Institucion}></td>
		<td><input bind:value={user.economica.deuda2Cantidad}></td>
		<td><input bind:value={user.economica.deuda2Saldo}></td>
		<td><input bind:value={user.economica.deuda2Pago}></td>
	</tr>
</table>
