<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Popover from '$lib/components/Popover.svelte';
	import Qrcode from '$lib/components/Qrcode.svelte';

	export let data;
	// export let form;

	const editMode = Boolean(data.key);
</script>

<article>
	{#if editMode}
		<h1>Sprinkle some more x-mas spirit on dat!</h1>
		<Popover buttonText="show qr code" id="qrview">
			<Qrcode
				content={`${$page.url.protocol}//${$page.url.host}/${data.key}`}
			/>
		</Popover>
	{:else}
		<h1>Create a new xmas card!</h1>
	{/if}
	<form
		use:enhance
		action="?/{editMode ? 'editcard' : 'createcard'}"
		method="POST"
	>
		<label for="title">Title</label>
		<input type="text" name="title" required value={data.title} />
		<label for="message">Message</label>
		<textarea name="message" rows="5" maxlength="400">{data.message}</textarea>
		<button type="submit">{editMode ? 'Update' : 'Create!'}</button>
	</form>
</article>

<style>
	article {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.5rem;
	}

	textarea {
		resize: none;
	}
</style>
