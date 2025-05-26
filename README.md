# 🛠️ Live Issue Tracker

A **full-stack issue tracking system** built with React, Node.js, Express, and MongoDB. This project helps you log, prioritize, and track software issues — ideal for learning, showcasing backend/frontend integration, and real-world teamwork scenarios.

![GitHub Repo](https://img.shields.io/badge/Status-Working-brightgreen)  
![Built with](https://img.shields.io/badge/Built%20with-React%2C%20Node.js%2C%20MongoDB-blue)

---

## 🔧 Features

- ✅ Create new issues with title, description, and priority  
- 📋 View a live list of all issues  
- 📊 Auto-tagged with "Open" status  
- 🔄 Real-time updates via React frontend  
- 🌐 REST API with JSON responses  
- 🛠️ Full CRUD backend ready for enhancements (filtering, status updates, auth)

---

## ⚙️ Tech Stack

| Layer       | Technology             |
|------------|------------------------|
| Frontend   | React, Axios           |
| Backend    | Node.js, Express       |
| Database   | MongoDB (Mongoose)     |
| API Style  | RESTful                |
| Styling    | Basic CSS              |

---

## 📁 Folder Structure

```
live-issue-tracker/
├── client/               # React frontend
│   └── src/App.js        # Main React component
├── server/               # Node + Express backend
│   ├── index.js          # App entry point
│   ├── .env              # MongoDB URI
│   ├── models/Issue.js   # MongoDB schema
│   └── routes/issues.js  # API routes
└── README.md
```

---

## 🚀 Getting Started

### 🔽 Clone This Repo
```bash
git clone https://github.com/GrandhiSahithi/live-issue-tracker.git
cd live-issue-tracker
```

### 📦 Install Dependencies

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd ../client
npm install
```

---

### 🧠 MongoDB Setup (Local)

1. Create the MongoDB data directory:
```bash
mkdir -p server/data/db
```

2. Run MongoDB locally:
```bash
mongod --dbpath "C:\Users\Admin\Downloads\live-issue-tracker\server\data\db"
```

3. Start the backend:
```bash
cd server
node index.js
```

4. Start the frontend:
```bash
cd ../client
npm start
```

---

## 🔌 API Endpoints

| Method | Route         | Description         |
|--------|---------------|---------------------|
| GET    | /api/issues   | Get all issues      |
| POST   | /api/issues   | Create new issue    |

**Sample POST body:**
```json
{
  "title": "Login Bug",
  "description": "User unable to log in",
  "priority": "High"
}
```

---

## 🧪 Future Enhancements

- [ ] Status update buttons (In Progress, Resolved, Closed)  
- [ ] Filter by priority or status  
- [ ] Data visualizations with Chart.js  
- [ ] Authentication for users/admins  
- [ ] Deployment (Render / Netlify)

---

## ✍️ Author

**Sahithi Grandhi**  
🎓 MSCS @ Chicago State University  
📫 [sahithig1701@gmail.com](mailto:sahithig1701@gmail.com)  
🌐 [GitHub](https://github.com/GrandhiSahithi)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

> 💡 *Feel free to fork, contribute, or use this as a resume project! Just credit the original.*
