// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {
  shopName: "Osteria Tufo",
  productCategories: [
    "starters",
    "pasta mains",
    "meat mains",
    "fish mains",
    "side orders",
    "desserts",
    "wine",
    "soft drinks"
  ]
};

// ROUTES

// Home page
router.get("/", (req, res) => {
  res.render("index.ejs", shopData);
});

// About page
router.get("/about", (req, res) => {
  res.render("about.ejs", shopData);
});

// Search page
router.get("/search", (req, res) => {
  res.render("search.ejs", shopData);
});

// Search result
router.get("/search_result", (req, res) => {
  const searchText = req.query.search_text;
  const category = req.query.category;
  res.send("You searched for '" + searchText + "' in category '" + category + "'");
});

// Register page - form
router.get("/register", (req, res) => {
  res.render("register.ejs", shopData); // Renders your form view
});

// Register form - submission
router.post("/register", (req, res) => {
  const { first, last, email } = req.body;

  // Email validation 
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if email is valid
  if (!emailPattern.test(email)) {
    return res.send("Invalid email address. Please go back and enter a valid email.");
  }

  console.log("Received registration:", first, last,email);
  res.send(`Hello ${first} ${last} you are now registered! We will send an email to you at ${email}`);
});

// Export router
module.exports = router;
