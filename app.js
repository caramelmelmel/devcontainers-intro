// Import the Express module
const express = require("express");

// Create an instance of Express
const app = express();

// Define a route for the root URL ("/") that returns "Hello, World!"
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// TODO: add a todo list

// Start the server on port 3000 and log that it's running
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
