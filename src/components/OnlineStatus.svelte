<script>
  import { onMount } from 'svelte';

  let onlineStatus = 'Offline ❌';

  const alertOnlineStatus = () => {
    onlineStatus = navigator.onLine ? 'Online ✅' : 'Offline ❌'
    window.alert(onlineStatus)
  }

  onMount(async () => {
    window.addEventListener('online', alertOnlineStatus)
    window.addEventListener('offline', alertOnlineStatus)

    alertOnlineStatus()
  });

  function clickHandlerCheckOnlineStatus () {
    console.log('clickHandlerCheckOnlineStatus');
    alertOnlineStatus();
  }
</script>

<style>
  button {
    float: right;
    margin-right: 1.5rem;
  }
</style>

<button on:click={clickHandlerCheckOnlineStatus}>
  Click to check (Current status: { onlineStatus })
</button>
