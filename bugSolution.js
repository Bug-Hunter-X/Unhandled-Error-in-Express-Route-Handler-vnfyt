const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if userId is a valid number
  if (isNaN(parseInt(userId))) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... further processing of the userId ...
  // Example of handling a non-existent user
  if (!users[userId]) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json({ user: users[userId] });
});
const users = {
  "1": {id: 1, name: "John Doe"},
  "2": {id: 2, name: "Jane Doe"}
};