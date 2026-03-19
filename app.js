const express = require("express");

const app = express();

// set server Port
const PORT = 8080;

//  import the dotenv module
require("dotenv").config();

// root endpoint
app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            background-color: #f4f4f4;
        }
        header {
            background: #333;
            color: white;
            padding: 15px;
            text-align: center;
        }
        main {
            padding: 20px;
        }
        button {
            padding: 10px 15px;
            border: none;
            background: #007bff;
            color: white;
            cursor: pointer;
        }
        button:hover {
            background: #0056b3;
        }
    </style>
</head>
<body>

<header>
    <h1>Welcome to My Website</h1>
</header>

<main>
    <h2>Hello 👋</h2>
    <p>This is a simple HTML page.</p>

    <button onclick="sayHello()">Click Me</button>
</main>

<script>
    function sayHello() {
        alert("Hello! You clicked the button 🚀");
    }
</script>

</body>
</html>- ${process.env.ENVIRONMENT}`);
});

// start server
app.listen(PORT, () => {
  console.log(
    `Example app listening on port ${PORT}!- http://localhost:${PORT}`,
  );
});
