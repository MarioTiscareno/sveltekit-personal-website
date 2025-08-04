<script lang="ts">
	import EditorLine from '$lib/editor-line.svelte';
	import Window from '$lib/window.svelte';

	const MAX_LINES = 19;

	const skillSets = [
		{
			skillSetHeading: ['Languages'],
			skills: [
				{ name: 'C#', level: 95 },
				{ name: 'JavaScript', level: 75 },
				{ name: 'TypeScript', level: 75 },
				{ name: 'Python', level: 65 },
				{ name: 'Go', level: 40 }
			]
		},
		{
			skillSetHeading: ['Backend'],
			skills: [
				{ name: 'ASP.NET', level: 95, comment: 'Core, Framework, etc.' },
				{ name: 'Azure Functions', level: 90 },
				{ name: 'Dapr', level: 80 },
				{ name: 'MS Orleans', level: 50 }
			]
		},
		{
			skillSetHeading: ['Data'],
			skills: [
				{ name: 'Cosmos DB', level: 90 },
				{ name: 'Redis', level: 85 },
				{ name: 'SQL Server', level: 85 },
				{ name: 'DynamoDB', level: 75 },
				{ name: 'Postgres', level: 60 },
				{ name: 'Pinecone', level: 45 }
			]
		},
		{
			skillSetHeading: ['Frontend'],
			skills: [
				{ name: 'Svelte/SvelteKit', level: 75 },
				{ name: 'Tailwind', level: 70 },
				{ name: 'React/Next', level: 50 },
				{ name: 'HTMX', level: 40 }
			]
		},
		{
			skillSetHeading: ['Cloud'],
			skills: [
				{ name: 'Azure', level: 85 },
				{ name: 'AWS', level: 65 },
				{ name: 'Akamai', level: 40 },
				{ name: 'Cloudflare', level: 35 }
			]
		},
		{
			skillSetHeading: ['CI/CD'],
			skills: [
				{ name: 'Azure DevOps', level: 85 },
				{ name: 'GitHub', level: 65 }
			]
		},
		{
			skillSetHeading: ['AI'],
			skills: [
				{ name: 'Azure AI Studio', level: 90 },
				{ name: 'Open AI Apis', level: 80 },
				{ name: 'Semantic Kernel', level: 75 },
				{ name: 'LangChain', level: 55 }
			]
		},
		{
			skillSetHeading: ['Paradigms and', 'Development Patterns'],
			skills: [
				{ name: 'OOP', level: 95 },
				{ name: 'TDD', level: 90 },
				{ name: 'SOLID', level: 90 },
				{ name: 'DDD', level: 75 },
				{ name: 'Functional Programming', level: 75 }
			]
		},
		{
			skillSetHeading: ['Misc. Tools'],
			skills: [
				{ name: 'Git', level: 85 },
				{ name: 'Entity Framework', level: 85 },
				{ name: 'Docker', level: 75 },
				{ name: 'PowerShell', level: 55 },
				{ name: 'New Relic', level: 50 },
				{ name: 'Coffee', level: 100, comment: 'hot or cold ☕' }
			]
		}
	];
</script>

<div class="bg-slate-200">
	<div class="relative z-40 mx-auto max-w-7xl px-4 pb-12 pt-24 md:px-6 md:py-24">
		<div
			class="parallax absolute top-0 z-0 mx-auto hidden h-full w-full bg-[url('/images/coffee.webp')] bg-right-top bg-no-repeat py-24 bg-blend-normal [--parallax-speed:5] md:block"
		></div>
		<a id="skills">
			<h2
				class="relative z-10 mx-auto font-['Roboto_Mono'] text-xl leading-none tracking-tight text-slate-700"
			>
				<span class="mr-1 text-slate-700/50">~/</span>SKILLS
			</h2>
		</a>
		<p
			class="cursor -ml-2 mb-20 block font-['Roboto_Mono'] text-lg text-slate-700/50"
			id="cursor-3"
		>
			&#x2590;
		</p>
		<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
			<div class="mb-10 md:p-6 md:text-right">
				<p
					class="mb-2 text-pretty text-2xl font-bold leading-tight tracking-tight text-slate-700 md:text-3xl"
				>
					These are some of the things I know, tools I have used
				</p>
				<p class="text-lg text-slate-500">...and stuff that I am still improving on.</p>
			</div>
			{#each skillSets as o, i}
				<Window class="h-full">
					{#each o.skillSetHeading as h, j}
						<EditorLine class="text-slate-400/80"># {h}</EditorLine>
					{/each}
					{#each o.skills as s, j}
						<EditorLine />
						<EditorLine
							>{s.name}
							{#if s.comment}
								<span class="text-slate-400/80"># {s.comment}</span>
							{/if}
						</EditorLine>
						<EditorLine>
							<div class="absolute top-1 w-full pl-14">
								<div class="rounded-full bg-slate-900/75">
									<div class="h-1 rounded-full bg-[#fce4b8] pl-4" style="width: {s.level}%"></div>
								</div>
							</div>
						</EditorLine>
					{/each}
					{#each Array(MAX_LINES - (o.skills.length * 3 + o.skillSetHeading.length)) as _, j}
						<EditorLine />
					{/each}
				</Window>
			{/each}
		</div>
	</div>
</div>
