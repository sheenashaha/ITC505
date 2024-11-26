const express = require('express');
const logger = require('morgan');
const path = require('path');

const server = express();

// Middleware
server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Serve static files (CSS, JS, images, etc.) from the 'ITC-505' folder
const publicServedFilesPath = path.join(__dirname, 'ITC-505');
server.use(express.static(publicServedFilesPath));

// Serve the form page at /ITC-505/lab-7
server.get('/ITC-505/lab-7', (req, res) => {
  res.sendFile(path.join(publicServedFilesPath, 'index.html'));
});

// Handle POST request when the form is submitted
server.post('/ITC-505/lab-7/submit', (req, res) => {
  const { adjective, noun, verb, adverb, number } = req.body;

  if (!adjective || !noun || !verb || !adverb || !number) {
    return res.send(`
      <h1>Submission Failed</h1>
      <p>Please fill out all fields.</p>
      <a href="/ITC-505/lab-7">Go Back to Form</a>
    `);
  }

  const madLib = `Today I saw a ${number} ${adjective} ${noun}s, and they all decided to ${verb} ${adverb}!`;

  res.send(`
    <h1>Submission Successful</h1>
    <p>${madLib}</p>
    <a href="/ITC-505/lab-7">Go Back to Form</a>
  `);
});

// Start the server
const port = 8080;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
