# PharmaVital

A responsive pharmaceutical business website built with plain HTML, CSS and JavaScript. PharmaVital presents a pharmaceutical company's product catalog, vendor network and company information through a clean, modern interface designed to feel professional on both desktop and mobile.

## Overview

PharmaVital is a multi-page static website for a fictional pharmaceutical company. It showcases the company's medicine catalog, individual product detail pages, a team/employee section, a network of pharmacy vendors, and a contact page with a call-back request form — all wrapped in a consistent, polished design system.

## Key Features

- **Modern, cohesive UI** — a custom design system (colors, typography, spacing, shadows) applied consistently across every page
- **Medicine catalog** — a browsable product carousel with dedicated detail pages for each medicine (price, description, active ingredients)
- **Employee/team section** — individual profile pages highlighting each team member's role and projects
- **Vendor directory** — a card-based grid of partner pharmacies that carry the company's products
- **Contact & call-back form** — a request form with client-side submission feedback
- **Responsive navigation** — a sticky header with a mobile-friendly collapsible menu
- **Fully responsive layout** — tested across desktop and mobile viewports

## Technologies Used

- HTML5 & CSS3
- JavaScript (vanilla)
- [Bootstrap 4](https://getbootstrap.com/) for the grid system and components
- [jQuery](https://jquery.com/) (required by Bootstrap's JS)
- [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/) for the homepage sliders
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) (Poppins & Roboto)

No build tools, bundlers, or frameworks beyond the above — it's a static site that runs directly in the browser.

## Running Locally

Since the site is built with plain HTML/CSS/JS, you just need to serve the `medion` folder with any static file server (opening the HTML files directly via `file://` will work for most pages, but a local server is recommended so relative paths and the search/contact forms behave correctly).

**Option 1 — Python**

```bash
cd medion
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

**Option 2 — VS Code Live Server**

Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, open the `medion` folder in VS Code, and click **Go Live**.

**Option 3 — Node**

```bash
cd medion
npx serve
```

## Project Structure

```
medion/
├── index.html          # Home page
├── about.html          # About the company
├── buy.html            # Medicine catalog
├── Vendor.html         # Vendor/pharmacy partners
├── contact.html        # Contact & call-back form
├── Employee1-4.html    # Individual employee profile pages
├── Amoxy.html, Panadol.html, etc.  # Individual medicine detail pages
├── css/                # Stylesheets (Bootstrap, custom theme, responsive rules)
├── js/                 # jQuery, Bootstrap JS, and custom scripts
└── images/             # Site imagery and icons
```

## License

This project is licensed under the terms of the [MIT License](LICENSE).
