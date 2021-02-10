<script>
	export let user
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
</style>

<h1>Referencia</h1>

{#each [0, 1, 2] as index}
	<h2>Referencia {user.referencias[index].tipo}</h2>
	<p>
		<span>Nombre</span>
		<input bind:value={user.referencias[index].nombre} required={index === 2 ? false : true}>
	</p>
	<p>
		<span>Domicilio</span>
		<input bind:value={user.referencias[index].domicilio} required={index === 2 ? false : true}>
	</p>
	<p>
		<span>Teléfono</span>
		<input bind:value={user.referencias[index].telefono} required={index === 2 ? false : true}>
	</p>
	<p>
		<span>Tiempo de conocerlo</span>
		<input bind:value={user.referencias[index].tiempo_conocido} required={index === 2 ? false : true}>
	</p>
	<p>
		<span>Parentesco</span>
		<input bind:value={user.referencias[index].parentesco} required={index === 2 ? false : true}>
	</p>
	<p>
		<span>Ocupación (en caso de empleado, obligatorio especificar)</span>
		<input bind:value={user.referencias[index].ocupacion} required={index === 2 ? false : true}>
	</p>
	<p>
		<span>¿Cómo conoció al evaluado?</span>
		<input bind:value={user.referencias[index].lugares_labor_evaluado} required={index === 2 ? false : true}>
	</p>
	<p>
		<span>Opinión sobre el candidato (visible en pdf)</span>
		<input bind:value={user.referencias[index].opinion} required={index === 2 ? false : true}>
	</p>
{/each}
