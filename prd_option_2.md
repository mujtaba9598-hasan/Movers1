# Product Requirements Document (PRD): Relocation Services Website

## 1. Project Overview & Core Aesthetic
- **Niche:** Premium Relocation & Moving Services (Movers and Packers in Dubai).
- **Design Aesthetic:** European Style (Clean, minimalist, elegant, highly professional, clutter-free).
- **Recommended Tech Stack:** Next.js (React) + Tailwind CSS + Framer Motion (Ideal for AI-assisted development, ultra-fast performance, SEO, and complex smooth animations).
- **Color Palette:** Strictly based on the following warm, earthy grey/taupe shades:
  - Primary / Background Accents: `#DAD9D8`, `#B9B8B6`
  - Midtones / Secondary Elements: `#898681`
  - Typography / High Contrast Accents: `#58534E`, `#282623`
- **Core Directive:** Do not assume specific layouts or strict UI placement. The goal is to ensure the following elements and data are visibly integrated into the design.

## 2. Essential Contact & Basic Data
The following elements must be easily accessible, prominently placed, and visible across the website (e.g., headers, footers, or floating elements):
- **Phone Number / Call to Action Button**
- **WhatsApp Integration** (Floating action button)
- **Email Address:** `fastmover970@gmail.com`
- **Service Area:** Dubai (and all 7 Emirates)

## 3. UI/UX Interaction Requirements
The website must feel modern and highly interactive. The following features are mandatory:
- **Hover Effects:** Pronounced, smooth hovering effects on interactive elements, especially buttons and links.
- **Card Layouts:** Use cards to display Services and "Why Choose Us" features.
- **Card Effects:** Cards must have interactive transitions (e.g., lift on hover, subtle shadow expansion, or border highlight).
- **Animations:** Elements must have enter-animations on scroll (fade-in, slide-up) to make the site feel alive.
- **Backgrounds:** Modern, clean background styling (e.g., subtle patterns, soft gradients, or clean solid sections) that complement the earthy grey/taupe theme.
- **Responsiveness:** Must be perfectly responsive across Mobile, Tablet, and Desktop views.

---

## 4. Site Architecture & Page Structure

### Page 1: Home
The main landing page must contain the following sections in a logical flow:
- **Hero Section:** 
  - Headline: "Moving Your World, Scratchlessly" (Must feature a signature-style underline or swoosh under "Scratchlessly").
  - Sub-headline/SEO: Dubai Movers and Packers.
  - Primary Call-to-Action (Get a Quote / Contact).
- **Statistics / Trust Indicators (Bar or Grid):**
  - 1400+ Total Moves
  - 1000+ Residential
  - 400+ Commercial
  - 100% Damage-free
  - 35+ Staff
- **Brief About Us Snapshot:** A short introductory paragraph leading to the main About page.
- **Why Choose Us:** 4 premium features highlighted (e.g., Elite Care, Precision, Accountability, Speed).
- **Our Meticulous Relocation Process:** 
  - Packing Delicate Items (Specialized care, multi-layer bubble wrap).
  - Commercial & Residential (Villas, offices, narrow corridors).
  - Strategic Inventorying (Counting, numbering on clipboards, zero misplaced items).
- **Our Work Gallery:** A visual section displaying images of the moving process, fleet, and packing quality.

### Page 2: Services
This page must detail the exact services offered. Each service should be presented distinctly (e.g., inside an interactive card) and include relevant visual cues or icons.
- **Residential Moving:** Luxury villas, apartments, and flats.
- **Commercial & Office Relocation:** Safe transport of IT equipment, heavy lifting, and navigating complex office layouts.
- **Packing & Unpacking:** Elite packing staff, specialized moving gloves, handling of expensive art, crystals, and antiques.
- **Professional Handymen & Reassembly:** Rejoining, assembling, and setting up furniture/items perfectly at the new delivery location (incorporate the "handymen" concept here).
- **Recovery Service:** Fast and reliable vehicle/item recovery services.

### Page 3: About Us
A dedicated page to build trust and authority.
- **Company History & Mission:** The ethos behind the scientific, zero-damage approach.
- **Our Team:** Highlighting uniformed, highly trained professionals.
- **Safety & Accountability:** Detailed explanation of the strict inventory process, use of clipboards, and guarantee of flawless execution.

### Page 4: Contact Us
- **Contact Form:** Fields for Name, Phone, Moving From, Moving To, and Message.
- **Direct Contact Info:** Email, Phone, WhatsApp.
- **Location/Map:** Visual map or address snippet highlighting Dubai / UAE presence.

## 5. Post-PRD Additions & Premium Enhancements
The following features were added during development to elevate the project beyond the initial scope:
- **Interactive Splash/Landing Screen:** A new root (`/`) entry point featuring the company logo and two distinct layout options (Option 1 & Option 2), with dynamic hiding of global navigation elements.
- **WhatsApp-Integrated Quote Generator:** A multi-step interactive quote builder on the Home page that collects move details and formats a direct WhatsApp message.
- **Advanced Scrollytelling Animations:** Complex Framer Motion scroll animations (sticky elements, zoom/fade effects) in the hero section replacing static layouts.
- **Glassmorphism UI & Art Direction:** Frosted glass overlays, blur effects, and complex layered layouts used extensively (especially on Services and Contact pages) for a high-end luxury feel.
- **Dynamic Global Routing:** Navbar, Footer, and Floating Action Buttons are aware of the active path, automatically hiding on the splash screen and dynamically routing the "Home" link to `/option1`.
- **Strict Viewport Locks (Overflow-X Control):** Global Tailwind locks (`overflow-x-hidden`) implemented to prevent horizontal scrolling on mobile devices caused by complex animations.
