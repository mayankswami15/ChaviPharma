# Chavi Pharmaceuticals — Official Website

Official website for **Chavi Pharmaceuticals**, a growing pharmaceutical company focused on quality healthcare products, franchise/PCD opportunities, and distribution partnerships.

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the root directory (refer to `.env.example`):
```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 🌐 Deploying to Netlify

1. **Connect Repository:** Push this repository to GitHub and import it into [Netlify](https://app.netlify.com/).
2. **Build Settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
3. **Environment Variables:**
   - Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in Netlify **Site configuration → Environment variables**.
4. **Deploy!** Netlify will automatically build and publish your site with security headers and full Next.js routing support.

---

## 📁 Project Structure

```
chavi-pharma/
├── public/                 # Static assets (logo, product photos, favicon)
│   ├── favicon.ico
│   ├── favicon.png
│   └── images/
│       ├── logo.png
│       └── products/       # Front & slideshow product photos
├── src/
│   ├── app/                # Next.js App Router (pages & metadata)
│   ├── components/         # Reusable UI components
│   │   ├── forms/          # Web3Forms enquiry form
│   │   ├── home/           # Homepage sections
│   │   ├── layout/         # Navbar, Footer, MobileNav, WhatsAppFloat
│   │   └── products/       # ProductCard & Zoomable Lightbox Gallery
│   ├── data/               # Product catalogue, categories & company info
│   ├── lib/                # Utilities and constants
│   └── types/              # TypeScript types
├── netlify.toml            # Netlify deployment & HTTP security headers
└── package.json
```
