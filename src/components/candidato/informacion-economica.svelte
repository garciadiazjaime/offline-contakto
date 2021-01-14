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
	<input bind:value={user.datos_generales.dependientes_economicos}>
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
			<select bind:value={user.datos_generales.infonavit.activo}>
				<option value=""></option>
				<option value="SI">Sí</option>
				<option value="NO">No</option>
			</select>
		</td>
		<td><input bind:value={user.datos_generales.infonavit.numero}></td>
		<td><input bind:value={user.datos_generales.infonavit.fecha_tramite}></td>
		<td><input bind:value={user.datos_generales.infonavit.uso}></td>
		<td><input bind:value={user.datos_generales.infonavit.motivo}></td>
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
			<select bind:value={user.datos_generales.fonacot.activo}>
				<option value=""></option>
				<option value="SI">Sí</option>
				<option value="NO">No</option>
			</select>
		</td>
		<td><input bind:value={user.datos_generales.fonacot.numero}></td>
		<td><input bind:value={user.datos_generales.fonacot.fecha_tramite}></td>
		<td><input bind:value={user.datos_generales.fonacot.uso}></td>
	</tr>
</table>

<h2>Ingresos</h2>
<table>
	<tr>
		<th>Investigado</th>
		<th>Cónyuge</th>
		<th>Padres</th>
		<th>Hermanos</th>
		<th><input bind:value={user.info_economica_mensual.ingresos[4].concepto} placeholder="Otro"></th>
		<th>Total</th>
	</tr>
	<tr>
		<td><input bind:value={user.info_economica_mensual.ingresos[0].monto}></td>
		<td><input bind:value={user.info_economica_mensual.ingresos[1].monto}></td>
		<td><input bind:value={user.info_economica_mensual.ingresos[2].monto}></td>
		<td><input bind:value={user.info_economica_mensual.ingresos[3].monto}></td>
		<td><input bind:value={user.info_economica_mensual.ingresos[4].monto}></td>
		<td><input bind:value={user.info_economica_mensual.ingresos[5].monto}></td>
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
		<td><input bind:value={user.info_economica_mensual.egresos[0].monto}></td>
		<td><input bind:value={user.info_economica_mensual.egresos[1].monto}></td>
		<td><input bind:value={user.info_economica_mensual.egresos[2].monto}></td>
		<td><input bind:value={user.info_economica_mensual.egresos[3].monto}></td>
		<td><input bind:value={user.info_economica_mensual.egresos[4].monto}></td>
	</tr>

	<tr><td colspan="5"><br /></td></tr>

	<tr>
		<th>Educación</th>
		<th>Médico</th>
		<th>Diversión</th>
		<th>Servicios (Luz, Agua, Teléfono)</th>
		<th>Serv. doméstico</th>
	</tr>
	<tr>
		<td><input bind:value={user.info_economica_mensual.egresos[5].monto}></td>
		<td><input bind:value={user.info_economica_mensual.egresos[6].monto}></td>
		<td><input bind:value={user.info_economica_mensual.egresos[7].monto}></td>
		<td><input bind:value={user.info_economica_mensual.egresos[8].monto}></td>
		<td><input bind:value={user.info_economica_mensual.egresos[9].monto}></td>
	</tr>

	<tr><td colspan="5"><br /></td></tr>

	<tr>
		<th>Seguros</th>
		<th><input bind:value={user.info_economica_mensual.egresos[11].concepto}></th>
		<th><input bind:value={user.info_economica_mensual.egresos[12].concepto}></th>
		<th><input bind:value={user.info_economica_mensual.egresos[13].concepto}></th>
		<th>Total</th>
	</tr>
	<tr>
		<td><input bind:value={user.info_economica_mensual.egresos[10].monto}></td>
		<td><input bind:value={user.info_economica_mensual.egresos[11].monto}></td>
		<td><input bind:value={user.info_economica_mensual.egresos[12].monto}></td>
		<td><input bind:value={user.info_economica_mensual.egresos[13].monto}></td>
		<td><input bind:value={user.info_economica_mensual.egresos[14].monto}></td>
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
		<td><input bind:value={user.situacion_economica.tarjetas_credito_comerciales[0].institucion}></td>
		<td><input bind:value={user.situacion_economica.tarjetas_credito_comerciales[0].limite_credito}></td>
		<td><input bind:value={user.situacion_economica.tarjetas_credito_comerciales[0].pago_minimo}></td>
		<td><input bind:value={user.situacion_economica.tarjetas_credito_comerciales[0].saldo_actual}></td>
	</tr>
	<tr>
		<td><input bind:value={user.situacion_economica.tarjetas_credito_comerciales[1].institucion}></td>
		<td><input bind:value={user.situacion_economica.tarjetas_credito_comerciales[1].limite_credito}></td>
		<td><input bind:value={user.situacion_economica.tarjetas_credito_comerciales[1].pago_minimo}></td>
		<td><input bind:value={user.situacion_economica.tarjetas_credito_comerciales[1].saldo_actual}></td>
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
		<td><input bind:value={user.situacion_economica.cuentas_debito[0].institucion}></td>
		<td><input bind:value={user.situacion_economica.cuentas_debito[0].saldo_mensual}></td>
		<td><input bind:value={user.situacion_economica.cuentas_debito[0].antiguedad}></td>
		<td><input bind:value={user.situacion_economica.cuentas_debito[0].ahorro}></td>
	</tr>
	<tr>
		<td><input bind:value={user.situacion_economica.cuentas_debito[1].institucion}></td>
		<td><input bind:value={user.situacion_economica.cuentas_debito[1].saldo_mensual}></td>
		<td><input bind:value={user.situacion_economica.cuentas_debito[1].antiguedad}></td>
		<td><input bind:value={user.situacion_economica.cuentas_debito[1].ahorro}></td>
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
		<td><input bind:value={user.situacion_economica.automoviles[0].marca}></td>
		<td><input bind:value={user.situacion_economica.automoviles[0].modelo_ano}></td>
		<td><input bind:value={user.situacion_economica.automoviles[0].liquidacion}></td>
		<td><input bind:value={user.situacion_economica.automoviles[0].valor_comercial}></td>
	</tr>
	<tr>
		<td><input bind:value={user.situacion_economica.automoviles[1].marca}></td>
		<td><input bind:value={user.situacion_economica.automoviles[1].modelo_ano}></td>
		<td><input bind:value={user.situacion_economica.automoviles[1].liquidacion}></td>
		<td><input bind:value={user.situacion_economica.automoviles[1].valor_comercial}></td>
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
		<td><input bind:value={user.situacion_economica.bienes_raices[0].tipo_inmueble}></td>
		<td><input bind:value={user.situacion_economica.bienes_raices[0].ubicacion}></td>
		<td><input bind:value={user.situacion_economica.bienes_raices[0].liquidacion}></td>
		<td><input bind:value={user.situacion_economica.bienes_raices[0].valor_comercial}></td>
	</tr>
	<tr>
		<td><input bind:value={user.situacion_economica.bienes_raices[1].tipo_inmueble}></td>
		<td><input bind:value={user.situacion_economica.bienes_raices[1].ubicacion}></td>
		<td><input bind:value={user.situacion_economica.bienes_raices[1].liquidacion}></td>
		<td><input bind:value={user.situacion_economica.bienes_raices[1].valor_comercial}></td>
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
		<td><input bind:value={user.situacion_economica.seguros[0].empresa}></td>
		<td><input bind:value={user.situacion_economica.seguros[0].tipo}></td>
		<td><input bind:value={user.situacion_economica.seguros[0].forma_pago}></td>
		<td><input bind:value={user.situacion_economica.seguros[0].vigencia}></td>
	</tr>
	<tr>
		<td><input bind:value={user.situacion_economica.seguros[1].empresa}></td>
		<td><input bind:value={user.situacion_economica.seguros[1].tipo}></td>
		<td><input bind:value={user.situacion_economica.seguros[1].forma_pago}></td>
		<td><input bind:value={user.situacion_economica.seguros[1].vigencia}></td>
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
		<td><input bind:value={user.situacion_economica.deudas_actuales[0].fecha_otorgamiento}></td>
		<td><input bind:value={user.situacion_economica.deudas_actuales[0].tipo}></td>
		<td><input bind:value={user.situacion_economica.deudas_actuales[0].institucion}></td>
		<td><input bind:value={user.situacion_economica.deudas_actuales[0].cantidad_total}></td>
		<td><input bind:value={user.situacion_economica.deudas_actuales[0].saldo_actual}></td>
		<td><input bind:value={user.situacion_economica.deudas_actuales[0].pago_mensual}></td>
	</tr>
	<tr>
		<td><input bind:value={user.situacion_economica.deudas_actuales[1].fecha_otorgamiento}></td>
		<td><input bind:value={user.situacion_economica.deudas_actuales[1].tipo}></td>
		<td><input bind:value={user.situacion_economica.deudas_actuales[1].institucion}></td>
		<td><input bind:value={user.situacion_economica.deudas_actuales[1].cantidad_total}></td>
		<td><input bind:value={user.situacion_economica.deudas_actuales[1].saldo_actual}></td>
		<td><input bind:value={user.situacion_economica.deudas_actuales[1].pago_mensual}></td>
	</tr>
</table>
