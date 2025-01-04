const express = require("express");
const User = require("./db");
const cors = require("cors");
const bcrypt = require("bcrypt"); // For password hashing

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Root route
// app.get("/", (req, res) => {
//   res.send("hi");
// });

// Login route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User Not Found!" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.json({ message: "Login Successful", user: email });
      } else {
        res.status(401).json({ message: "Password didn't match." });
      }
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ message: "Database error" });
    }
  });
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email: email });
//     if (user) {
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (isMatch) {
//         res.send({ message: "Login Successful", user: email });
//       } else {
//         res.status(401).send({ message: "Password didn't match." });
//       }
//     } else {
//       res.status(404).send({ message: "User Not Found!" });
//     }
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).send({ message: "Database error" });
//   }
// });

// Register route
// app.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email: email });
//     if (existingUser) {
//       res.status(400).send({ message: "User Already Registered" });
//     } else {
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const newUser = new User({
//         name: name,
//         email: email,
//         password: hashedPassword,
//       });

//       await newUser.save();
//       console.log(newUser);
//       res.send({ message: "Successfully Registered!" });
//     }
//   } catch (err) {
//     console.error("Registration error:", err);
//     res.status(500).send({ message: "Error saving user" });
//   }
// });
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already registered" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });
  
      await newUser.save();
      console.log("New user registered:", newUser);
      res.status(201).json({ message: "Successfully registered!" });
    } catch (err) {
      console.error("Registration error:", err);
      res.status(500).json({ message: "Error saving user" });
    }
  });
  

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
