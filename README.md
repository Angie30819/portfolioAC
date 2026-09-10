# Angelica Navarrete — Portfolio Site

A single-page site built with plain HTML, CSS, and JavaScript — no frameworks, no build tools required. Ready to host for free on GitHub Pages.

## What's in this folder

| File | Purpose |
|---|---|
| `index.html` | Page content and structure |
| `style.css` | Visual design — colors, type, layout |
| `script.js` | Highlights the active section in the nav while scrolling |

## Before you publish: things to swap out

- **Projects** — the three project cards are placeholders. Swap in your actual bootcamp deliverables, along with real links to their repos.
- **Contact links** — update the LinkedIn and GitHub URLs with your own.
- **Dates** — double-check the years in the Trayectoria/Experience section match your real timeline.
- Want to add screenshots later? Drop them in a new `images/` folder and reference them from `index.html`.

## Publishing to GitHub Pages

**Step 1 — Get a GitHub account**
Sign up at [github.com](https://github.com) if you don't already have one — it's free.

**Step 2 — Create the repository**
Click the **"+"** in the top right → **New repository**. Name it `your-username.github.io`, using your actual GitHub username — this exact naming pattern is what tells GitHub to serve it as a live website. Set it to Public, skip adding a README (you already have one), and click **Create repository**.

**Step 3 — Upload your files**

*No command line? Use the web uploader:*
Open your new repo, click **Add file → Upload files**, drag in `index.html`, `style.css`, `script.js`, and `README.md`, then scroll down and click **Commit changes**.

*Comfortable with Git? Push from your terminal instead:*
```bash
cd path/to/your/files
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

**Step 4 — Turn on Pages**
Go to your repo's **Settings → Pages**. Under "Source," pick the **main** branch and **/ (root)** folder, then hit **Save**.

**Step 5 — Check your live site**
GitHub takes a couple of minutes to publish. Once it's live, it'll sit at:
```
https://your-username.github.io
```

**Step 6 — Link it from your resume**
Add that URL next to your email and LinkedIn on your CV.

## A few technical notes

- Fonts (Fraunces and IBM Plex Sans) load from Google Fonts via a `<link>` tag — they'll render correctly once the site is live and connected to the internet, but won't load if you open the HTML file locally without a connection.
- The layout is fully responsive across phone, tablet, and desktop.
- No backend, database, or build step involved — it's all static files, so any edit you make is live as soon as you commit and push.
