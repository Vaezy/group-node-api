// ---------- TP 1 ----------

// const users = [
//   { id: 1, name: "John Doe" },
//   { id: 2, name: "Jane Doe" },
// ];

// app.get("/users", (req, res) => {
//   res.json(users);
// });

// app.delete("/user/:id", (req, res) => {
//   const userId = parseInt(req.params.id);
//   const index = users.findIndex((user) => user.id === userId);
//   if (index !== -1) {
//     users.splice(index, 1);
//     res.status(200).send(`User with ID ${userId} deleted`);
//   } else {
//     res.status(404).send(`User not found`);
//   }
// });


// ---------- TP 2 ----------

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/status', (req, res) => {
  res.json({ status: 'API is running' });
});

app.get('/version', (req, res) => {
  res.json({ version: '1.0.1' });
});

module.exports = app;


