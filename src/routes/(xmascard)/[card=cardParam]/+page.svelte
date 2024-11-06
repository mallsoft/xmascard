<script>
	import Envelope from '$lib/components/Envelope.svelte';
	export let data;
</script>

<div class="container">
	<Envelope>
		<h1>{data.title}</h1>
		<p>{data.message}</p>
	</Envelope>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		text-align: center;
	}

	Envelope {
		max-width: 400px;
		padding: 200px;
	}
</style>
