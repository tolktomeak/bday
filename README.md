# A Little Birthday Magic ♡

A complete nine-screen birthday celebration of friendship, built with React, Vite, Tailwind CSS, Framer Motion, Lucide React, and canvas-confetti. No backend, account, or paid API is needed.

## Run locally

Install Node.js 20.19+ (or a supported newer LTS), then open a terminal in this folder:

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite. Use a local server; opening index.html directly does not run a Vite application.

## Personalize

Edit `src/config/birthdayConfig.js`. Change `recipientName`, `senderName`, the birthday heading, letter, scratch message, gifts, and final message. The letter preserves newlines.

Put your photographs in `public/photos/`, for example `photo1.jpg`, `photo2.jpg`, and `photo3.jpg`. In the config, use `/photos/photo1.jpg` (omit `/public`). Each photo supports `src`, `caption`, `note`, `alt`, optional `position` (CSS object-position), and optional `fit` (`cover` or `contain`). Portrait images work best. Missing photos automatically display locally rendered flower illustrations labeled as placeholders. The project is personalized for Monica and includes her six supplied photos as `monica-1.jpg` through `monica-6.jpg`. There is no upload service.

`enableMusic` enables the opt-in sound control and interaction chimes. Music is an original soft synthesized melody, so there are no external audio downloads or licensing requirements. Browsers require user interaction before audio starts. `enableConfetti` controls celebrations. Reduced-motion preferences disable ambient animations and confetti automatically.

Set `enableMicrophoneBlow: true` to show the optional microphone button on the cake. It asks permission only when tapped, works on HTTPS or localhost, and detects sustained input volume. Ambient noise may also trigger it. It stops recording after success, after 12 seconds, or when leaving the cake screen. Audio is processed locally and never saved or uploaded. Tapping candles and the Blow all candles button always work without microphone permission.

## The journey

1. Welcome with an illustrated teddy, floating hearts, and surprise opening.
2. Opening envelope with a typewritten letter.
3. Birthday Polaroid reveal with confetti.
4. Five individually extinguishable candles, natural flame and smoke animation, a two-pass silver knife, a visible cut cavity, and a layered slice that springs onto its own plate. Take a bite or relight the cake with Make another wish.
5. Selectable photo memories and captions.
6. Mouse/touch scratch canvas with a keyboard-accessible reveal alternative.
7. Three opening gift boxes with personal messages.
8. Eight moving hearts to collect, keyboard controls, and an optional skip.
9. Final birthday wish, downloadable text keepsake, and full restart.

Use Back/Next or the nine progress dots to revisit any screen. Swipe horizontally on a noninteractive part of the screen on touch devices. Progress remains while revisiting screens, and resets on reload or Relive the magic. Every interactive control is a native button with a focus indicator and an accessible name. Fullscreen is offered on supported desktop browsers.

## Production build

```sh
npm run build
npm run preview
```

The deployable output is `dist/`. Google Fonts are bundled locally through Fontsource; there are no external font requests. All illustrations and the audio melody are generated locally by the application.

## Deploy on Vercel

1. Push this project folder to a Git repository, then import it in Vercel.
2. Select **Vite** as the framework. If the repository contains the enclosing `bday` folder, set the Root Directory to `birthday-surprise`.
3. Use build command `npm run build` and output directory `dist` (also set in `vercel.json`).
4. Deploy. No environment variables are required. Add your own name/photos before sharing the link.

Alternatively, from this folder run `npx vercel` and follow its sign-in/project prompts, then `npx vercel --prod` for production. A Vercel account is required. Deployment is not performed by the local build command.

## Browser regression checks

With the local dev server running at `http://127.0.0.1:5187`, run `npm test`. The tests use Playwright with installed Microsoft Edge by default. Set `BROWSER_CHANNEL=chrome` to use installed Chrome, or install an appropriate Playwright browser and adjust the launch setting in `tests/journey.test.mjs`. Set `TEST_URL` to check a different local or hosted instance.

Tests cover all nine screens, individual and all-candle blowing, cutting, real mouse/touch scratching, gift reveals, heart collection, the keepsake download, navigation state, restart, keyboard fallback, reduced motion, and phone-width overflow. Screenshots are written to `test-results/`.

## Source layout

`src/components/` contains one component per screen plus shared artwork and controls. `src/hooks/useAudio.js` owns the audio lifecycle. `src/App.jsx` owns journey state and navigation. `src/index.css` contains the responsive visual system. `src/components/CakeArtwork.jsx` draws the cake, `src/components/cake.css` styles its stage, and `src/motion.css` adds shared animation details. Tailwind v4 is integrated through its Vite plugin.

The source ZIP excludes dependencies, npm caches, and browser screenshots. Run `npm ci` after extracting it. A production build is included separately in `dist/` inside the source project.
