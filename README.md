# PT Sonar Nusantara Utama — Corporate Website

Website resmi PT Sonar Nusantara Utama — **Integrated Marine & Geospatial Technology Solutions Company** dengan 3 unit bisnis utama: Technology Distribution, Marine Project Support, dan Digital Products.

**Live production**: https://sonar-tech-hub.emergent.host

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19 + React Router 7 + Tailwind CSS 3 + shadcn/ui + lucide-react |
| **Backend** | FastAPI (Python 3.11+) + Motor (async MongoDB driver) + Pydantic v2 |
| **Database** | MongoDB (local atau MongoDB Atlas) |
| **Build tools** | CRACO (frontend), Uvicorn (backend), Yarn (package manager) |
| **Fonts** | Outfit + Manrope + IBM Plex Mono (Google Fonts) |

---

## 📁 Struktur Folder

```
emergent/
├── backend/
│   ├── server.py              # FastAPI app + routes (/api/contact, /api/status)
│   ├── requirements.txt       # Python dependencies
│   └── .env                   # (BUAT SENDIRI — lihat "Environment Variables")
│
├── frontend/
│   ├── src/
│   │   ├── App.js             # Router utama
│   │   ├── index.js           # Entry point
│   │   ├── index.css          # Global styles + Tailwind + font imports
│   │   ├── App.css            # (kosong; styling ada di index.css)
│   │   │
│   │   ├── context/
│   │   │   └── LanguageContext.jsx   # State EN/ID toggle (useT() helper)
│   │   │
│   │   ├── components/
│   │   │   ├── layout/               # Header, Footer, Layout (shared shell)
│   │   │   ├── common/               # PageHero, SonarPattern (SVG decorative)
│   │   │   └── ui/                   # shadcn/ui components (button, card, dll)
│   │   │
│   │   └── pages/
│   │       ├── Home.jsx
│   │       ├── About.jsx
│   │       ├── Business.jsx
│   │       ├── TechnologyDistribution.jsx
│   │       ├── MarineProjectSupport.jsx
│   │       ├── DigitalProducts.jsx
│   │       ├── Brands.jsx
│   │       └── Contact.jsx
│   │
│   ├── public/                # Static assets
│   ├── package.json
│   ├── tailwind.config.js
│   ├── craco.config.js
│   └── .env                   # (BUAT SENDIRI — lihat "Environment Variables")
│
└── README.md                  # File ini
```

### Konvensi Penting
- **Backend routes wajib prefix `/api`** — Kubernetes ingress route `/api/*` ke port 8001, sisanya ke frontend port 3000
- **Frontend API calls** harus pakai `process.env.REACT_APP_BACKEND_URL`, jangan hardcode
- **MongoDB collection names** camelCase (`contact_inquiries`, `status_checks`)
- **Bilingual** pakai helper `useT()`: `t("English text", "Teks Indonesia")` — bukan file JSON terpisah

---

## 🚀 Setup Lokal (Untuk Developer)

### Prerequisites
- **Node.js 18+** dan **Yarn**: `npm install -g yarn`
- **Python 3.11+**
- **MongoDB** lokal: [Install MongoDB Community](https://www.mongodb.com/try/download/community) atau pakai [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (cloud, free tier)
- **Git**

### 1. Clone Repository
```bash
git clone https://github.com/dengkulsakit1708/emergent.git
cd emergent
```

### 2. Setup Backend (FastAPI)
```bash
cd backend

# Buat virtual environment (recommended)
python -m venv venv
source venv/bin/activate       # macOS/Linux
# atau: venv\Scripts\activate   # Windows

# Install dependencies
pip install -r requirements.txt

# Buat file .env (lihat section berikutnya)
# Lalu jalankan server:
uvicorn server:app --reload --port 8001
```

Backend akan berjalan di `http://localhost:8001`. Test: buka `http://localhost:8001/api/` — harus return `{"message":"PT Sonar Nusantara Utama API"}`.

### 3. Setup Frontend (React)
Buka terminal baru:
```bash
cd frontend

# Install dependencies (WAJIB pakai yarn, bukan npm)
yarn install

# Buat file .env (lihat section berikutnya)
# Lalu jalankan dev server:
yarn start
```

Frontend akan otomatis buka `http://localhost:3000`. Hot reload aktif — perubahan file langsung ter-refresh.

### 4. Setup MongoDB
**Opsi A — Lokal**: pastikan MongoDB service running di port 27017 (default). Database `sonar_db` akan otomatis dibuat saat contact form pertama disubmit.

**Opsi B — MongoDB Atlas**: dapatkan connection string dari Atlas dashboard, masukkan ke `MONGO_URL` di `backend/.env`.

---

## 🔐 Environment Variables

### `backend/.env`
Buat file `.env` di folder `backend/` dengan isi:
```env
MONGO_URL="mongodb://localhost:27017"
DB_NAME="sonar_db"
CORS_ORIGINS="*"
```

Untuk MongoDB Atlas:
```env
MONGO_URL="mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority"
DB_NAME="sonar_db"
CORS_ORIGINS="http://localhost:3000"
```

### `frontend/.env`
Buat file `.env` di folder `frontend/` dengan isi:
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

Untuk production build, ganti ke URL backend production.

> ⚠️ **JANGAN commit file `.env` ke Git.** File `.gitignore` sudah exclude ini.

---

## 🌐 API Reference

Semua endpoint prefixed dengan `/api`.

| Method | Endpoint | Deskripsi | Body |
|--------|----------|-----------|------|
| GET | `/api/` | Health check | — |
| POST | `/api/contact` | Submit contact form inquiry | `{ name, company?, email, phone?, inquiry_type, message }` |
| GET | `/api/contact` | List semua contact inquiries (untuk admin) | — |
| POST | `/api/status` | Legacy status check endpoint | `{ client_name }` |
| GET | `/api/status` | List status checks | — |

### Contoh Test dengan curl
```bash
curl -X POST http://localhost:8001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "inquiry_type": "Technology Distribution",
    "message": "Halo dari test"
  }'
```

---

## 🌍 Bilingual (EN/ID) System

Tidak pakai i18n library — pakai helper ringan di `src/context/LanguageContext.jsx`:

```jsx
import { useT } from "../context/LanguageContext";

const MyComponent = () => {
  const t = useT();
  return <h1>{t("Contact Us", "Hubungi Kami")}</h1>;
};
```

- Default language: **English**
- Toggle button ada di header (data-testid `lang-toggle`)
- Pilihan tersimpan di `localStorage` key `sonar_lang`

---

## 🎨 Design System

### Warna Brand (di `index.css` sebagai CSS variables)
| Nama | Hex | Kegunaan |
|------|-----|---------|
| Navy | `#071E3D` | Background utama section dark |
| Deep Blue | `#0B2F5B` | Background CTA section |
| Electric Blue | `#00AEEF` | Accent, buttons, links |
| Light Blue | `#EAF7FF` | Background hover, subtle highlights |
| Light Grey | `#F5F7FA` | Background section alternate |
| Dark Text | `#1F2933` | Body text |

### Typography
- **Display / Headings**: Outfit (bold, tight tracking)
- **Body**: Manrope
- **Mono / tech accents**: IBM Plex Mono

### Utility Classes Custom
- `.btn-primary` / `.btn-secondary` / `.btn-outline-navy` — button styles
- `.sonar-card` — card dengan soft shadow + hover lift
- `.eyebrow` — small uppercase label di atas heading
- `.bg-bathymetry` — subtle grid pattern
- `.hero-overlay` / `.hero-overlay-strong` — navy overlay untuk hero image
- `.section-pad` — vertical padding standard
- `.container-x` — max-width container dengan horizontal padding
- `.rise` + `.rise-delay-1..5` — entrance animation

---

## 🧪 Testing

Backend:
```bash
cd backend
# Test manual dengan curl atau Postman (lihat API Reference)
```

Frontend:
```bash
cd frontend
yarn test        # Jest (jarang dipakai, project fokus di UI)
```

E2E testing dulu pakai Playwright via Emergent's testing agent.

---

## 🚢 Production Build

### Backend
Backend production sudah managed oleh Emergent supervisor. Untuk deploy manual (e.g. ke VPS):
```bash
cd backend
pip install -r requirements.txt
gunicorn server:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8001
```

### Frontend
```bash
cd frontend
yarn build      # Hasil di folder build/
```
Deploy folder `build/` ke Vercel, Netlify, Cloudflare Pages, atau static hosting apapun.

---

## 🔄 Git Workflow untuk Adik (Developer)

### Rule Umum
- **Jangan push langsung ke `main`** — selalu buat branch baru
- **1 fitur / bugfix = 1 branch = 1 Pull Request**
- Isi commit message dengan format: `[type]: deskripsi singkat`
  - `feat:` untuk fitur baru
  - `fix:` untuk bug fix
  - `style:` untuk perubahan UI/CSS
  - `refactor:` untuk restructure code tanpa ubah behavior
  - `docs:` untuk update dokumentasi

### Contoh Flow
```bash
# 1. Update main lokal
git checkout main
git pull origin main

# 2. Buat branch baru
git checkout -b feat/solutions-page

# 3. Coding, lalu commit
git add .
git commit -m "feat: add Solutions page with 7 solution sub-sections"

# 4. Push ke remote
git push origin feat/solutions-page

# 5. Buka github.com/dengkulsakit1708/emergent
#    → tab "Pull requests" → "New pull request"
#    → Base: main ← Compare: feat/solutions-page
#    → Isi deskripsi → "Create pull request"

# 6. Owner review → merge ke main
```

### Setelah PR di-merge
```bash
git checkout main
git pull origin main
git branch -d feat/solutions-page   # hapus branch lokal
```

---

## 📌 Roadmap / Backlog

### P1 (High Priority)
- [ ] Solutions page (`/solutions`) dengan 7 solution sub-pages (Offshore Positioning, Hydrographic Survey, dll.)
- [ ] Marine Technologies detail page (`/marine-technologies`) — deep product taxonomy
- [ ] Industries detail page — per-industri (Oil & Gas, Mining, dll.)

### P2 (Medium Priority)
- [ ] Projects / Case Studies page
- [ ] News / Blog CMS
- [ ] Admin panel untuk contact inquiries inbox
- [ ] Email notification pada form submit (Resend / SendGrid)
- [ ] "Request a Quote" Calendly / Cal.com booking widget

### P3 (Nice to Have)
- [ ] Real principal product images (setelah licensing confirmed)
- [ ] Newsletter subscription
- [ ] `sitemap.xml`, `robots.txt`, structured data (JSON-LD Organization)
- [ ] Multi-currency pricing display untuk Digital Products

---

## 🐛 Troubleshooting Umum

| Masalah | Solusi |
|---------|--------|
| `MONGO_URL` error saat backend start | Pastikan MongoDB running & `.env` sudah dibuat |
| Frontend blank white screen | Cek console browser; biasanya `REACT_APP_BACKEND_URL` salah |
| CORS error di browser | Update `CORS_ORIGINS` di `backend/.env` |
| Contact form 500 error | Cek MongoDB connection & backend logs |
| Style tidak apply | Restart frontend (`Ctrl+C` → `yarn start`) — Tailwind cache |
| Yarn error "network" | `yarn install --network-timeout 100000` |

---

## 📞 Contact

- **Repository**: https://github.com/dengkulsakit1708/emergent
- **Company**: PT Sonar Nusantara Utama
- **Email**: sales@sonar-nusantara.co.id
- **Phone**: +62 811 116 5969

---

## 📜 License

Proprietary — © PT Sonar Nusantara Utama. All rights reserved.
