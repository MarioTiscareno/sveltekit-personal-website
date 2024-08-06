<script lang="ts">
	import Window from '$lib/window.svelte';
	import { preventDefault } from '$lib/util';

	let { close }: any = $props();

	let showContactModal = false;
	let contactFirstName = $state('');
	let contactLastName = $state('');
	let contactEmail = $state('');
	let contactMessage = $state('');
	let dirty = $state(false);

	async function handleContactSubmit() {
		dirty = true;

		const response = await fetch('/api/sendmail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: contactFirstName,
				lastName: contactLastName,
				from: contactEmail,
				message: contactMessage
			})
		});

		if (response.ok) {
			close();
		} else {
			// Handle the error
		}
	}
</script>

<div class=" px-6 sm:px-8">
	<Window style="dark">
		<form
			class="-mr-4 grid max-w-md grid-cols-2 gap-4 px-2 pb-4 text-left sm:gap-8 sm:px-4"
			class:dirty
		>
			<h3 class="col-span-2 mb-2 text-3xl font-bold tracking-tight text-slate-300">Let's Talk</h3>
			<label class="block font-medium text-slate-400"
				>First Name
				<input
					type="text"
					bind:value={contactFirstName}
					maxlength="32"
					required
					class="mt-1 w-full rounded-xl bg-slate-600 p-2 text-slate-300 focus-visible:outline-none focus-visible:brightness-125"
				/></label
			>
			<label class="block font-medium text-slate-400"
				>Last Name
				<input
					type="text"
					bind:value={contactLastName}
					maxlength="32"
					required
					class="mt-1 w-full rounded-xl bg-slate-600 p-2 text-slate-300 focus-visible:outline-none focus-visible:brightness-125"
				/></label
			>
			<label class="col-span-2 block font-medium text-slate-400"
				>Email
				<input
					type="text"
					bind:value={contactEmail}
					maxlength="128"
					required
					pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
					class="mt-1 w-full rounded-xl bg-slate-600 p-2 text-slate-300 focus-visible:outline-none focus-visible:brightness-125"
				/></label
			>
			<label class="col-span-2 block font-medium text-slate-400"
				>Message
				<textarea
					bind:value={contactMessage}
					maxlength="1000"
					required
					class="mt-1 h-32 w-full rounded-xl bg-slate-600 p-2 focus-visible:outline-none focus-visible:brightness-125"
				></textarea>
			</label>
			<div class="col-span-2 flex flex-col gap-3">
				<button
					type="submit"
					class="mt-4 w-full rounded-full bg-[#fce4b8] p-2 font-bold tracking-widest text-slate-800 transition-all duration-500 ease-in-out hover:brightness-105"
					onclick={preventDefault(handleContactSubmit)}>SEND</button
				>
				<button
					type="submit"
					class="w-full rounded-full bg-slate-300 p-2 font-bold tracking-widest text-slate-700 transition-all duration-500 ease-in-out hover:brightness-105"
					onclick={preventDefault(close)}>CANCEL</button
				>
			</div>
		</form>
	</Window>
</div>

<style lang="postcss">
	:global(form.dirty input:invalid, form.dirty textarea:invalid) {
		@apply border border-red-500;
	}
</style>
