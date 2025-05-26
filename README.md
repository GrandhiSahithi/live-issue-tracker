# 🛠️ Live Issue Tracker

A full-stack web application for tracking live software issues with real-time updates, status management, and priority filtering. Built with **React**, **Node.js**, **MongoDB**, and **Express**, this project demonstrates scalable backend design, RESTful APIs, and modern frontend architecture — perfect for showcasing on your resume or GitHub profile.

---

## 🚀 Features

- 🔄 Create, view, and manage software issues
- 🎯 Set priority (Low, Medium, High) and status (default: Open)
- 📊 Real-time display of all issues via React frontend
- 🌐 RESTful API built with Express and MongoDB
- 📦 Full-stack structure ready for deployment

---

## 🧱 Tech Stack

### Frontend:
- React.js
- Axios
- HTML/CSS (basic styling)

### Backend:
- Node.js
- Express
- MongoDB (Mongoose)
- dotenv (for environment variables)

---

## 📁 Folder Structure

```
live-issue-tracker/
├── client/               # React frontend
│   └── src/App.js
├── server/               # Node + Express backend
│   ├── models/Issue.js   # Mongoose schema
│   ├── routes/issues.js  # REST API routes
│   ├── index.js          # App entry point
│   └── .env              # MongoDB connection URI
└── data/db/              # MongoDB storage folder (used locally)
```

---

## 🛠️ How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/live-issue-tracker.git
cd live-issue-tracker
```

### 2. Install Dependencies

Install backend dependencies:
```bash
cd server
npm install
```

Install frontend dependencies:
```bash
cd ../client
npm install
```

---

### 3. Set Up MongoDB

#### Option A: Local MongoDB
Create data directory (if not already created):
```bash
mkdir -p server/data/db
```

Run MongoDB with:
```bash
mongod --dbpath "absolute_path_to/server/data/db"
```

#### Option B: MongoDB Atlas
Replace `.env` content with your cloud URI:
```
MONGO_URI=your_mongo_atlas_uri
```

---

### 4. Run Backend
```bash
cd server
node index.js
```

### 5. Run Frontend
```bash
cd ../client
npm start
```

---

## 🔗 API Endpoints

- `GET /api/issues` – Fetch all issues
- `POST /api/issues` – Create a new issue

Sample JSON:
```json
{
  "title": "Login Bug",
  "description": "Users can't log in",
  "priority": "High"
}
```



## 🙋‍♀️ Author

**Sahithi Grandhi**  
[LinkedIn](https://www.linkedin.com/in/sahithi-grandhi) • [GitHub](https://github.com/GrandhiSahithi)

---

## 📜 License

This project is licensed under the MIT License.
