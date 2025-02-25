# 📝 Task Management Application

## 🚀 Overview

A web-based Task Management Application where users can add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into To-Do, In Progress, and Done, and all changes are instantly saved in the database for persistence.

This application ensures real-time task management with a clean, modern, and responsive UI.

## 🔗 Live Demo

[🌍 View Live Application](#) _(Replace with actual link once deployed)_

## 📂 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Backend API Endpoints](#backend-api-endpoints)
- [Usage Guide](#usage-guide)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

✔ User Authentication – Login via Google (Firebase Authentication)  
✔ Task Management – Add, edit, delete, and reorder tasks  
✔ Drag & Drop Interface – Move tasks across categories easily  
✔ Real-time Synchronization – Instant updates using WebSockets/MongoDB Change Streams  
✔ Persistent Data Storage – Tasks saved in MongoDB database  
✔ Mobile Responsive Design – Works on both desktop & mobile  
✔ Dark Mode _(Bonus feature: optional but recommended)_  
✔ Task Due Dates _(Bonus feature: overdue tasks highlighted)_

---

## 🛠 Technologies Used

### Frontend:

- [Vite.js](https://vitejs.dev/) + [React.js](https://react.dev/)
- [Firebase Authentication](https://firebase.google.com/)
- [React-Beautiful-DnD](https://github.com/atlassian/react-beautiful-dnd) _(or another drag-and-drop library)_
- Tailwind CSS _(for modern styling & responsiveness)_

### Backend:

- [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) _(via Mongoose ORM)_
- [WebSockets](https://socket.io/) _(for real-time updates)_
- Firebase Admin SDK _(to verify authentication tokens)_

---

## ⚙ Installation & Setup

### Prerequisites:

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) & npm
- [MongoDB](https://www.mongodb.com/) (local or cloud via MongoDB Atlas)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
cp .env.example .env  # Configure your environment variables
npm start
```

_Ensure MongoDB is running before starting the backend._

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

### 4️⃣ Firebase Setup

- Create a Firebase project & enable Google Authentication
- Get the Firebase config from the Firebase Console & add it to `.env`

---

## 📡 Backend API Endpoints

| Method   | Endpoint     | Description                                |
| -------- | ------------ | ------------------------------------------ |
| `POST`   | `/tasks`     | Add a new task                             |
| `GET`    | `/tasks`     | Retrieve all tasks for logged-in user      |
| `PUT`    | `/tasks/:id` | Update task (title, description, category) |
| `DELETE` | `/tasks/:id` | Delete a task                              |

---

## 🎮 Usage Guide

1️⃣ Sign in with Google to access your tasks.  
2️⃣ Add new tasks by clicking the "Add Task" button.  
3️⃣ Drag & drop tasks to reorder or move them between categories.  
4️⃣ Click on a task to edit details or delete it.  
5️⃣ Tasks persist in the database, so they remain in the same state after a refresh.

---

## 📦 Dependencies

### Frontend:

```json
"dependencies": {
  "react": "^18.0.0",
  "firebase": "^10.0.0",
  "react-beautiful-dnd": "^13.1.1",
  "tailwindcss": "^3.0.0"
}
```

### Backend:

```json
"dependencies": {
  "express": "^4.18.0",
  "mongoose": "^7.0.0",
  "cors": "^2.8.5",
  "dotenv": "^16.0.0",
  "socket.io": "^4.7.0"
}
```

---

## 🏗 Contributing

🚀 Contributions are welcome! Follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make changes & commit: `git commit -m "Added new feature"`
4. Push changes: `git push origin feature-name`
5. Submit a pull request

---

## 📜 License

This project is licensed under the MIT License.
