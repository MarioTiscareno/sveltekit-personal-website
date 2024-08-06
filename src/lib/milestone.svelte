<script lang="ts">
	import type { Component } from 'svelte';

	export let heading = '';
	export let subheading = '';
	export let body: string[] = [];
	export let keywords: string[] = [];
	export let icons: Component[] = [];
	export let from = '';
	export let to = '';
	export let active = false;
</script>

<div
	class="milestone relative mx-auto flex max-w-3xl items-start justify-center sm:pl-8 sm:before:absolute sm:before:inset-0 sm:before:-left-72 sm:before:h-[1px] sm:before:w-1/2 sm:before:bg-gradient-to-r sm:before:from-white/25 sm:before:to-transparent"
	class:active
>
	<!-- Date -->
	<time
		class="glass hidden h-20 w-48 shrink-0 items-center justify-center rounded-bl border border-b-black/10 border-l-white/10 border-r-black/10 border-t-white/10 bg-white/20 p-2 font-['Roboto_Mono'] text-xs font-semibold text-slate-300 shadow sm:flex"
	>
		{from} - {to}
	</time>
	<!-- Card -->
	<div
		class="glass w-full rounded-lg rounded-b-lg rounded-r-lg border border-b-black/10 border-l-white/10 border-r-black/10 border-t-white/10 bg-white/10 p-4 shadow sm:rounded-tl-none sm:p-6"
	>
		<div>
			<h2 class="text-xl font-bold tracking-tight text-slate-300 sm:text-2xl">{heading}</h2>
			<h3
				class="font-['Roboto_Mono'] text-sm tracking-tight text-[#fce4b8] drop-shadow lg:text-base"
			>
				{subheading}
			</h3>
		</div>
		<div class="col-span-2 mt-6 flex flex-col gap-4 text-pretty text-xs text-slate-300 sm:text-sm">
			{#each body as paragraph}
				<p class="leading-normal tracking-normal">{paragraph}</p>
			{/each}
			<div class="my-6">
				<ul
					class="flex flex-wrap gap-1 font-['Roboto_Mono'] text-[0.7rem] leading-snug tracking-wide text-white/75"
				>
					{#each keywords as keyword}
						<li class="rounded-full bg-black/20 px-2 py-0.5">{keyword}</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="flex flex-wrap gap-3.5">
			{#each icons as icon}
				<svelte:component this={icon} />
			{/each}
		</div>
	</div>
</div>
