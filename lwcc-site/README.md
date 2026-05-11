# London Women Chess Club — Website

A redesigned multi-page site for LWCC.

## Folder structure

```
lwcc-site/
├── index.html          ← Home page
├── about.html          ← About the club
├── events.html         ← Upcoming + recurring events
├── courses.html        ← Coaching and courses
├── gallery.html        ← Photo gallery
├── blog.html           ← Blog index
├── safeguarding.html   ← Safeguarding policy
├── contact.html        ← Get Involved / contact form
├── css/
│   └── styles.css      ← Shared styles for all pages
└── images/             ← Drop your own photos here
```

## How to preview

Open any `.html` file in your browser (start with `index.html`). All pages link to each other so you can click around.

## How to edit

- **Colours, fonts, spacing:** all in `css/styles.css` (look at the `:root` variables at the top — change the burgundy/cream/brass values to retheme the whole site at once).
- **Page content:** each `.html` file contains its own content. The nav and footer are duplicated at the top and bottom of every page — if you change them, change them in all files (or use a static site generator later).
- **Photos:** the homepage and gallery currently pull a couple of images from your existing site URL. To use your own photos, drop them in `/images/` and update the `<img src="...">` references in the relevant HTML files.

## Design tokens

| Token | Value | Where it's used |
|---|---|---|
| `--burgundy` | `#6B2D3A` | Primary brand colour, buttons, headings |
| `--burgundy-deep` | `#4A1E28` | CTAs, hover states |
| `--cream` | `#F7F1E8` | Background |
| `--brass` | `#B8924E` | Accents, dividers |
| `--blush` | `#E8C8C0` | Soft accents, tags |

## Fonts

- **Fraunces** — display serif (headings, big numbers)
- **DM Sans** — body sans-serif

Both loaded from Google Fonts in each page's `<head>`.

---

Made with ♛ for LWCC.
