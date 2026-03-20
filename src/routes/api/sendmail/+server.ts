import sg from '@sendgrid/mail';
import {
	EMAIL_TO,
	MAILGUN_API_KEY,
	MAILGUN_DOMAIN,
	MAILGUN_SENDER,
	SENDGRID_API_KEY,
	SENDGRID_SENDER,
	MAIL_PROVIDER
} from '$env/static/private';
import type { RequestEvent } from '@sveltejs/kit';

sg.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }: RequestEvent): Promise<Response> {
	const { firstName, lastName, from, message } = await request.json();

	const emailRegex = /[^@\s]+@[^@\s]+\.[^@\s]+/;

	// basic email address validation
	if ((from as string).match(emailRegex) === null) {
		return new Response('Invalid email address', { status: 400 });
	}

	if (MAIL_PROVIDER === 'sendgrid') {
		const msg = {
			to: SENDGRID_SENDER, // send email to self
			from: SENDGRID_SENDER,
			subject: `${firstName} ${lastName} (${from}) left a message on tiscareno.dev!`,
			text: message
		};

		try {
			await sg.send(msg);
			console.log('Email sent');
		} catch (error) {
			console.error(error);
			return new Response('Failed to send email', { status: 500 });
		}
	}

	if (MAIL_PROVIDER === 'mailgun') {
		try {
			const response = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization: 'Basic ' + btoa('api:' + MAILGUN_API_KEY)
				},
				body: new URLSearchParams({
					from: MAILGUN_SENDER,
					to: EMAIL_TO,
					subject: `${firstName} ${lastName} (${from}) left a message on tiscareno.dev!`,
					text: message
				})
			});
			if (!response.ok) {
				return new Response('Failed to send email', { status: 500 });
			}
		} catch (error) {
			console.error(error);
			return new Response('Failed to send email', { status: 500 });
		}
	}

	return new Response('OK');
}
