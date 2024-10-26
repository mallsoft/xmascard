<script>
	import { page } from '$app/stores';
	import Popover from '$lib/components/Popover.svelte';
	import Qrcode from '$lib/components/Qrcode.svelte';

	let { key } = $props();
</script>

<Popover buttonText="show qr code" id="qrview">
	<Qrcode content={`${$page.url.protocol}//${$page.url.host}/${key}`} />
</Popover>
