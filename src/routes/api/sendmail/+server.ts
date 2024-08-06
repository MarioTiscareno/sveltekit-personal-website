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
import { json } from '@sveltejs/kit';

sg.setApiKey(SENDGRID_API_KEY);

export async function POST({ request, cookies }) {
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

		sg.send(msg)
			.then(() => {
				console.log('Email sent');
			})
			.catch((error: Error) => {
				console.error(error);
			});
	}

	if (MAIL_PROVIDER === 'mailgun') {
		fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
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
	}

	return new Response('OK');
}
