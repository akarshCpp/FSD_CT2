# Droidbots Team Management Application

A full-stack MERN (MongoDB, Express, React, Node.js) application designed for managing student team members. This project allows users to add team members with detailed profiles, including image uploads, and view them in an interactive dashboard.

## 🚀 Features

- **Home Page**: Elegant landing page with team introduction.
- **Add Member**: Dynamic form to register new members with profile image upload.
- **View Members**: Responsive grid view of all team members.
- **Member Details**: Dedicated profile pages for in-depth member information.
- **Image Uploads**: Automated handling of profile pictures stored on the server.
- **Premium UI**: Modern design with Droidbots branding.

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router, Axios, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **File Handling**: Multer (for image uploads)

## 👥 Team: Droidbots

- **Akarsh Anubhav**
- **Jay Kumar**
- **Shikhar Shukla**

## 📂 Project Structure

```text
FSD_CT2/
├── backend/
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API endpoints
│   ├── uploads/       # Stored profile images
│   ├── server.js      # Main entry point
│   └── .env           # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/ # Reusable UI elements
│   │   ├── pages/      # Application screens
│   │   ├── App.js      # Main application logic
│   │   └── App.css     # Global styles
│   └── package.json
└── README.md
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB installed and running locally

### 1. Setup Backend
```bash
cd backend
npm install
# Ensure MongoDB is running at mongodb://127.0.0.1:27017/droidbots
npm run dev
```

### 2. Setup Frontend
```bash
cd frontend
npm install
npm start
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/members` | Add a new team member (multipart/form-data) |
| GET | `/api/members` | Get a list of all team members |
| GET | `/api/members/:id` | Get full details of a specific member |

---
*Created for FSD CLAT-2 Assessment - Team Droidbots*
