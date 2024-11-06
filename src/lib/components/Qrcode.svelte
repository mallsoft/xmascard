<script lang="ts">
	import { toCanvas } from 'qrcode';

	type HexColor = `#${string}`;

	let {
		content = '',
		scale = 4,
		color_dark = '#000000',
		color_light = '#ffffff'
	}: {
		content: string;
		scale?: number;
		color_dark?: HexColor;
		color_light?: HexColor;
	} = $props();

	let _canvas: HTMLCanvasElement | undefined = $state();
	let _qrError: Error | null | undefined = $state();

	$effect(() => {
		if (!_canvas) return;
		toCanvas(
			_canvas,
			content || '?',
			{
				scale,
				margin: 4,
				color: {
					dark: color_dark,
					light: color_light
				}
			},
			(err) => {
				_qrError = err;
			}
		);
	});
</script>

{#if _qrError}
	<pre>qrcode error: {_qrError.message}</pre>
{:else}
	<canvas bind:this={_canvas}></canvas>
	<p>Your 🎄 card: <a href="{content}" target="_blank">{content}</a> 🤩</p>
{/if}

<style>
	canvas {
		border-radius: 4px;
		display: block;
		margin: 0 auto;
	}
	p {
		color: white;
		font-size: large;
	}
</style>
