<script>
	import { answers, result } from '../shared.svelte.js';

	let { data } = $props();
	let input = $state();

	function handleClick() {
		if (input.toLowerCase() === data.question.answer.toLowerCase()) {
			answers[data.question.id - 1] = 2;
			result.score = result.score + 1;
		} else {
			answers[data.question.id - 1] = 1;
		}

		input = '';
	}
</script>

<div class=" flex w-screen flex-1 grow items-center justify-center">
	<div
		class="  flex h-[600px] w-[1000px] flex-col items-center justify-center rounded-lg border-4 border-black bg-[#FFC8DD] p-10 shadow-lg"
		class:bg-teal-600={answers[data.question.id - 1] === 2}
		class:bg-red-700={answers[data.question.id - 1] === 1}
	>
		{#if answers[data.question.id - 1] === 2}
			<div class=" birthstone-regular mb-8">
				<h1 class=" bold text-6xl text-black">CORRECT</h1>
			</div>
		{/if}
		<div class=" bold bebas-neue-regular mb-10 text-6xl text-black">
			{data.question.question}
		</div>

		{#if answers[data.question.id - 1] === 1 || answers[data.question.id - 1] === 0}
			<input
				type="input"
				class="  w-full border-4 border-black bg-none p-4 focus:border-4"
				placeholder={data.question.placeholder}
				bind:value={input}
			/>

			<button
				onclick={handleClick}
				class=" bold mt-10 rounded-lg border-4 border-black bg-[#A2D2FF] px-12 py-6 text-xl font-black"
				>SUBMIT</button
			>
		{:else}
			<p class=" w-full text-center text-2xl italic">{data.question.answer}</p>
		{/if}
		{#if result.score >= 7}
			<a
				href="/secret"
				class=" bold mt-10 rounded-lg border-4 border-black bg-[#A2D2FF] px-12 py-6 text-xl font-black"
				>LET'S GOOOOO!!!!</a
			>
		{/if}
	</div>
</div>
