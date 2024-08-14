# SvelteKit Personal Website 🔥

I created this website to serve as my online resume. I wouldn't call it a portfolio, but that may come later.

Demo: [https://mario.tiscareno.dev](https://mario.tiscareno.dev)

<p align="left">
    <img width="600" height="auto" src="https://i.imgur.com/oAcf7tx.png" alt="screenshot" />
</p>

WARNING: This is using Svelte 5 which is not yet production ready.

## Features ✨

- Responsive design, mostly using Tailwind CSS.
- Contact form modal that can be integrated with SendGrid or Mailgun with basic configuration.
- Hero Section.
- About Section.
- Skills with XP bars.
- Work timeline with a bit of scroll interactivity and tech icons.
- Education section CSS based diploma.
- Basic footer with links.

Everything is on one page, which works for what I need right now.

## Install and Run ▶️

1. Clone this repository

   ```
   git clone https://github.com/MarioTiscareno/sveltekit-personal-website
   ```

2. Go into the repository

   ```
   cd sveltekit-personal-website
   ```

3. Rename the file .env.example to .env.local

   3.1 Linux

   ```
   mv .env.example .env.local
   ```

   3.2 Windows

   ```
   ren .env.example .env.local
   ```

4. Install dependencies

   ```
   npm install
   ```

5. Start the project in development

   ```
   npm run dev
   ```

Open your browser and go to `http://localhost:5173`.

## SendGrid and Mailgun contact form integration 📬

You can configure SendGrid or Mailgun to receive contact form submissions in your mailbox. This can be handy if you don't want to expose your personal email.

To configure just set the appropriate values in .env.local.

```bash
SENDGRID_API_KEY='YOUR_API_KEY'
SENDGRID_SENDER='sender@your.domain.com'

MAILGUN_DOMAIN='your.domain.com'
MAILGUN_API_KEY='YOUR_API_KEY'
MAILGUN_SENDER='sender@your.domain.com'

EMAIL_TO='receiver@your.domain.com'

MAIL_PROVIDER='mailgun' # mailgun | sendgrid | none
```

DON'T remove any variables from the .env file, as this will break the build, instead you can set to empty strings what you don't need.
