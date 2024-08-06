<script lang="ts">
	export let style: 'glass' | 'dark' | 'light' = 'dark';

	export let blurred = false;

	let dark = style === 'dark';
	let glass = style === 'glass';
	let light = style === 'light';
</script>

<div
	class={($$restProps.class ?? '') + ' relative z-50 h-fit rounded-lg py-4 pl-6 pr-8'}
	class:dark
	class:light
	class:glass
	class:blurred
>
	<div class="-ml-2 mb-4 flex gap-2">
		<div class="h-3 w-3 rounded-full bg-red-400"></div>
		<div class="h-3 w-3 rounded-full bg-yellow-400"></div>
		<div class="h-3 w-3 rounded-full bg-green-600"></div>
	</div>
	<div class="counter-reset-line -ml-2 pt-4 text-sm">
		<slot />
	</div>
</div>

<style lang="postcss">
	.counter-reset-line {
		counter-reset: line;
	}

	.glass {
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.25);
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
