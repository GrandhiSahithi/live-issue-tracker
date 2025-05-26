import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [issues, setIssues] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', priority: '' });

  const fetchIssues = async () => {
    const res = await axios.get('http://localhost:5000/api/issues');
    setIssues(res.data);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/issues', form);
    setForm({ title: '', description: '', priority: '' });
    fetchIssues();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛠️ Live Issue Tracker</h2>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <select name="priority" value={form.priority} onChange={handleChange} required>
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Add Issue</button>
      </form>

      <hr />

      <h3>📋 Issues:</h3>
      <ul>
        {issues.map((issue) => (
          <li key={issue._id}>
            <strong>{issue.title}</strong> - {issue.priority} - {issue.status}
            <p>{issue.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
