<script>
	import '../global.css';
	import Snowfall from '$lib/components/snow/Snowfall.svelte';
	import Tree from '$lib/components/Tree.svelte';
	import Music from '$lib/components/Music.svelte';

	let { children } = $props();
</script>

<Snowfall />
<Tree />
<!-- <Music />  -->

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
