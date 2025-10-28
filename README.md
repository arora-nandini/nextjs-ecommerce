# 🛍️ Next.js E-Commerce (with MongoDB + Tailwind CSS)

A full-stack e-commerce web app built using **Next.js 14 (App Router)**, **MongoDB (Mongoose)**, and **Tailwind CSS**.  
This project demonstrates multiple rendering strategies — **SSG**, **SSR**, **ISR**, and **CSR** — all in one modern app.

---

## ⚙️ Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | **Next.js 14 (App Router)** |
| Styling | **Tailwind CSS** |
| Backend | **Next.js API Routes** |
| Database | **MongoDB (via Mongoose)** |
| Deployment | **Vercel** (Frontend + API) |
| Package Manager | **npm** |

---

## ✨ Features

✅ Product Listing (SSG)  
✅ Product Detail Page (ISR)  
✅ Admin Panel for Add/Edit (CSR)  
✅ Inventory Dashboard (SSR)  
✅ MongoDB Integration with Mongoose  
✅ Secure `.env` configuration  
✅ Responsive UI using Tailwind CSS  

---

## 🗂️ Project Structure

nextjs-ecommerce/
├── app/
│ ├── layout.js
│ ├── page.js
│ ├── products/[slug]/page.js
│ ├── dashboard/page.js
│ ├── admin/page.js
│ └── api/products/
│ ├── route.js
│ └── [slug]/route.js
├── components/
│ ├── Navbar.jsx
│ ├── ProductCard.jsx
│ └── ProductForm.jsx
├── lib/
│ ├── db.js
│ └── models/Product.js
├── public/
│ └── sample.jpg
├── .env.example
├── package.json
└── tailwind.config.js