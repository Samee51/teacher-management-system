# 🧑‍🏫 Teacher Management System

A modern, responsive **teacher management dashboard** built with **Next.js 15**, **Tailwind CSS**, and **React 19**. This app provides an admin interface to manage teachers, track payments, view teacher profiles, and perform basic CRUD operations with elegant UI and smooth UX.

---

## 🚀 Features

### 🧩 Core Pages
- **Dashboard**: Overview of total teachers, payment status, and quick stats.
- **Teacher List**: Table of all teachers with:
  - Name, Email, Subject
  - Status (active/inactive)
  - Payment status (paid/unpaid)
- **Teacher Profile**:
  - View personal details and payment summary
  - Edit profile info
- **Add/Edit Teacher Form**:
  - Form validation with `react-hook-form` + `zod`
  - Loading + success state feedback

### 💳 Payment Management
- Mark payments as **Paid**
- See last payment date
- Simulated payment form/modal (optional)

### ✅ UX Details
- Form validations with inline error messages
- Toast notifications using `react-hot-toast`
- Loading and hover states on buttons
- Accessible form labels and keyboard support

### 📱 Responsive Design
- Fully responsive layout:
  - Grid and table views adapt across mobile, tablet, and desktop
  - Sidebar drawer on mobile with backdrop click-to-close

---

## 🛠 Tech Stack

| Tech             | Use                         |
|------------------|------------------------------|
| **Next.js 15**   | App directory, routing       |
| **React 19**     | UI development               |
| **Tailwind CSS** | Utility-first responsive UI  |
| **Lucide React** | Icon set                     |
| **React Hook Form + Zod** | Form management & schema validation |
| **Recharts**     | Data visualizations (Bar Chart) |
| **React Hot Toast** | Toasts for feedback      |

---
##  Live Demo

https://teacher-management-system-two.vercel.app/
---

##  Video Explaination

---

## 🧪 Available Scripts

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
