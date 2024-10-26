<script>
	import { page } from '$app/stores';
	import { dev } from '$app/environment';
</script>

{#if dev}
	<pre>
{JSON.stringify($page.data, null, 2)}
{JSON.stringify($page.form, null, 2)}
{JSON.stringify($page.error, null, 2)}
</pre>
{/if}

<style>
	pre {
		top: 0;
		right: 0;
		position: fixed;
		background: rgba(0, 0, 0, 0.4);
		border: 2px solid rgba(0, 0, 0, 0.125);
		backdrop-filter: blur(10px);
		color: whitesmoke;
		border-radius: 6px;
		max-width: 400px;
		white-space: pre-wrap;
		z-index: 99;
		font-size: small;
		margin: 1em;
		padding: 1em;
	}
</style>
