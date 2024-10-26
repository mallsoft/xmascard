<script lang="ts">
	import { onMount } from 'svelte';
	import { SnowFlake } from './snow';

	let innerWidth: number = $state(0);
	let innerHeight: number = $state(0);
	let canvasElement: HTMLCanvasElement;
	let flakes: SnowFlake[] = [];

	let { flakeCount = 0, flakeMin = 0, flakeMax = 0, zIndex = 0 } = $props();

	class Throttle {
		callback: Function;
		timeout: number | null;
		delay: number;

		constructor(callback: () => void, delay: number) {
			this.callback = callback;
			this.timeout = null;
			this.delay = delay;
		}

		exec() {
			this.callback();
			return this;
		}

		call() {
			if (this.timeout) {
				clearTimeout(this.timeout);
			}
			this.timeout = setTimeout(this.callback, this.delay);
			return this;
		}

		clear() {
			if (this.timeout) {
				clearTimeout(this.timeout);
			}
			return this;
		}
	}

	const clamp = (x: number, min: number, max: number) =>
		Math.min(Math.max(x, min), max);

	const throttledResize = new Throttle(() => {
		canvasElement.width = innerWidth;
		canvasElement.height = innerHeight;

		flakes = [];
		const count = flakeCount || Math.max(clamp(innerWidth / 8, 10, 300));

		for (let i = count; i > 0; i--) {
			flakes.push(new SnowFlake(flakeMin, flakeMax));
		}
	}, 100);

	onMount(() => {
		let frame: number;

		throttledResize.exec();
		const ctx = canvasElement.getContext('2d') as CanvasRenderingContext2D;

		(function loop() {
			frame = requestAnimationFrame(loop);
			ctx.clearRect(0, 0, innerWidth, innerHeight);

			flakes.forEach((f) => f.draw(ctx));
			flakes.forEach((f, i) => f.update(frame, i));
		})();

		return () => {
			cancelAnimationFrame(frame);
			throttledResize.clear();
		};
	});
</script>

<svelte:window
	bind:innerWidth
	bind:innerHeight
	on:resize={() => {
		throttledResize.call();
	}}
/>

<canvas style="z-index:{zIndex};" aria-hidden="true" bind:this={canvasElement}
></canvas>

<style>
	canvas {
		pointer-events: none;

		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-sizing: border-box;

		animation: fadein 3s backwards ease-in-out;

		filter: opacity(0.9) drop-shadow(5px 8px 2px rgba(0, 0, 0, 0.05));
	}
	@media (prefers-color-scheme: dark) {
		canvas {
			filter: opacity(0.6);
		}
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
