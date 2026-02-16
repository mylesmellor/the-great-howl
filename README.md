# The Great Howl

Alternative-folk band website. React + Vite + Tailwind CSS v4.

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Deploy to Vercel

```bash
npx vercel
```

Or connect the Git repo to [vercel.com](https://vercel.com) — it auto-detects Vite.

Build command: `npm run build`
Output directory: `dist`

## Adding Suno Embeds

In `src/components/Music.jsx`, each `TrackPlaceholder` component has a placeholder `div` for embeds. Replace the inner embed area with a Suno `<iframe>`:

```jsx
<iframe
  src="https://suno.com/embed/YOUR_TRACK_ID"
  width="100%"
  height="120"
  frameBorder="0"
  allow="autoplay"
  style={{ filter: 'grayscale(30%) sepia(10%) brightness(0.9)' }}
/>
```

Update the `TRACKS` array with real titles and dates.

## Adding Streaming Links

Replace the `href: '#'` values in the `PLATFORMS` array in `Music.jsx` and the `SOCIAL` array in `Connect.jsx` with real URLs.

## Customization

- **Colors**: All brand colors are defined as CSS theme variables in `src/index.css` under `@theme`
- **Fonts**: Loaded from Google Fonts in `index.html`. To self-host, download `.woff2` files and update the CSS
- **Email form**: Connect to Mailchimp/ConvertKit/Buttondown by updating the `<form>` action in `Connect.jsx`
- **Grain intensity**: Adjust `opacity` in `src/index.css` under `#grain-canvas` (default: 0.055)

## Project Structure

```
src/
  components/
    GrainOverlay.jsx   — Canvas-based animated film grain
    Hero.jsx           — Full-viewport hero with atmospheric layers
    Story.jsx          — Band origin story
    Music.jsx          — Track placeholders + streaming links
    Manifesto.jsx      — Pull-quote statement
    Connect.jsx        — Social links + email signup
    Footer.jsx         — Minimal footer
    RopeCircle.jsx     — SVG decorative element
    useFadeIn.js       — IntersectionObserver scroll animation hook
  App.jsx
  main.jsx
  index.css            — Tailwind + theme + base styles
```
