<script lang="ts">
	import AzureAiStudio from '$lib/icons/azure-ai-studio.svelte';
	import AzureDevops from '$lib/icons/azure-devops.svelte';
	import AzureFunctions from '$lib/icons/azure-functions.svelte';
	import AzureSql from '$lib/icons/azure-sql.svelte';
	import Azure from '$lib/icons/azure.svelte';
	import Cosmos from '$lib/icons/cosmos.svelte';
	import DotNet from '$lib/icons/dot-net.svelte';
	import OpenAi from '$lib/icons/open-ai.svelte';
	import Milestone from '$lib/milestone.svelte';
	import Javascript from '$lib/icons/javascript.svelte';
	import Typescript from '$lib/icons/typescript.svelte';
	import React from '$lib/icons/react.svelte';
	import Docker from '$lib/icons/docker.svelte';
	import Redis from '$lib/icons/redis.svelte';
	import Angular from '$lib/icons/angular.svelte';
	import SqlServer from '$lib/icons/sql-server.svelte';
	import Powershell from '$lib/icons/powershell.svelte';
	import Jquery from '$lib/icons/jquery.svelte';
	import C from '$lib/icons/c.svelte';
	import { onMount } from 'svelte';
	import { activateOnScroll } from '$lib/util';

	const work = [
		{
			from: 'Nov, 2019',
			to: 'Present',
			title: 'Systems Architect',
			workPlace: '@Encora/Blick Art Materials',
			body: [
				'I am currently work on the design and development of backend systems for the Blick online store. This includes both cloud hosted and on-premise services using a variety of technology stacks, mainly .NET and Azure serverless.',
				'This has allowed me to work ond multiple business domains such as inventory, pricing, cart, checkout, as well as different architectural approaches such as microservices and event driven.',
				"Observability and monitoring are a big part of my job, for which I've been using services like Azure Monitor and New Relic.",
				'Recently we have started introducing AI in our internal processes, to allow users to access our knowledge base with natural language, enriched by our different management systems such as our Git repositories, Jira and Confluence. This has been possible with new tools like Open AI, Azure AI Studio and Pinecone.'
			],
			keywords: [
				'ASP.NET Core',
				'Azure SQL Server',
				'Cosmos DB',
				'Azure DevOps',
				'Azure Service Bus',
				'Azure Storage',
				'Azure Monitor',
				'Redis',
				'Azure Durable Functions',
				'Azure API Management',
				'Git',
				'Docker',
				'Azure AI Studio',
				'Open AI',
				'Pinecone',
				'New Relic',
				'eCommerce',
				'Microservices',
				'Event Driven',
				'Retail'
			],
			icons: [DotNet, Azure, Cosmos, AzureSql, AzureDevops, AzureFunctions, AzureAiStudio, OpenAi]
		},
		{
			from: 'Feb 2018',
			to: 'Nov 2019',
			title: 'Fullstack Developer',
			workPlace: '@iTexico (acquired by Improving)',
			body: [
				'One of my main responsibilities was developing the back-end for a money transfer mobile app. Using ASP.NET Core, I built secure, RESTful APIs and integrated with third party services to integrate payments, KYC, fraud detection, banking, etc.',
				'On the front-end side, I worked with React to build user interfaces and libraries like Redux and MobX for state management.',
				'I was also involved with the initial setup of CI/CD pipelines on Azure DevOps. Automated building, testing, and deployment was critical for our workflow, helping us deliver new features and updates more efficiently.'
			],
			keywords: [
				'C#',
				'ASP.NET Core',
				'React',
				'Azure SQL Server',
				'Azure DevOps',
				'Azure Service Bus',
				'Azure Storage',
				'Azure Application Insights',
				'Redis',
				'Redux',
				'Mobx',
				'Entity Framework Core',
				'Hangfire',
				'Docker',
				'Azure Functions',
				'Azure API Management',
				'Remittances',
				'KYC',
				'Fraud Detection',
				'Banking',
				'Mobile Payments',
				'Git'
			],
			icons: [DotNet, Typescript, Javascript, React, Redis, AzureSql, AzureDevops, Docker]
		},
		{
			from: 'Nov 2012',
			to: 'Feb 2018',
			title: 'Software Engineer',
			workPlace: '@Softtek',
			body: [
				'During my time at Softtek I was lucky to work with two great clients in the wealth management and retail sectors, where I had the chance to learn about compliance, risk management, inventory management, among other business domains.',
				'I was in charge of the design and implementation of backend systems, with business rules that were complex and consistently changing due to evolving regulations and requirements, yet with emphasis on performance.',
				'Most of the development work was done in C# and I experienced the transitions of different .NET products, e.g. from WCF, to MVC, to Web API, to ASP.NET Core.',
				'In the later years I was introduced to "modern" front-end frameworks, i.e. Angular, so I gained some experience with JavaScript and Typescript. At the time state management on the front-end was rapidly changing and very opinionated, for me this meant working with Redux to manage the state of UIs that required higher complexity.'
			],
			keywords: [
				'C#',
				'ASP.NET',
				'SQL Server',
				'MVC',
				'Web API',
				'WCF',
				'Angular',
				'Redux',
				'Entity Framework',
				'Compliance',
				'Risk Management',
				'Inventory Management',
				'Retail',
				'Finance',
				'Git'
			],
			icons: [DotNet, Typescript, Javascript, Angular, SqlServer, Redis, Powershell]
		},
		{
			from: 'Dec 2010',
			to: 'Jul 2014',
			title: 'Founder and Developer',
			workPlace: '@Tique Tecnologias de Informacion',
			body: [
				'This was a small consultancy company that I started with group of friends from college. We were able to sell and implement several development projects for local government agencies and businesses.',
				'We mainly provided web presence and mobile applications for our customers, using different technologies like ASP.NET, React and Angular.'
			],
			keywords: [
				'C#',
				'ASP.NET',
				'JavaScript',
				'TypeScript',
				'Angular',
				'React',
				'SQL Server',
				'Entity Framework Core',
				'Git'
			],
			icons: [DotNet, Azure, Typescript, Javascript, Angular, React, SqlServer]
		},
		{
			from: 'Oct 2009',
			to: 'Dec 2010',
			title: 'Software Engineer',
			workPlace: '@Nasoft USA',
			body: [
				'At Nasoft I implemented and maintained the web platform for our customers in the mortgage sector. Back then ASP.NET MVC was still a thing, and it the main web application framework used for the platform, but we also integrated and exposed SOAP web services with WCF.',
				"This was also during jQuery's heyday, which at the time didn't seem so bad, so we were using it in our front-end."
			],
			keywords: [
				'C#',
				'ASP.NET',
				'SQL Server',
				'MVC',
				'WCF',
				'ADO.NET',
				'Mortgage',
				'Real Estate',
				'Risk Management',
				'TFS',
				'jQuery'
			],
			icons: [DotNet, Javascript, SqlServer, Jquery]
		},
		{
			from: 'Nov 2008',
			to: 'Oct 2009',
			title: 'Developer',
			workPlace: '@Banamex CitiGroup',
			body: [
				"At Banamex I worked on an internal web application for our mortgage branch's analysts to manage risk and loan approvals. Here I had the opportunity to get up close to the database and is where I gained my initial experience with SQL Server.",
				'The application was built with ASP.NET Web Forms and vanilla JS.'
			],
			keywords: [
				'C#',
				'ASP.NET',
				'SQL Server',
				'ADO.NET',
				'Banking',
				'Finance',
				'Mortgage',
				'Risk Management',
				'Compliance',
				'SVN'
			],
			icons: [DotNet, Javascript, SqlServer]
		},
		{
			from: 'Jul 2008',
			to: 'Nov 2008',
			title: 'Developer',
			workPlace: '@Arquitectura en Sistemas Computacionales Integrales',
			body: [
				'At ASCI I worked for a short time, but it was fun nevertheless. My first project involved writing firmware in C for wireless network access points.',
				'Here is where I learned about version control, unit testing, code quality, and how it is like working in a real development team in general.',
				'Later I moved on to a web development project, where I built a web application with ASP.NET Web Forms and JavaScript which integrated with Google Maps and GPS tracking devices, at the time this was pretty new stuff.'
			],
			keywords: [
				'C#',
				'C',
				'ASP.NET',
				'JavaScript',
				'Google Maps',
				'GPS Tracking',
				'Firmware Development',
				'SVN'
			],
			icons: [DotNet, C, Javascript]
		},
		{
			from: 'Sep 2005',
			to: 'Jul 2008',
			title: 'Developer',
			workPlace: '@AgroClima Informatica Avanzada',
			body: [
				'This was my first job as a software engineer and I was pretty much the entire IT department. This was a small insurance company that specialized in agribusiness.',
				'I got to learn about networks, Linux, web servers, databases, basic web development concepts and a lot of other stuff in between. This is when I first started writing ASP.NET web apps in C#, this was when version 2.0 had just been released.',
				'I even did some Flash based web UIs that displayed weather forecast maps.'
			],
			keywords: ['C#', 'ASP.NET', 'JavaScript', 'Linux', 'Flash', 'Insurance', 'Agribusiness'],
			icons: [DotNet, Javascript, SqlServer]
		}
	];

	onMount(() => {
		activateOnScroll('.milestone');
	});
</script>

<div
	class="left-0 -mt-2 w-full overflow-hidden border-t-8 border-slate-700 bg-slate-800 pb-12 pt-24 md:py-24"
>
	<div class="relative mx-auto max-w-7xl px-4 md:px-6">
		<div
			class="parallax absolute
			-top-24 right-48 z-0 -mx-96 h-full w-full bg-[url('/images/keyboard.webp')] bg-contain bg-no-repeat opacity-50 bg-blend-normal drop-shadow [--parallax-speed:5] sm:right-24 sm:bg-auto md:-right-[10vw] lg:opacity-100"
		></div>
		<a id="work">
			<h2
				class="relative z-10 mx-auto font-['Roboto_Mono'] text-xl leading-none tracking-wide text-[#fce4b8]"
			>
				<span class="text-white/50">~/</span>WORK
			</h2>
		</a>
		<p class="cursor -ml-2 mb-20 block font-['Roboto_Mono'] text-lg text-white/50" id="cursor-4">
			&#x2590;
		</p>
		<p
			class="relative z-20 mb-24 text-pretty pr-24 text-2xl font-medium leading-tight tracking-tight text-slate-300 drop-shadow-lg md:text-3xl lg:w-1/2"
		>
			The places I have worked at and what I got to build.
		</p>
		<div
			class="relative mx-auto space-y-12 overflow-hidden via-90% pb-4 sm:pt-8 sm:before:absolute sm:before:inset-0 sm:before:left-[1px] sm:before:h-full sm:before:w-[1px] sm:before:-translate-x-px sm:before:bg-gradient-to-b sm:before:from-white/25 sm:before:via-white/25 sm:before:to-transparent"
		>
			{#each work as w, i}
				<Milestone
					from={w.from}
					to={w.to}
					heading={w.title}
					subheading={w.workPlace}
					body={w.body}
					keywords={w.keywords}
					icons={w.icons}
					active={i === 0}
				></Milestone>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	@media screen(lg) {
		:global(.milestone.active) {
			transform: translateX(50px);
			transition:
				transform 0.2s ease-out,
				filter 0.2s ease-in,
				opacity 0.2s ease-in;
			opacity: 1;
		}

		:global(.milestone:not(.active)) {
			transform: translateX(0);
			transition:
				transform 0.5s ease-out,
				filter 0.5s ease-in,
				opacity 0.5s ease-in;
			filter: saturate(0%);
			opacity: 0.35;
		}
	}
</style>
