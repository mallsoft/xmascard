<script>
	import '../global.css';
	import DevDataStoreView from '$lib/components/DevDataStoreView.svelte';
	import Snow from '$lib/components/snow/Snow.svelte';

	let { children } = $props();
</script>

<DevDataStoreView />

<Snow />
<Snow zIndex={1} flakeCount={30} flakeMin={4} flakeMax={8} />

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
