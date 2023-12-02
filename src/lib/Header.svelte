<script>
	import { goto } from '$app/navigation';
	function handleClick() {
		goto('/');
	}
</script>

<div class="my-10 text-center">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<h2 on:click={handleClick} class="cursor-pointer font-extrabold text-3xl">📽 Popular Movies</h2>
</div>
