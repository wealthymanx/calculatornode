const path = require('path');
const express = require('express');
const helmet = require('helmet');
const app = express();
const port = 3001;

// Apply Helmet for security headers
app.use(helmet());

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
// Root route index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// About page route
app.get('/about', (req, res) => {
  // Make sure the path to 'about.html' is correct
  res.sendFile(path.join(__dirname, 'about.html'));
});

// 404 page handler for unmatched routes
app.use((req, res, next) => {
  // Make sure the path to '404.html' is correct
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});