<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		id = 'pop',
		buttonText,
		children
	}: { id: string; buttonText?: string; children: Snippet } = $props();
</script>

<div popover="auto" {id}>
	{@render children()}
</div>

<button popovertarget={id}>{buttonText ?? 'Open Popover'}</button>

<style>
	button {
		max-width: max-content;
		padding: 0.5rem 1rem;
	}
	div {
		padding: 3rem;
		border: none;
		border-radius: 0.25rem;
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(5px);
	}
</style>
