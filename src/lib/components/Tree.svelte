<script lang="ts">
	const randomX = () => {
		return Math.random() * 100;
	};
	const randomSize = () => {
		return 0.25 + Math.random() * 0.75;
	};

	const trees = Array.from({ length: 10 })
		.map(() => {
			return { x: randomX(), s: randomSize() };
		})
		.sort((a, b) => a.s - b.s);
</script>

{#snippet tree(x: number, s: number)}
	<svg
		viewBox="0 0 200 335"
		style:transform={`translateX(calc(${x}cqw - 55%)) scale(${s}) scaleX(${Math.random() > 0.5 ? 1 : -1})`}
		style:filter={`brightness(${s}) drop-shadow(0px 10px 20px rgba(0,0,0,0.5))`}
	>
		<path
			fill="#643808"
			d="M60 338s-6-37 2-65c9-29 12-51 22-102l41-2s-14 99 25 164c0 0-30 33-90 5Z"
		/>
		<path
			fill="#78430a"
			d="M93 171s-12 157 4 167c15 10 40 3 36-12-2-7-21-97-14-174 6-77-26 19-26 19Z"
		/>
		<path
			fill="#573107"
			d="M78 245c-18-33 35-38 42 20-9-7-14-15-14-15-10 1-7 13-7 13-3-13-21-18-21-18Z"
		/>
		<g style:--swaytime="{2 * Math.random() + 1}s">
			<path
				fill="#0f4500"
				d="M141 269c-1-9-4-17-8-24-10 8-13 14-13 14-9-7-14-15-14-15-10 1-7 14-7 14-3-13-21-19-21-19-14 5-30 22-30 22l-21-14c-20 6-22 13-22 13-1-33 74-133 94-165 36 48 73 92 96 177-9-6-11-16-22-14l-7 14s-3-13-23-27c3 10 2 18-2 24Z"
			/>
			<path
				fill="#0d3a00"
				d="M99 53c36 48 38 157 34 151-10 7-13 14-13 14-9-8-14-15-14-15-10 0-7 13-7 13-3-13-21-19-21-19-14 5-30 22-30 22-8-5 31-134 51-166Z"
			/>
			<path
				fill="#135900"
				d="M136 211c-1-8-3-15-7-20-8 6-11 11-11 11-9-5-7-11-7-11-9 1-25 11-25 11-3-11-23-12-23-12-12 4-9 14-9 14l-17-12c-18 5-20 11-20 11-1-27 65-110 82-137 31 40 64 77 84 147-8-5-10-14-19-12l-6 12s-3-11-21-22c3 8 3 14-1 20Z"
			/>
			<path
				fill="#0e4300"
				d="M48 176c-8-88 117-86 110-16-12 8-17 14-17 14-12-7-18-15-18-15-13 1-9 14-9 14-4-13-27-19-27-19-18 5-39 22-39 22Z"
			/>
			<path
				fill="#166700"
				d="M132 158c-1-7-3-13-6-18-8 6-10 11-10 11-8-6-7-11-7-11-7 1-7 15-7 15-1-5-13 0-23-2-7-2-12-14-12-14-11 4-8 13-8 13l-15-11c-16 5-18 10-18 10-1-24 58-98 73-122 28 36 57 69 75 131-7-4-9-12-17-10l-6 10s-2-10-18-20c3 7 2 13-1 18Z"
			/>
			<path
				fill="#135700"
				d="M64 110c-5-61 83-60 77-11-8 5-11 10-11 10-9-5-13-11-13-11-9 1-7 10-7 10-2-9-18-13-18-13-8 8-23 19-28 15Z"
			/>
			<path
				fill="#1c8400"
				d="M124 98c-1-5-2-10-5-13-5 4-11 13-11 13-5-4-1-13-1-13-6 1-27 16-27 16l-4-17c-9 3-6 9-6 9l-12-7c-12 3-13 7-13 7-1-18 43-73 55-91 20 27 42 51 55 98-5-3-6-9-12-8l-4 8s-2-8-14-15c2 5 1 10-1 13Z"
			/>
			<path
				fill="#176b00"
				d="M99 3c-4 2-42 64-45 71-3 8 9 6 14-1 5-8 3 1 11 5 7 4 9-3 21-2 11 1 11-16 18-17 6-1-2 14 8 15s26 16 14-11C128 37 104 2 99 3Z"
			/>
			<path
				fill="#fdf5e6"
				d="M99 1c-4 1-42 61-45 67-3 7 9 6 14-1s3 1 11 5c7 3 9-3 21-2 11 0 11-16 18-16 6-1-2 13 8 14s26 15 14-10S104 0 99 1Z"
			/>
			<path
				fill="#e5d7bd"
				d="M75 66s4 9 11 5c6-3-5 1-11-5Zm-20 4s1 6 11-2c0 0-7 4-11 2Zm67-13v8c1 2 3 3 5 2 2 0-4 0-4-5 1-5-1-5-1-5Z"
			/>
		</g>
	</svg>
{/snippet}

{#if trees}
	<div>
		{#each trees as { x, s }}
			{@render tree(x, s)}
		{/each}
	</div>
{/if}

<style>
	svg {
		left: 0;
		position: absolute;
		height: 100%;
		transform-origin: bottom;
		will-change: transform, filter;
	}

	svg g {
		transform-origin: center bottom;
		animation: sway var(--swaytime) infinite alternate;
		will-change: transform;
	}

	@keyframes sway {
		to {
			transform: rotate(-3deg);
		}
		from {
			transform: rotate(3deg);
		}
	}

	div {
		pointer-events: none;

		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		max-height: 100vh;
		height: 40cqh;

		overflow: hidden;
	}
</style>
