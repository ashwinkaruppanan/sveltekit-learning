<script>
	export let data;
</script>

<div>
	<div class="px-5 sm:px-10">
		<img
			class=" rounded-lg lg:w-1/2 lg:m-auto"
			src={`https://image.tmdb.org/t/p/original` + data.backdrop_path}
			alt={data.title}
		/>
	</div>
	<div class="w-full">
		<div class=" px-5 mt-6 sm:px-10 lg:w-2/3 mx-auto">
			<p class=" font-extrabold text-2xl mt-2">{data.title}</p>
			<p>{data.overview}</p>

			<p class="bg-slate-300 inline-block font rounded-lg p-2 my-3">
				Rating: {data.vote_average}
			</p>
			<div class="bg-blue-200 inline-flex p-2 rounded-xl mb-9">
				Genre:
				{#each data.genres as g}
					<p class="mx-1">{g['name']}</p>
				{/each}
			</div>
		</div>
	</div>
</div>
