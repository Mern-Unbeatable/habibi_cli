# EkklésiasOne — Static Website

Pure HTML, CSS, and vanilla JavaScript church management landing site. No React, no build tools, no npm required.

## Run Locally

**Option 1 — Open directly**

Open `index.html` in your browser (redirects to `pages/home.html`).

**Option 2 — Local server (recommended for full functionality)**

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080/pages/home.html`

## Project Structure

```
├── index.html
├── pages/
│   ├── home.html
│   ├── features.html
│   ├── pricing.html
│   ├── about.html
│   ├── contact.html
│   ├── faq.html
│   ├── testimonials.html
│   ├── coming-soon.html
│   └── 404.html
└── assets/
    ├── css/main.css
    ├── js/main.js
    └── images/
```

## Pages

| Page | File |
|------|------|
| Home | `pages/home.html` |
| Features | `pages/features.html` |
| Pricing | `pages/pricing.html` |
| About | `pages/about.html` |
| Contact | `pages/contact.html` |
| FAQ | `pages/faq.html` |
| Testimonials | `pages/testimonials.html` |

## JavaScript Features

All interactivity is in `assets/js/main.js`:

- Navbar scroll + mobile menu
- Scroll reveal animations (`data-reveal`)
- Hero typing effect (`data-text-type`)
- Migration modal (`data-open-migration-modal`)
- FAQ accordion (`data-faq-item`)
- Contact form success state
- Smooth scroll (Lenis CDN)

Icons: Lucide via CDN.

## Deploy

Upload the entire project folder to any static host (Netlify, GitHub Pages, Apache, Nginx, etc.).

### Coolify (Docker)

This repo includes a **`Dockerfile`** (nginx) so deployment does **not** need Node/Nixpacks or `apt-get` during build.

1. In Coolify → your app → **Build Pack**: choose **Dockerfile** (not Nixpacks).
2. Push/commit these files and redeploy.
3. Exposed port: **80**.

If build still uses Nixpacks, switch build pack to Dockerfile manually; the previous failure was Ubuntu mirror sync during `apt-get` inside Nixpacks, not your site code.
