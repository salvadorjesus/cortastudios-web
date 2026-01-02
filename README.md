# Corta Studios

Experimental games website - Static HTML, CSS, and JavaScript version.

This is a static version of the Corta Studios website, migrated from a dynamic PHP backend to work with GitHub Pages.

## Features

- Responsive design
- jQuery-based animations and interactions
- Fancybox gallery
- Supersized background slideshow
- Google Maps integration

## Structure

```
├── index.html           # Main page
├── public/
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── image/          # Images and icons
├── image/              # Background and screenshot images
├── js/                 # Inline scripts
└── css/                # Inline styles
```

## Local Development

Simply open `index.html` in a browser or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

Then navigate to `http://localhost:8000`

## Limitations

This is a static version, so the following features are not available:

- Contact form (requires backend)
- Newsletter subscription (requires backend)
- Twitter feed (requires PHP)

## Deployment

This site is designed to be deployed on GitHub Pages or any static hosting.

---

**Original site:** https://cortastudios.com
