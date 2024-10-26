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
