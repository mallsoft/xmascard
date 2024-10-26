<script>
	import { page } from '$app/stores';
	import { dev } from '$app/environment';
</script>

{#if dev}
	<pre>
{JSON.stringify($page.data, null, 2)}
{#if $page.form}
			Form:{JSON.stringify($page.form, null, 2)}
		{/if}
{#if $page.error}
			Error:{JSON.stringify($page.error, null, 2)}
		{/if}
</pre>
{/if}

<style>
	pre {
		top: 0;
		right: 0;
		position: fixed;
		border: 2px solid rgba(0, 0, 0, 0.125);
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(5px);
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
