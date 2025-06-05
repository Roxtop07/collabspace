# 🚀 CollabSpace – Where Ideas Meet Teams

CollabSpace is a full-stack collaborative platform that empowers students, developers, and innovators to **find teammates**, **form project groups**, and **build ideas together** in real time.

> ✨ Whether you're a designer, developer, or idea creator – CollabSpace is your go-to space for turning visions into projects.

---

## 🌐 Live Demo

[🔗 View Deployed Project](#) *(Add your Vercel/Railway link if deployed)*

---

## 📸 Preview

![CollabSpace Preview](./public/preview.png)  
*(Add an actual screenshot or demo GIF from your project)*

---

## 🧠 Features

- 🔐 **Role-Based Authentication** using `NextAuth.js`
- 👥 **Project Posting & Team Formation**
  - 2 to 8 members per team
  - Unique team invite codes
- 💬 **Real-Time Chat & Notifications** with `Socket.io`
- 🧩 **Public Profiles & Skill-Based Matching**
- 📋 **Task Management & Team Dashboards**
- 🧠 **AI Assistant Integration** using `OpenAI API`
- 🌍 **Multi-language Support**
- 📲 **PWA Support** (Installable web app)
- ⚙️ **Admin Dashboard** for moderation
- 🌐 **Third-party API Integration Ready**

---

## 🛠️ Tech Stack

### Frontend:
- `Next.js (App Router)`
- `Tailwind CSS`
- `Anime.js` (for animations)

### Backend:
- `Node.js`
- `MongoDB Atlas`
- `NextAuth.js`
- `Socket.io` (real-time communication)

### AI & Others:
- `OpenAI API` (for assistant)
- `PWA` support
- `Vercel / Railway` (for deployment)

---

## 📁 Folder Structure (Simplified)
collabspace/
├── app/
│   ├── dashboard/
│   ├── landing/
│   ├── user/
│   └── …
├── components/
├── hooks/
├── lib/
├── models/
├── providers/
├── types/
├── public/
├── styles/
└── utils/

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Roxtop07/collabspace.git
cd collabspace
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables
```env
MONGODB_URI=your_mongo_connection_string
NEXTAUTH_SECRET=your_auth_secret
NEXTAUTH_URL=http://localhost:3000
OPENAI_API_KEY=your_openai_api_key
```

### 4. Run the App
```bash
npm run dev
# or
yarn dev
```

