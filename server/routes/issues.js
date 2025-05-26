const express = require("express");
const router = express.Router();
const Issue = require("../models/Issue");

router.get("/", async (req, res) => {
  const issues = await Issue.find();
  res.json(issues);
});

router.post("/", async (req, res) => {
  const newIssue = new Issue(req.body);
  await newIssue.save();
  res.status(201).json(newIssue);
});

module.exports = router;
