# lukasez2.github.io

Personal portfolio website.

## Structure

```
├── index.html      # Main page
├── css/
│   └── styles.css  # Styles with CSS variables for easy theming
├── js/
│   └── main.js     # Smooth scroll & animations
└── assets/         # Images and other assets
```

## Local Development

To preview locally, run a simple HTTP server:

```bash
# Python 3
python3 -m http.server 8000

# Then open http://localhost:8000 in your browser
```

## Customization

Edit the CSS variables in `css/styles.css` to change colors, fonts, and spacing:

```css
:root {
    --color-bg: #fafafa;
    --color-text: #1a1a1a;
    --color-accent: #1a1a1a;
    /* ... */
}
```

## Deployment

Push to the `main` branch and GitHub Pages will automatically deploy to:  
**https://lukasez2.github.io**
