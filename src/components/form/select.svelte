<script>
  export let handler
  export let name
  export let required
  export let value
  export let type = "text"

  const values = {
    text: ["SI", "NO"],
    num: ["1", "2"],
  }
</script>

<style>
	select {
		height: 38px;
    font-size: 26px;
		width: 100%;
	}
</style>

<!-- svelte-ignore a11y-no-onchange -->
<select on:change={handler} name={name} required={required} value={value}>
  <option value="">Seleccionar</option>
  <option value={values[type][0]}>Sí</option>
  <option value={values[type][1]}>No</option>
</select>	
