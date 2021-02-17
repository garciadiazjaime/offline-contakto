<script>
	export let user

	$: user.info_economica_mensual.ingresos[5].monto = 0 
		+ parseFloat(user.info_economica_mensual.ingresos[0].monto || 0)
		+ parseFloat(user.info_economica_mensual.ingresos[1].monto || 0)
		+ parseFloat(user.info_economica_mensual.ingresos[2].monto || 0)
		+ parseFloat(user.info_economica_mensual.ingresos[3].monto || 0)
		+ parseFloat(user.info_economica_mensual.ingresos[4].monto || 0)
	
	$: user.info_economica_mensual.egresos[14].monto = 0
		+ parseFloat(user.info_economica_mensual.egresos[0].monto || 0)
		+ parseFloat(user.info_economica_mensual.egresos[1].monto || 0)
		+ parseFloat(user.info_economica_mensual.egresos[2].monto || 0)
		+ parseFloat(user.info_economica_mensual.egresos[3].monto || 0)
		+ parseFloat(user.info_economica_mensual.egresos[4].monto || 0)
		+ parseFloat(user.info_economica_mensual.egresos[5].monto || 0)
		+ parseFloat(user.info_economica_mensual.egresos[6].monto || 0)
		+ parseFloat(user.info_economica_mensual.egresos[7].monto || 0)
		+ parseFloat(user.info_economica_mensual.egresos[8].monto || 0)
		+ parseFloat(user.info_economica_mensual.egresos[9].monto || 0)
		+ parseFloat(user.info_economica_mensual.egresos[10].monto || 0)
		+ parseFloat(user.info_economica_mensual.egresos[11].monto || 0)
		+ parseFloat(user.info_economica_mensual.egresos[12].monto || 0)
		+ parseFloat(user.info_economica_mensual.egresos[13].monto || 0)

	function infonavitChange(event) {
		if (event.target.value === 'NO') {
			user.datos_generales.infonavit.numero = 'No aplica'
			user.datos_generales.infonavit.fecha_tramite = 'No aplica'
			user.datos_generales.infonavit.uso = 'No aplica'
			user.datos_generales.infonavit.motivo = 'No aplica'			
		} else {
			user.datos_generales.infonavit.numero = ''
			user.datos_generales.infonavit.fecha_tramite = ''
			user.datos_generales.infonavit.uso = ''
			user.datos_generales.infonavit.motivo = ''			
		}
	}

	function fonacotChange(event) {
		if (event.target.value === 'NO') {
			user.datos_generales.fonacot.numero = 'No aplica'
			user.datos_generales.fonacot.fecha_tramite = 'No aplica'
			user.datos_generales.fonacot.uso = 'No aplica'
		} else {
			user.datos_generales.fonacot.numero = ''
			user.datos_generales.fonacot.fecha_tramite = ''
			user.datos_generales.fonacot.uso = ''
		}
	}
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
	<input bind:value={user.datos_generales.dependientes_economicos} required>
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
			<!-- svelte-ignore a11y-no-onchange -->
			<select bind:value={user.datos_generales.infonavit.activo} on:change={infonavitChange} required>
				<option value="">Seleccionar</option>
				<option value="SI">Sí</option>
				<option value="NO">No</option>
			</select>
		</td>
		<td><input bind:value={user.datos_generales.infonavit.numero} required></td>
		<td><input bind:value={user.datos_generales.infonavit.fecha_tramite} required></td>
		<td><input bind:value={user.datos_generales.infonavit.uso} required></td>
		<td><input bind:value={user.datos_generales.infonavit.motivo} required></td>
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
			<!-- svelte-ignore a11y-no-onchange -->
			<select bind:value={user.datos_generales.fonacot.activo} on:change={fonacotChange} required>
				<option value="">Seleccionar</option>
				<option value="SI">Sí</option>
				<option value="NO">No</option>
			</select>
		</td>
		<td><input bind:value={user.datos_generales.fonacot.numero} required></td>
		<td><input bind:value={user.datos_generales.fonacot.fecha_tramite} required></td>
		<td><input bind:value={user.datos_generales.fonacot.uso} required></td>
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
		<td><input bind:value={user.info_economica_mensual.ingresos[0].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.ingresos[1].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.ingresos[2].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.ingresos[3].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.ingresos[4].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.ingresos[5].monto} placeholder="$m.n." readonly></td>
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
		<td><input bind:value={user.info_economica_mensual.egresos[0].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.egresos[1].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.egresos[2].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.egresos[3].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.egresos[4].monto} placeholder="$m.n." required></td>
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
		<td><input bind:value={user.info_economica_mensual.egresos[5].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.egresos[6].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.egresos[7].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.egresos[8].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.egresos[9].monto} placeholder="$m.n." required></td>
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
		<td><input bind:value={user.info_economica_mensual.egresos[10].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.egresos[11].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.egresos[12].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.egresos[13].monto} placeholder="$m.n." required></td>
		<td><input bind:value={user.info_economica_mensual.egresos[14].monto} placeholder="$m.n." readonly></td>
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
	{#each [0, 1] as index}
		<tr>
			<td>
				
					<input bind:value={user.situacion_economica.tarjetas_credito_comerciales[index].institucion} required={index === 0 ? true : false}>
				
			</td>
			<td><input bind:value={user.situacion_economica.tarjetas_credito_comerciales[index].limite_credito} placeholder="$m.n." required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.tarjetas_credito_comerciales[index].pago_minimo} placeholder="$m.n." required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.tarjetas_credito_comerciales[index].saldo_actual} placeholder="$m.n." required={index === 0 ? true : false}></td>
		</tr>
	{/each}
</table>

<h2>Cuentas de débito</h2>
<table>
	<tr>
		<th>Institución</th>
		<th>Saldo Mensual</th>
		<th>Antiguedad</th>
		<th>Ahorro</th>
	</tr>
	{#each [0, 1] as index}
		<tr>
			<td><input bind:value={user.situacion_economica.cuentas_debito[index].institucion} required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.cuentas_debito[index].saldo_mensual} placeholder="$m.n." required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.cuentas_debito[index].antiguedad} required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.cuentas_debito[index].ahorro} placeholder="$m.n." required={index === 0 ? true : false}></td>
		</tr>
	{/each}
</table>

<h2>Automóviles</h2>
<table>
	<tr>
		<th>Marca</th>
		<th>Modelo y Año</th>
		<th>Liquidad</th>
		<th>Valor Comercial (M.N.)</th>
	</tr>
	{#each [0, 1] as index}
		<tr>
			<td><input bind:value={user.situacion_economica.automoviles[index].marca} required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.automoviles[index].modelo_ano} required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.automoviles[index].liquidacion} required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.automoviles[index].valor_comercial} placeholder="$m.n." required={index === 0 ? true : false}></td>
		</tr>
	{/each}
</table>

<h2>Bienes Raíces</h2>
<table>
	<tr>
		<th>Tipo de inmueble</th>
		<th>Ubicación (dirección completa)</th>
		<th>Liquidado</th>
		<th>Valor Comercial (M.N.)</th>
	</tr>
	{#each [0, 1] as index}
		<tr>
			<td><input bind:value={user.situacion_economica.bienes_raices[index].tipo_inmueble} required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.bienes_raices[index].ubicacion} required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.bienes_raices[index].liquidacion} required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.bienes_raices[index].valor_comercial} placeholder="$m.n." required={index === 0 ? true : false}></td>
		</tr>
	{/each}
</table>

<h2>Seguros</h2>
<table>
	<tr>
		<th>Empresa</th>
		<th>Tipo de seguridad</th>
		<th>Forma de pago</th>
		<th>Vigencia</th>
	</tr>
	{#each [0, 1] as index}
		<tr>
			<td><input bind:value={user.situacion_economica.seguros[index].empresa} required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.seguros[index].tipo} required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.seguros[index].forma_pago} required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.seguros[index].vigencia} required={index === 0 ? true : false}></td>
		</tr>
	{/each}
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
	{#each [0, 1] as index}
		<tr>
			<td><input bind:value={user.situacion_economica.deudas_actuales[index].fecha_otorgamiento} required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.deudas_actuales[index].tipo} required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.deudas_actuales[index].institucion} required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.deudas_actuales[index].cantidad_total} placeholder="$m.n." required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.deudas_actuales[index].saldo_actual} placeholder="$m.n." required={index === 0 ? true : false}></td>
			<td><input bind:value={user.situacion_economica.deudas_actuales[index].pago_mensual} placeholder="$m.n." required={index === 0 ? true : false}></td>
		</tr>
	{/each}
</table>
