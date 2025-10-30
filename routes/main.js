// Import Express and create a router
const express = require("express");
const router = express.Router();

// Define shop data
const shopData = {
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
  // Render index.ejs with shop data and dynamic page title
  res.render("index.ejs", { ...shopData, pageTitle: "Home | " + shopData.shopName });
});

// About page
router.get("/about", (req, res) => {
  // Render about.ejs with shop data and dynamic page title
  res.render("about.ejs", { ...shopData, pageTitle: "About | " + shopData.shopName });
});

// Search page
router.get("/search", (req, res) => {
  // Render search.ejs with shop data and dynamic page title
  res.render("search.ejs", { ...shopData, pageTitle: "Search | " + shopData.shopName });
});

// Search result
router.get("/search_result", (req, res) => {
  // Extract query parameters from the URL
  const searchText = req.query.search_text;
  const category = req.query.category;

  // Send a simple response showing what was searched
  res.send("You searched for '" + searchText + "' in category '" + category + "'");
});

// Register page (form)
router.get("/register", (req, res) => {
  // Render register.ejs with shop data and dynamic page title
  res.render("register.ejs", { ...shopData, pageTitle: "Register | " + shopData.shopName });
});

// Register form submission
router.post("/register", (req, res) => {
  // Extract form data from the request body
  const { first, last, email } = req.body;

  // Simple email validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if email is valid
  if (!emailPattern.test(email)) {
    return res.send("Invalid email address. Please go back and enter a valid email.");
  }

  // Log registration data to the server console
  console.log("Received registration:", first, last, email);

  // Send confirmation message to the user
  res.send(`Hello ${first} ${last}, you are now registered! We will send an email to you at ${email}.`);
});

//  EXPORT ROUTER 
module.exports = router;
