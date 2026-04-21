# 🤖 DROIDBOTS | Team Management Portal

[![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue.svg)](https://www.mongodb.com/mern-stack)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/akarshCpp/FSD_CT2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A high-performance, premium team management application built using the **MERN** stack. This portal enables seamless onboarding of innovators, profile management, and interactive team visualizations for **Team Droidbots**.

---

## 🛠️ Built With

<div align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="60" height="60"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="60" height="60"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="60" height="60"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="60"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" height="60"/>
</div>

---

## 🚀 Key Features

- **💎 Premium UI**: A modern, glassmorphic design system built with CSS3 and React.
- **⚡ Onboarding Flow**: Dynamic multi-field form with real-time profile image preview.
- **📂 Team Dashboard**: Interactive grid view featuring smooth hover effects and responsive layouts.
- **🔍 Deep Insights**: Dedicated profile pages displaying comprehensive academic and professional data.
- **🖼️ Automated Media Handling**: Efficient server-side storage and retrieval of profile portraits via Multer.
- **🌓 Adaptive Layout**: Fully responsive design that works seamlessly across desktop and tablet devices.

---

## 📂 Project Architecture

```text
FSD_CT2/
├── backend/            # Express.js Server & Logic
│   ├── models/         # Mongoose Data Schemas
│   ├── routes/         # REST API Endpoints
│   ├── uploads/        # Persistent Local Storage
│   └── server.js       # Backend Entry Point
└── frontend/           # React.js SPA
    ├── src/
    │   ├── components/ # Reusable UI Components
    │   ├── pages/      # View Routes
    │   └── App.css     # Global Design System
```

---

## 👥 Core Team: Droidbots

| Name | Role | Profile |
| --- | --- | --- |
| **Akarsh Anubhav** | Lead Developer | [Profile](https://github.com/akarshCpp) |
| **Jay Kumar** | Full Stack Developer | [Profile](https://github.com/jk7145) |
| **Shikhar Shukla** | UI/UX Specialist | [Profile](https://github.com/shikharshuklaa) |

---

## ⚙️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/) (running on default port 27017)

### 1. Backend Configuration
```bash
cd backend
npm install
# Create a .env file with MONGODB_URI and PORT
npm run dev
```

### 2. Frontend Configuration
```bash
cd frontend
npm install
npm start
```

---

## 🔗 REST API Documentation

| Action | Endpoint | Payload Type |
| --- | --- | --- |
| **Add Member** | `POST /api/members` | `multipart/form-data` |
| **List Team** | `GET /api/members` | `JSON` |
| **Get Member** | `GET /api/members/:id` | `JSON` |

---

<div align="center">
  <p><i>Developed for the FSD CLAT-2 Assessment</i></p>
  <p>© 2026 Team Droidbots</p>
</div>

