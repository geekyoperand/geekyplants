const express = require('express');
const app = express();
const path = require('path');

// Set the views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to render the index.ejs file
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
