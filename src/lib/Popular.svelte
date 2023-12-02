<script>
	import Card from './Card.svelte';
	import { pageNo } from '../store/store';
	export let popular;

	async function handleClick(e) {
		let id = e.target.id;
		let pageNum = $pageNo;
		let k = '28605d97b74c69140200b9d4f0f8c4c1';
		if (id == 'previous') {
			pageNum--;
		} else {
			pageNum++;
		}

		const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNum}&api_key=${k}`;
		const res = await fetch(url);
		if (res.ok) {
			popular = await res.json();
			pageNo.set(pageNum);
		}
		window.scrollTo({
			top: 0,
			behavior: 'smooth' // Optional: Add smooth scrolling behavior
		});
	}
</script>

<div class=" grid grid-cols-2 gap-3 mx-3 sm:grid-cols-3 sm:gap-6 sm:mx-6 lg:grid-cols-5 lg:mx-20">
	{#each popular.results as movie}
		<Card {movie} />
	{/each}
</div>
<div class="flex mb-9 justify-center">
	<div class="flex justify-center items-center">
		{#if $pageNo > 1}
			<button
				on:click={handleClick}
				id="previous"
				class="bg-red-400 hover:bg-red-500 text-white font-semibold p-2 rounded-xl m-auto w-24"
				>Previous</button
			>
			<div class="bg-red-400 w-10 h-10 rounded-full flex justify-center items-center mx-2">
				<p class="font-bold text-white">{$pageNo}</p>
			</div>
		{/if}
		<button
			on:click={handleClick}
			id="next"
			class="bg-red-400 hover:bg-red-500 text-white font-semibold p-2 rounded-xl m-auto w-24"
			>Next</button
		>
	</div>
</div>
