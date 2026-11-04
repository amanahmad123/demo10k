# XYZ Fitness — Premium Gym Website

A responsive React + Vite website for XYZ Fitness, positioned for local enquiries in Ghaziabad, Uttar Pradesh.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Included
- Home, About, Programs, Trainers, Membership, Gallery, Contact, FAQ, Privacy, Terms and 404 routes
- Responsive navigation and dark/light theme toggle
- WhatsApp and click-to-call enquiries using +91 95288 76007
- Ghaziabad-focused page metadata and HealthClub structured data
- Sitemap generation during production build
- Accessible labels, keyboard focus styles and reduced-motion support

## Required before publishing
This is a customisable demo website, not a verified listing for a real gym address. Before launch, replace sample trainer names/photos and illustrative membership prices, confirm opening hours and services, add the exact street address, add the real domain to `canonicalBase` in `src/data/site.js`, and verify the Google Maps destination. Update `public/robots.txt` and regenerate the sitemap after setting the domain. Do not claim reviews, certifications, facilities or awards unless XYZ Fitness can substantiate them.

The enquiry form opens WhatsApp with a prefilled message; it does not store submissions in a database. A visitor must press Send in WhatsApp to complete the enquiry.

## Gallery photos
Place your gym photos in `src/assets/gallery/` (JPG, JPEG, PNG, WebP or AVIF). The Gallery page automatically imports all matching files at build time. If the folder is empty, the site displays its sample gallery photos. Use descriptive filenames for image accessibility and SEO.

## Theme switch
The light/dark switch is persistent and uses a single shared colour-token system. Light mode uses warm off-white, ink and muted terracotta; dark mode uses deep slate, soft ivory and warm coral. The theme is applied to the page root to prevent mismatched component colours.
