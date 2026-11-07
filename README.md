# Gaurav Najpande — research website

Multi-page, plain HTML/CSS GitHub Pages site. The homepage contains the introduction and news; other sections live on their own pages.

## Pages
- `index.html`: About & news
- `publications.html`: Papers and preprints
- `projects.html`: Research engineering and other projects
- `experience.html`: Work and education
- `photography.html`: Photo gallery (placeholders until personal photos are provided)
- `blog.html`: Writing index
- `emnlp-2026.html`: EMNLP field report **draft** (contains personal anecdote/photo placeholders)
- `styles.css`: Shared styling

## Update
Edit the HTML files directly and push to `main` after reviewing the PR. GitHub Pages serves them as static files; no build is required.

## Add photographs
Upload photos into `assets/photos/` (create the directory), then replace `.photo-slot` placeholder divs in `photography.html` with `<figure><img src="assets/photos/your-file.jpg" alt="Descriptive photo caption"><figcaption>Caption</figcaption></figure>`. Style the figures in `styles.css`. Do not publish the draft photo blocks as if they are real pictures.

## Before publicizing the EMNLP blog
Replace the two `[Add ...]` prompts and the two image placeholders in `emnlp-2026.html` with real photos and memories.

## Sources / corrections
Publication entries were checked against ACL Anthology, arXiv, NeurIPS 2026 track naming, and the bioRxiv DOI. Experience and projects were drawn from the user's supplied master CV; some timeline dates were supplied directly by the site owner. Verify individual dates if needed.
