<script>
	import { subscribe } from '../support/events'

	let alert = ''

	subscribe('UPDATE_MSG', msg => {
		alert = msg

		setTimeout(() => {
			alert = ''
		}, 3000);

	})
</script>
<style>
  .alert {
		position: fixed;
		text-align: center;
		top: 0;
		left: 0;
		background-color: white;
		color: #428bca;
		padding: 12px;
		margin: 0 auto;
		font-size: 20px;
		z-index: 1;
		width: 100%;
	}
</style>

{#if alert}
	<div class="alert">{alert}</div>
{/if}
