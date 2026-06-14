# 🔗 URL Shortener Pro – Smart Link Management Platform

## 🚀 Project Overview

URL Shortener Pro is a full-stack SaaS platform that enables users to create, manage, track, and analyze shortened URLs with enterprise-grade analytics. The platform provides secure authentication, QR code generation, custom aliases, click tracking, device analytics, browser insights, bulk URL shortening, and public statistics pages.

Built with a modern MERN architecture, the application focuses on performance, scalability, security, and an exceptional user experience.

---

## ✨ Features

### 🔐 Authentication & Security

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Password Hashing with bcrypt
* User-specific URL ownership
* Rate Limiting
* Helmet Security
* Input Validation
* CORS Protection

### 🔗 URL Management

* Create Short URLs
* Custom Alias Support
* Edit Destination URL
* Delete URLs
* Copy Short URL
* URL Validation
* Expiry Date Support

### 📊 Analytics Dashboard

* Total Click Tracking
* Last Visit Information
* Recent Visit History
* Daily Click Trends
* Browser Analytics
* Device Analytics
* Operating System Tracking
* Public Statistics Page

### 📱 Advanced Features

* QR Code Generation
* Bulk URL Shortening via CSV Upload
* Mobile Responsive Design
* Interactive Charts
* Professional Dashboard UI
* Real-Time Analytics

---

# 🏗 System Architecture

```mermaid
flowchart LR

User --> ReactFrontend

ReactFrontend --> ExpressAPI

ExpressAPI --> MongoDBAtlas

ExpressAPI --> JWTAuthentication

ExpressAPI --> AnalyticsEngine

AnalyticsEngine --> VisitTracking

VisitTracking --> MongoDBAtlas
```

---

# 🗄 Database Architecture

```mermaid
erDiagram

USER ||--o{ URL : owns
URL ||--o{ VISIT : tracks

USER {
    string id
    string name
    string email
    string password
}

URL {
    string id
    string originalUrl
    string shortCode
    string customAlias
    string shortUrl
    string qrCode
    date expiryDate
    number clickCount
}

VISIT {
    string id
    string browser
    string device
    string os
    date timestamp
}
```

---

# 🛠 Tech Stack

## Frontend

* React.js
* React Router
* Axios
* Tailwind CSS
* Recharts
* Lucide Icons
* React Hot Toast

## Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt
* Multer
* QRCode Generator
* CSV Parser

## Database

* MongoDB Atlas
* Mongoose ODM

---

# 📂 Project Structure

```text
URL-Shortener/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── assets/
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── server.js
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone <repository-url>

cd URL-Shortener
```

---

## Backend Setup

```bash
cd server

npm install
```

Create `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

BASE_URL=http://localhost:5000
```

Run Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd client

npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run Frontend

```bash
npm run dev
```

---

# 🔑 Environment Variables

## Backend

```env
PORT=
MONGO_URI=
JWT_SECRET=
BASE_URL=
```

## Frontend

```env
VITE_API_URL=
```

---

# 📡 API Documentation

## Authentication

### Register

```http
POST /api/auth/register
```

Request

```json
{
  "name":"John Doe",
  "email":"john@example.com",
  "password":"password123"
}
```

---

### Login

```http
POST /api/auth/login
```

Request

```json
{
  "email":"john@example.com",
  "password":"password123"
}
```

---

## URL Management

### Create Short URL

```http
POST /api/urls
```

Request

```json
{
  "originalUrl":"https://google.com",
  "customAlias":"google",
  "expiryDate":"2026-12-31"
}
```

---

### Get User URLs

```http
GET /api/urls
```

---

### Delete URL

```http
DELETE /api/urls/:id
```

---

### Bulk Upload

```http
POST /api/urls/bulk-upload
```

Upload CSV

```csv
originalUrl
https://google.com
https://github.com
https://openai.com
```

---

## Analytics

### URL Analytics

```http
GET /api/analytics/:id
```

### Daily Trends

```http
GET /api/analytics/trends/:id
```

---

# 📈 Key Analytics Captured

* Total Clicks
* Visit Timestamp
* Browser Information
* Device Information
* Operating System
* Daily Traffic Trends
* Recent Visit History

---

# 🔒 Security Features

* Password Hashing (bcrypt)
* JWT Authentication
* Route Protection
* Request Validation
* Helmet Middleware
* Rate Limiting
* CORS Configuration
* Secure Environment Variables

---

# 🚀 Deployment Guide

## Backend Deployment (Render)

1. Push backend to GitHub
2. Create Render Web Service
3. Connect GitHub Repository
4. Add Environment Variables
5. Deploy

## Frontend Deployment (Vercel)

1. Push frontend to GitHub
2. Import Project in Vercel
3. Configure Environment Variables
4. Deploy

## Database

Use MongoDB Atlas as the cloud database provider.

---

# 📸 Screenshots

Add screenshots here:

### Landing Page

<img width="1877" height="911" alt="image" src="https://github.com/user-attachments/assets/58597562-1d8a-4ec5-864d-bec790a60583" />

### Login

<img width="887" height="652" alt="image" src="https://github.com/user-attachments/assets/75084756-fcf0-4eb3-8830-5c3ece8f4939" />


### Dashboard

<img width="1870" height="822" alt="image" src="https://github.com/user-attachments/assets/a521ca6b-cbde-4528-9e21-71608976b0f2" />


### Analytics

<img width="1880" height="903" alt="image" src="https://github.com/user-attachments/assets/66b267c6-7590-4dad-ab7d-3a83dd3737b7" />


### Bulk Upload

<img width="1470" height="811" alt="image" src="https://github.com/user-attachments/assets/da6687f9-4a28-457d-a704-33d38177f25b" />


### QR Code Generation

<img width="1445" height="538" alt="image" src="https://github.com/user-attachments/assets/86de09b0-d4ff-4ea1-8350-182908231261" />


---

# 🎥 Loom Video

Demo Video: https://www.loom.com/share/56a4fff905c5499eae952a52cc32e2d5

```text
Add Loom Video Link Here
```

Example Sections:

* Project Walkthrough
* Authentication Flow
* URL Creation
* Analytics Dashboard
* Bulk Upload
* Deployment Demo

---

# 🧪 Assumptions

* Each user can access only their own URLs.
* Anonymous visitors can access shortened URLs.
* Analytics data is stored per URL.
* CSV uploads contain a valid `originalUrl` column.
* MongoDB Atlas is used for production deployment.

---

# 📈 Scalability Strategy

### For 1 Million+ Users

* Redis Caching Layer
* Horizontal Backend Scaling
* CDN Integration
* MongoDB Sharding
* Queue-based Analytics Processing
* Load Balancer
* Database Read Replicas

---

# 🔮 Future Enhancements

* Team Workspaces
* Role-Based Access Control
* AI-Powered Link Insights
* Geo-location Analytics
* Custom Domains
* Password-Protected Links
* Webhook Support
* API Key Management
* Link Scheduling
* Real-Time Analytics Dashboard
* Dark/Light Theme Toggle
* Progressive Web App (PWA)

---

# 👨‍💻 Author

# 👨‍💻 About the Developer

Hi, I'm **Aravindhan AK**.

I am passionate about building scalable full-stack applications, AI-powered solutions, and blockchain-based systems. This project reflects my interest in designing secure, user-centric, and production-ready software using modern technologies.


### Connect With Me

📧 Email: akaravind078@gmail.com

💼 LinkedIn: www.linkedin.com/in/aravind345

💻 GitHub: https://github.com/ARAVIND56722

Thank you for taking the time to review this project. Feedback and collaboration opportunities are always welcome.


---

**This project is a part of a hackathon run by https://katomaran.com**
