# ATI2000 Corporate Website

A premium, multilingual corporate website for ATI2000 with admin functionality for equipment management.

## Features

- 🌐 Multilingual support (English, Korean, Chinese Simplified)
- 🎨 Premium burgundy/wine red design theme
- 📱 Fully responsive (desktop, tablet, mobile)
- 🔐 Admin panel for equipment management
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 SEO-friendly and accessible

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   ├── admin/             # Admin panel
│   └── api/               # API routes
├── components/            # React components
├── data/                  # JSON data files
├── lib/                   # Utilities and helpers
├── messages/              # i18n translation files
└── public/                # Static assets
```

## Adding Equipment

1. Navigate to `/admin` (default password: `admin123`)
2. Click "Add New Equipment"
3. Fill in the form with:
   - Title (English, Korean, Chinese)
   - Description (multilingual)
   - Specifications
   - Upload images
4. Click "Save"

Equipment data is stored in `data/equipment.json`.

## Editing Multilingual Content

Translation files are located in `messages/`:
- `messages/en.json` - English (base)
- `messages/ko.json` - Korean
- `messages/zh.json` - Chinese Simplified

Edit these JSON files to update content across the site.

## Changing Theme Colors

Edit `tailwind.config.ts` to modify the color palette:
- `burgundy.*` - Burgundy color variants
- `wine.*` - Wine red color variants
- `primary.*` - Primary color scheme

## Admin Access

Default credentials:
- Username: `admin`
- Password: `admin123`

**Important**: Change these credentials in production by modifying `app/admin/login/page.tsx`.

## Build for Production

```bash
npm run build
npm start
```

## License

Proprietary - ATI2000
