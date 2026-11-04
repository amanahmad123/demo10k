# XYZ Fitness — Premium Gym Website

A responsive React + Vite website for XYZ Fitness, positioned for local enquiries in Ghaziabad, Uttar Pradesh.

## Run locally
```bash
npm install
npm run dev
```

## Build and preview
```bash
npm run build
npm run preview
```

## Deploy to this GitHub Pages repository
This project is configured for the repository `amanahmad123/demo10k` and uses the project-site base path `/demo10k/`.

1. Extract this ZIP and open the `xyz-fitness` folder in VS Code.
2. In the terminal, run:
   ```bash
   npm install
   npm run deploy
   ```
   The deploy script builds the site and publishes the generated `dist` folder to the `gh-pages` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **gh-pages** and folder **/(root)**, then Save.
6. Visit: https://amanahmad123.github.io/demo10k/

If GitHub Pages is already set to another branch/folder, change it to `gh-pages` / `/(root)`.

## Included
- Home, About, Programs, Trainers, Membership, Gallery, Contact, FAQ, Privacy, Terms and 404 routes
- Responsive navigation and dark/light theme toggle
- WhatsApp and click-to-call enquiries using +91 95288 76007
- Ghaziabad-focused page metadata and HealthClub structured data
- Sitemap generation during production build

## Before publishing for a real client
This is a customisable demo website, not a verified listing for a real gym address. Replace sample trainer names/photos and illustrative membership prices, confirm opening hours and services, add the exact street address, set the real canonical domain in `src/data/site.js`, update `public/robots.txt`, and verify the Google Maps destination. Do not claim reviews, certifications, facilities or awards unless the gym can substantiate them.

The enquiry form opens WhatsApp with a prefilled message; it does not store submissions in a database. A visitor must press Send in WhatsApp to complete the enquiry.
