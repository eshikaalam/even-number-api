const express = require('express');
const app = express();

// Route to get n even numbers
app.get('/even', (req, res) => {
  const n = parseInt(req.query.n);
  if (isNaN(n) || n < 1) {
    return res.status(400).send('Please provide a positive number "n" as a query parameter.');
  }

  const evens = [];
  for (let i = 0; evens.length < n; i++) {
    if (i % 2 === 0) evens.push(i);
  }

  res.json({ result: evens });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
