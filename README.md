# Wild Laughs — Website

The official website of the YouTube channel **Wild Laughs** (@wildlaughsfunny):
funny animals, cute baby animals & amazing animal facts, every day.

Plain hand-written HTML/CSS/JS — **no build step, no frameworks** — so it loads
fast even on slow connections. Videos are click-to-play facades (a thumbnail
image; the YouTube player loads only when a visitor taps play).

## Publishing

This folder is the root of the GitHub **user site** repo
`naseemkawish786.github.io`, so the site root is `/` and GitHub Pages serves it
at <https://naseemkawish786.github.io/>. Commit and push the folder contents —
there is nothing to compile.

## How the site is organised

```
index.html                  Home: hero, latest videos, best of, Shorts strip, fact of the day
videos/index.html           Long videos grid with category filter
shorts/index.html           Vertical grid of all Shorts
blog/index.html             Blog cards
blog/<slug>/index.html      One article per blog post (video facade + written facts)
about/index.html            Channel story, what we post, daily schedule, socials
contact/index.html          Business contact (email as text — no form backend)
app/index.html              "Get the app" page (PWA install button + manual steps)
404.html                    Branded not-found page
manifest.json, sw.js        PWA manifest + service worker (offline shell)
sitemap.xml, robots.txt     SEO
assets/
  style.css                 The one shared stylesheet
  videos.js                 Video catalogue (VIDEOS + SHORTS arrays) and card renderers
  i18n.js                   English/Urdu dictionary + language toggle
  main.js                   Click-to-play facades, fact of the day, service worker, install prompt
icons/                      PWA + Apple touch icons (generated paw/"WL" marks)
```

Every page shares the same header (compact dark-green tab strip — **not**
sticky) and footer. The header logo links to the channel with the subscribe
prompt; the Instagram link lives at the very bottom of the footer.

## How to add a video

1. Open `assets/videos.js`.
2. Add one line to `VIDEOS` (long videos) or `SHORTS`:

   ```js
   { id: "YOUTUBE_ID", title: "This Animal Did Something Amazing! 🐾", category: "Pets" }
   ```

   Categories used so far: `Pets`, `Wildlife`, `Extinct` (long) and `Pets`,
   `Wildlife`, `Ocean`, `Birds` (Shorts).
3. Save. The home page, Videos page and Shorts page update automatically —
   no other file changes needed. For a brand-new daily video, also consider a
   blog post (below).

## How to add a blog post

1. Create `blog/<new-slug>/index.html` by copying an existing post and editing
   the title, meta description, headline, video ID and text.
2. Add a card for it in `blog/index.html`.
3. Add its URL to `sitemap.xml`.
4. Add its path to the `SHELL` list in `sw.js` so it works offline, and (when
   files change) bump the `CACHE` version name in `sw.js` (e.g. `wildlaughs-v2`)
   so visitors get the fresh copy.

## Languages

The header's اردو/English button switches the whole interface. Strings live in
`assets/i18n.js` (`I18N.en` / `I18N.ur`); any element with
`data-i18n="some.key"` is translated automatically. Home and About are fully
translated; blog articles are English (add keys if you want them translated).

## Rules kept on purpose

- **No channel statistics** (no subscriber/view counts) anywhere on the site.
- **No live iframes on page load** — always the thumbnail facade.
- Instagram appears only at the very bottom of the footer.
- Keep it fast: system fonts only, no external CSS/JS.
