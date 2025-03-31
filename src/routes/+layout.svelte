<script>
	import '../app.css';

	let { children } = $props();
</script>

<main class=" flex min-h-screen bg-[#BDE0FE]">
	{@render children()}
</main>
