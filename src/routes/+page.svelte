<script>
	let { data } = $props();
</script>

<article>
	<a href="/create">create a new xmas card!</a>

	{#if data.cards}
		<section>
			<h1>Known lists</h1>
			<ul>
				{#each data.cards as { title, key }}
					<li>
						<a href="/{key}">
							{title}
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</article>

<style>
	article {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: blue;
	}
	article > a {
		background-color: aliceblue;
		padding: 1rem;
		border-radius: 1rem;
	}

	ul {
		display: flex;
		flex-direction: column;
	}

	li {
		display: block;
		background-color: aliceblue;
	}
</style>
