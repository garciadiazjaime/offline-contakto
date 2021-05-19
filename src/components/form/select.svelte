<script>
  export let handler
  export let name
  export let required
</script>

<style>
	select {
		height: 38px;
    font-size: 26px;
		width: 100%;
	}
</style>

<!-- svelte-ignore a11y-no-onchange -->
<select on:change={handler} name={name} required={required}>
  <option value="">Seleccionar</option>
  <option value="SI">Sí</option>
  <option value="NO">No</option>
</select>	
