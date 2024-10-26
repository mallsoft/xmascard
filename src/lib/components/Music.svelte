<script lang="ts">
	import { onMount } from 'svelte';

	let audio: HTMLAudioElement;

	const handlePlay = () => {
		if (audio?.paused) audio?.play();
	};

	onMount(() => {
		audio = new Audio('/JingleBells.mp3');
		audio.loop = true;
		audio.volume = 1;

		const element = document.body;

		element.addEventListener('click', handlePlay);
		let t = setTimeout(() => {
			element.addEventListener('mousemove', handlePlay);
		}, 500);

		return () => {
			audio?.pause();

			clearTimeout(t);

			element.removeEventListener('click', handlePlay);
			element.addEventListener('mousemove', handlePlay);
		};
	});
</script>
