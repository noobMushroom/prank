<script>
	const target_date = new Date(2025, 3, 1, 20, 0, 0);
	const now = new Date();
</script>

<div class=" flex h-screen w-screen flex-col items-center justify-center">
	{#if now > target_date}
		<div class=" mb-6 flex flex-col items-center justify-center">
			<p class=" bold text-4xl text-black">
				So you didn't solved the mystery it's fine haha your time is over
			</p>
			<a href="/secret" class=" my-4 text-xl text-black italic">Visit this site to contect me </a>
		</div>
	{/if}
	<div
		class="  flex h-[500px] w-[1000px] flex-col items-center justify-center rounded-lg border-4 border-black bg-[#FFC8DD] shadow-lg"
	>
		<h1 class=" bold mb-24 text-6xl font-black">Hey hey hey, Welcome shiny</h1>
		<p class=" px-48 text-center text-2xl font-bold italic">
			I am glad you found this site as you know we broke up and that's sad maybe something is hidden <br
			/>
			in this site press the button below
		</p>

		<a
			href="/questions"
			class=" bold mt-10 rounded-lg border-4 border-black bg-[#A2D2FF] px-12 py-6 text-xl font-black"
			>CLICK ME!!</a
		>
	</div>
</div>
