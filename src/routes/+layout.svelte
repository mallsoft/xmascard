<script>
	import '../global.css';
	import DevDataStoreView from '$lib/components/DevDataStoreView.svelte';
	import Snow from '$lib/components/snow/Snow.svelte';

	let { children } = $props();
</script>

<DevDataStoreView />

<Snow />

<main>
	{@render children?.()}
</main>

<style>
	main {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
