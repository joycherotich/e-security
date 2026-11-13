# E-Security Guard Services Ltd: website

React 18 + Vite + Tailwind CSS 3.

## Run it
```bash
npm install
npm run dev      # development at http://localhost:5173
npm run build    # production files in /dist (upload these to your host)
```

## Edit the content
- `src/data.js`: phone, email, address, PSRA status, careers roles, services and other copy.
- `public/images/`: logo and guard photos (cropped from the company flyer). Replace
  `team.jpg` and `guard-*.jpg` with your own professional photos any time, keeping the file names.

## Important: PSRA wording
`COMPANY.psraStatus` in `src/data.js` currently reads "PSRA registration in progress".
Once PSRA issues the licence, set `psraStatus`, `psraNumber` and `companyRegNumber`;
the footer updates automatically.

## Forms
The quote and job-application forms open the visitor's email app (mailto) or WhatsApp with the
details pre-filled. No server is needed. To receive submissions directly, connect the forms
to a service such as Formspree or your own API.

## Adding real photos
1. Put your photos in `public/images/` (hero: landscape, about 1600x1000; guards: portrait, about 800x1000).
2. Set the paths in the `IMAGES` object at the bottom of `src/data.js`.
Until you do, the hero shows the logo panel and the guards photo band is hidden.

## Font
Poppins is bundled with the project (`@fontsource/poppins`), so it loads without Google Fonts.

## Hero photo
`public/images/hero.jpg` is a free Unsplash photo (Unsplash licence: free for commercial use, credit appreciated).
Replace it with a photo of your own guards when you have one; set `IMAGES.hero` to `''` in `src/data.js` to go back to the logo panel.
