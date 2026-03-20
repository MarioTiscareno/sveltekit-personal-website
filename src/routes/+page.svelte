<script lang="ts">
	import { onMount } from 'svelte';
	import Hero from '$lib/sections/hero.svelte';
	import About from '$lib/sections/about.svelte';
	import Skills from '$lib/sections/skills.svelte';
	import { activateOnScroll } from '$lib/util';
	import Work from '$lib/sections/work.svelte';
	import Education from '$lib/sections/education.svelte';

	onMount(() => {
		activateOnScroll('.cursor');
	});
</script>

<Hero />
<div class="relative z-50 h-4 w-full bg-slate-700"></div>
<About />
<div class="relative z-50 h-4 w-full bg-slate-800"></div>
<Skills />
<div class="relative z-50 h-4 w-full bg-slate-700"></div>
<Work />
<div class="relative z-50 h-4 w-full bg-slate-700"></div>
<Education />

<style lang="postcss">
	:global(.cursor) {
		opacity: 0;
	}

	:global(.cursor.active) {
		animation: blink 1s linear infinite;
	}

	@keyframes blink {
		0% {
			opacity: 1;
		}
		49% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	@keyframes parallax {
		to {
			transform: translateY(calc(var(--parallax-speed) * -200px));
		}
	}

	:global(.parallax) {
		animation: parallax linear;
		animation-timeline: scroll();
	}

	:global(form.dirty input:invalid, form.dirty textarea:invalid) {
		@apply border border-red-500;
	}
</style>
