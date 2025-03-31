<script>
	import { answers } from './shared.svelte';
	let { children, data } = $props();
</script>

<main class=" flex h-screen flex-col">
	{@render children()}
	<div class=" flex items-center justify-center gap-10 p-20">
		{#each data.questions as questions}
			<a
				href="/questions/question/{questions.slug}"
				class=" text-bold bold flex h-[65px] w-[65px] items-center justify-center rounded-[50%] border-4 border-black text-2xl"
				class:bg-blue-500={answers[questions.slug - 1] === 0}
				class:bg-red-500={answers[questions.slug - 1] === 1}
				class:bg-green-500={answers[questions.slug - 1] === 2}
				class:border-indigo-800={data.slug == questions.slug}
			>
				{questions.slug}</a
			>
		{/each}
	</div>
</main>
