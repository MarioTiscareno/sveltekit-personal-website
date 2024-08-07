<script lang="ts">
	let {
		children,
		close = null,
		class: className = '',
		style = 'dark',
		blurred = false
	}: {
		close?: any;
		class?: string;
		style?: 'dark' | 'light';
		blurred?: boolean;
		children?: any;
	} = $props();

	let dark = style === 'dark';
	let light = style === 'light';
</script>

<div
	class={(className ?? '') + ' relative z-50 h-fit rounded-lg py-4 pl-6 pr-8'}
	class:dark
	class:light
	class:blurred
>
	<div class="-ml-2 mb-4 flex gap-2">
		{#if close}
			<!-- functional button -->
			<button class="h-3 w-3 rounded-full bg-red-400 transition hover:brightness-90" onclick={close}
			></button>
		{:else}
			<!-- purely decoration -->
			<div class="h-3 w-3 rounded-full bg-red-400"></div>
		{/if}
		<div class="h-3 w-3 rounded-full bg-yellow-400"></div>
		<div class="h-3 w-3 rounded-full bg-green-400"></div>
	</div>
	<div class="counter-reset-line -ml-2 pt-4 text-sm">
		{@render children()}
	</div>
</div>

<style lang="postcss">
	.counter-reset-line {
		counter-reset: line;
	}

	.dark {
		@apply bg-gradient-to-br from-slate-700 to-slate-800 text-slate-300 shadow-lg;
	}

	.dark.blurred {
		@apply from-slate-700/65 to-slate-800/65;
		backdrop-filter: blur(10px);
	}

	.light {
		@apply bg-slate-100 text-slate-500 shadow-lg;
	}

	.light.blurred {
		@apply bg-slate-100/65;
		backdrop-filter: blur(10px);
	}
</style>
