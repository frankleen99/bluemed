# 🏥 Doctor Booking System (Frontend-First MVP)

A **doctor appointment booking system** built with **Next.js (App Router)** using a **frontend-first approach**.  
The goal of this project is to complete a **clean, role-based frontend MVP** before integrating a backend.

This project prioritizes:
- Clear folder responsibilities
- Maintainable structure
- Easy backend integration later

---

## 🎯 MVP Scope (Locked)

### ✅ Included
- Public doctor listing & profile
- Patient booking flow
- Patient dashboard
- Doctor dashboard (minimal)
- Admin dashboard (basic controls)
- Email notifications (UI only)
- Role-based routing (mocked)

### ❌ Excluded
- Analytics
- Payments
- SMS notifications
- Advanced doctor profiles
- Audit logs

---

## 🧱 Tech Stack

### Frontend
- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **pnpm**
- **Mock services (frontend-first)**
## 🧠 Why Frontend-First?

This project intentionally completes the frontend MVP before backend integration to:
- Validate UX and flows early
- Avoid backend-driven UI rewrites
- Allow seamless API integration later


### Backend (Phase 2 – planned)
- NestJS
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Email service

---

## 📁 Project Folder Structure
```doctor-booking/
app/
├── (public)/                 ← Public marketing pages
│   ├── layout.tsx            ← Public navbar + footer layout
│   ├── page.tsx              ← Hero → Cards → WhyChoose → etc
│   ├── login/
│   │    └── page.tsx         ← Login form
│   └── register/
│        └── page.tsx         ← Signup form
│
├── patient/                  ← Patient app UI
│   ├── layout.tsx            ← Patient navbar + bottom nav
│   ├── home/
│   │    └── page.tsx         ← Patient dashboard
│   ├── doctors/
│   │    ├── page.tsx         ← Browse doctors
│   │    └── [id]/page.tsx    ← Doctor profile
│   ├── appointments/
│   │    └── page.tsx         ← Upcoming / past appointments
│   └── profile/
│        └── page.tsx         ← Patient profile & settings
│
├── doctor/                   ← Doctor app UI
│   ├── layout.tsx            ← Doctor navbar
│   ├── dashboard/
│   │    └── page.tsx         ← Doctor dashboard / stats
│   ├── appointments/
│   │    └── page.tsx         ← Manage appointments
│   └── availability/
│        └── page.tsx         ← Set available time slots
│
├── admin/                    ← Admin dashboard UI
│   ├── layout.tsx            ← Sidebar + topbar layout
│   ├── dashboard/
│   │    └── page.tsx         ← Admin dashboard / stats
│   └── doctors/
│        └── page.tsx         ← Manage doctor accounts
```


Each folder has **one responsibility**.  
No folder overlaps another’s job.

---

## 📂 `app/` — Routing & Pages

This folder defines **all routes and pages** using the **Next.js App Router**.  
Each folder maps directly to a URL.

> ❌ Do NOT place reusable components or data-fetching logic here.

---

### `(auth)` — Authentication Routes
app/(auth)/


- Login and register pages
- Route group (does NOT appear in the URL)

URLs:


/login
/register


---

### `admin/` — Admin Dashboard


app/admin/


Purpose:
- View all appointments
- Approve / cancel bookings
- Manage doctors and patients

URLs:


/admin
/admin/appointments


---

### `doctor/` — Doctor Dashboard (Protected)


app/doctor/


Purpose:
- View assigned appointments
- Manage availability
- Minimal doctor profile

URLs:


/doctor
/doctor/availability


Access:
- Doctor role only

---

### `patient/` — Patient Dashboard (Protected)


app/patient/


Purpose:
- View appointment history
- Cancel appointments

URLs:


/patient
/patient/appointments


---

### `doctors/` — Public Doctor Pages


app/doctors/


Purpose:
- Public doctor listing
- Public doctor profile pages
- Accessible without authentication

URLs:


/doctors
/doctors/[id]


---

### Root Layout & Pages


app/layout.tsx → Global layout (wrappers, providers)
app/page.tsx → Landing page (/)


---

## 🧩 `components/` — Reusable UI Components

This folder contains **reusable UI blocks**.  
Components here **never control routing** and **never fetch data**.



components/
├── layout/
├── ui/
├── cards/
└── icons/


### `layout/`
- Navbar
- Sidebar
- Page layout wrappers

Used across multiple pages.

---

### `ui/`
Small, reusable UI elements:
- Button
- Input
- Modal
- Loader

---

### `cards/`
Display components that receive data via props:
- `DoctorCard`
- `AppointmentCard`

Used to present doctors and appointments.

---

### `icons/`
SVG icons as React components:
- App logo
- Icons

> ❌ React SVGs must NOT be placed in `public/`

---

## 🔌 `services/` — Frontend Data Layer

Handles **all data access** in the frontend.



services/
├── auth.service.ts
├── doctor.service.ts
└── appointment.service.ts


Purpose:
- Mock API calls during frontend development
- Centralized data logic
- Easy replacement with real backend APIs later

Rules:
- ❌ No JSX
- ❌ No UI logic
- ✅ Data fetching only

---

## 🧠 `types/` — Data Definitions

Defines the **shape of data** used across the app.



types/
├── user.ts
├── doctor.ts
└── appointment.ts


Includes:
- User roles (`ADMIN`, `DOCTOR`, `PATIENT`)
- Appointment status
- Doctor availability

This ensures type safety and consistency.

---

## 🧰 `lib/` — Utilities & Helpers

Small reusable helpers and constants.



lib/
├── routes.ts # Centralized route paths
└── utils.ts # Date helpers, class utilities


Keeps logic out of components.

---

## 🖼️ `public/` — Static Assets

Static files served directly by the browser.



public/
├── favicon.ico
└── images/


Rules:
- ❌ No React components
- ❌ No TypeScript files
- ✅ Static assets only

---

## 🔐 Authentication Strategy (Current Phase)

- Mock authentication context
- Hardcoded roles for development
- Route protection simulated in frontend

Roles:
- `ADMIN`
- `DOCTOR`
- `PATIENT`

This will later be replaced with real backend authentication **without changing UI structure**.

---
