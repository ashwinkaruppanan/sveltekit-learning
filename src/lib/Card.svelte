<script>
	export let movie;
</script>

<div class="card">
	<div>
		<a href={`/movie/${movie.id}`}>
			<img
				class="rounded-2xl"
				src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
				alt={movie.title}
			/>
		</a>
	</div>
	<div class="my-3">
		<p class="font-semibold">{movie.title}</p>
		<p
			class={movie.vote_average > 7
				? 'text-green-500'
				: movie.vote_average > 6
				  ? 'text-orange-500'
				  : 'text-red-500'}
		>
			{movie.vote_average}
		</p>
	</div>
</div>
