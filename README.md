# UGC International

> **United Global Commerce LTD** — UK-based international trade house and logistics partner specializing in machinery, industrial equipment supply, spare parts sourcing, and multimodal project cargo freight across six continents.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-v12-FF0055?style=flat&logo=framer&logoColor=white)](https://motion.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Cloudflare Turnstile](https://img.shields.io/badge/Security-Cloudflare_Turnstile-F38020?style=flat&logo=cloudflare&logoColor=white)](https://www.cloudflare.com/products/turnstile/)

---

## Live Website

- **Production URL:** [https://ugc-int.com](https://ugc-int.com)

---

## Features

- **Editorial Luxury & Industrial UI:** Crafted with bespoke color palettes (British Racing Green, Gold accents, slate and stone tones) and refined serif typography.
- **High-Performance React 19 + Vite:** Instant page loads, optimized bundle splitting, and smooth micro-animations powered by `motion/react`.
- **Case Studies Showcase:** Interactive gallery featuring delivered global trade and multimodal freight projects.
- **Secure Contact & Quotation Pipeline:**
  - Automated inquiry dispatch with category scoping.
  - SMTP email notifications via `nodemailer`.
  - Bot protection via Cloudflare Turnstile CAPTCHA.
- **UK & International Legal Compliance:** Integrated modals and settings for Terms of Trade, Privacy Policy, and GDPR/UK PECR compliant Cookie Consent.
- **Advanced SEO & Open Graph Engine:**
  - Semantic HTML5 structure with single `H1` hierarchy.
  - Full Schema.org JSON-LD graph (`Corporation`, `WebSite`, `WebPage`).
  - Open Graph and Twitter Card tags.
  - Validated `sitemap.xml` and `robots.txt`.

---

## Tech Stack

### Frontend
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Motion (Framer Motion)](https://motion.dev/)

### Backend & Services
- **Runtime:** Node.js (ES Modules)
- **Server:** [Express](https://expressjs.com/)
- **Email Delivery:** [Nodemailer](https://nodemailer.com/)
- **CAPTCHA & Security:** Cloudflare Turnstile

---

## Project Structure

```text
ugc-international/
├── public/
│   ├── projects/            # Representative project imagery
│   ├── favicon.png          # High-res site favicon & apple-touch icon
│   ├── logo.png             # Official company logo
│   ├── og-image.png         # OpenGraph social share card (1200x1200)
│   ├── robots.txt           # Search engine indexing rules
│   └── sitemap.xml          # XML sitemap for search crawlers
├── src/
│   ├── components/
│   │   ├── About.jsx        # Company overview, mission & key metrics
│   │   ├── Contact.jsx      # Interactive quotation & contact form
│   │   ├── CookieBanner.jsx # GDPR/UK cookie consent manager
│   │   ├── Footer.jsx       # Global footer, company details & legal links
│   │   ├── Geography.jsx    # Global trade corridors & regional presence
│   │   ├── Header.jsx       # Sticky navigation bar with mobile drawer
│   │   ├── Hero.jsx         # Main hero header with luxury display title
│   │   ├── LegalModals.jsx  # Privacy Policy, Cookie Policy & Terms modals
│   │   ├── Projects.jsx     # Representative trade & logistics case studies
│   │   ├── Services.jsx     # Core capabilities (Trade, Machinery, Logistics)
│   │   └── WhyUs.jsx        # Strategic advantages & value proposition
│   ├── App.jsx              # Main layout & scroll reveal wrapper
│   ├── index.css            # Tailwind v4 import & custom theme extensions
│   └── main.jsx             # React DOM root entry point
├── .env.example             # Template for required environment variables
├── index.html               # HTML entry point with Schema.org & Meta tags
├── package.json             # NPM dependencies and scripts
├── server.js                # Express API server for inquiries & Turnstile
└── vite.config.js           # Vite configuration with Tailwind plugin
```

---

## Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### 1. Clone the Repository

```bash
git clone https://github.com/SneakyMouse1/ugc-int.git
cd ugc-int
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory by copying `.env.example`:

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```ini
# SMTP Mail Configuration
SMTP_HOST=smtp.yourmailserver.com
SMTP_PORT=587
SMTP_USER=contact@ugc-int.com
SMTP_TOKEN=your_smtp_password_or_app_token
CONTACT_EMAIL=British.UGC@gmail.com

# Cloudflare Turnstile Security
TURNSTILE_SECRET_KEY=0x4AAAAAA...your_secret_key
```

---

## Running the Application

### Development Mode

Start the Vite frontend development server:

```bash
npm run dev
```

In a separate terminal, run the backend API server:

```bash
node server.js
```

The frontend will be available at `http://localhost:3000` (or configured port), and the API runs on `http://localhost:5001`.

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

The output will be generated inside the `dist/` directory, ready to be served by Nginx or your preferred static file host.

### Preview Production Build Locally

```bash
npm run preview
```

---

## API Endpoints

| Method | Endpoint | Description | Payload |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/contact` | Submits quotation/contact request | `{ name, email, company, category, message, turnstileToken }` |
| `GET` | `/api/health` | Health check endpoint | Returns `{ ok: true }` |

---

## Corporate & Legal Information

- **Company Name:** United Global Commerce LTD
- **Trading As:** UGC International
- **Company Number:** 15831457
- **EORI Number:** GB099121887000
- **Registered Office:** 347 Barking Road, London, E13 8EE, United Kingdom

---

## License

Proprietary. All rights reserved © United Global Commerce LTD.
