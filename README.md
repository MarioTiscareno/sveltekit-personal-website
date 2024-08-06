# SvelteKit Personal Website 🔥

I created this website to serve as my online resume. I wouldn't call it a portfolio, but that may come later.

Demo: [https://mario.tiscareno.dev](https://mario.tiscareno.dev)

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

```
# Clone this repository
$ git clone https://github.com/MarioTiscareno/sveltekit-personal-website
```

```
# Go into the repository
$ cd sveltekit-personal-website
```

```
# Rename the file .env.example to .env.local

# Linux Bash
$ mv .env.example .env.local

# Windows CMD
$ ren .env.example .env.local
```

```
# Install dependencies
$ npm install
```

```
# Start the project in development
$ npm run dev
```

Open your browser and go to `http://localhost:5173`.

## SendGrid and Mailgun contact form integration 📬

You can configure SendGrid or Mailgun to receive contact form submissions in your mailbox. This can be handy if you don't want to expose your personal email.

To configure just set the appropriate values in .env.local. MAIL_PROVIDER should be set to 'sendgrid' or 'mailgun', using any other value will not do anything, but you will still get a 200 back from the endpoint.
DON'T remove any variables from the .env file, as this will break the build, instead you can leave empty what you don't need.

## Acknowledgements 🙏

Thanks to:

- [Svelte team](https://github.com/sveltejs)
- [Tailwind team](https://github.com/tailwindlabs)
- [daylilyfield for svrollbar component](https://github.com/daylilyfield/svrollbar)
