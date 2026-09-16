# Rakesh Kuntigorla — Portfolio

A static, dependency-free portfolio site (HTML/CSS/vanilla JS). No build step, no backend.

## Structure
```
portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── profile-photo.jpg
└── README.md
```

## Run locally
Just open `index.html` in a browser, or serve it:
```
cd portfolio
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deploy — GitHub Pages
1. Create a new GitHub repository and push the contents of this folder to it.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save. Your site will be live at `https://<username>.github.io/<repo-name>/` within a minute or two.

## Deploy — Cloudflare Pages
1. Push this folder to a GitHub repository.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository. Build command: leave blank. Output directory: `/` (root).
4. Deploy.

## Editing content
- All text content lives directly in `index.html`.
- The "What Can I Build?" explorer and the "Tell Me What You Need" configurator are both data-driven from arrays near the top of `script.js` (`SERVICE_DATA`, `TYPE_OPTIONS`, `FEATURE_OPTIONS`) — edit those arrays to add or change options.
- Colors, fonts and spacing are defined as CSS custom properties at the top of `style.css` (`:root`).
- Contact number and email are set in two places: the `#contact` section and the floating WhatsApp button in `index.html`.
