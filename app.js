const express = require("express");

const app = express();

const path = require("path");

// set server Port
const PORT = 8080;

//  import the dotenv module
require("dotenv").config();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", {
    subject: "Akash Deep Portfolio",
    name: "Akash Deep",
    title: "Full Stack Developer",
    intro: "I create fast, modern, and scalable web apps.",
    about:
      "I specialize in Node.js, Express, Python, MongoDB, PostgreSQL and frontend UI development.",
    profileImage:
      "https://media.licdn.com/dms/image/v2/D5603AQFqJOAtQyigpA/profile-displayphoto-scale_400_400/B56ZiXxyc2HkAg-/0/1754893069732?e=1775692800&v=beta&t=Rxgzs8MuEiLF_qbRP9Wi6OigTLz0GF155qe0rajSR0E",
    portfolioLink: "https://www.linkedin.com/in/akash-deep-7b0ab0179/",
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/akash-deep-7b0ab0179/",
    twitter: "https://twitter.com/yourusername",
    formAction: "/contact",
    link: "https://yourwebsite.com/unsubscribe",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "React",
    ],
    projects: [
      {
        title: "Portfolio Website",
        description: "Personal portfolio with responsive design.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
        link: "https://yourproject1.com",
      },
      {
        title: "E-Commerce App",
        description: "Shopping app with cart and payments.",
        image:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
        link: "https://yourproject2.com",
      },
    ],
  });
});

// root endpoint
// app.get("/", (req, res) => {
//   res.send(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My First Page</title>

//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             margin: 0;
//             background-color: #f4f4f4;
//         }
//         header {
//             background: #333;
//             color: white;
//             padding: 15px;
//             text-align: center;
//         }
//         main {
//             padding: 20px;
//         }
//         button {
//             padding: 10px 15px;
//             border: none;
//             background: #007bff;
//             color: white;
//             cursor: pointer;
//         }
//         button:hover {
//             background: #0056b3;
//         }
//     </style>
// </head>
// <body>

// <header>
//     <h1>Welcome to My Website</h1>
// </header>

// <main>
//     <h2>Hello Akash 👋</h2>
//     <p>This is a simple HTML page.</p>

//     <button onclick="sayHello()">Click Me</button>
// </main>

// <script>
//     function sayHello() {
//         alert("Hello! You clicked the button 🚀");
//     }
// </script>

// </body>
// </html>- ${process.env.ENVIRONMENT}`);
// });

// start server
app.listen(PORT, () => {
  console.log(
    `Example app listening on port ${PORT}!- http://localhost:${PORT}`,
  );
});
