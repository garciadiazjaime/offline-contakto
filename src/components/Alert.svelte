<script>
	import { subscribe } from '../support/events'

	let alertMsg = ''
	let alertType = ''
	let timeout = null

	subscribe('UPDATE_MSG', ({ msg, type = 'error' }) => {
		alertMsg = msg
		alertType = type

		clearTimeout(timeout);

		timeout = setTimeout(() => {
			alertMsg = ''
			alertType = ''
		}, 7000);

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

	.error {
		color: #dc2b2b;
		font-weight: bold;
	}
</style>

{#if alertMsg}
	<div class="alert {alertType}">{alertMsg}</div>
{/if}
