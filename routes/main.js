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
  ],
  shopLocations: [
    {
      location: "Finsbury Park, London",
      manager: "Paola Rossi",
      address: "12 Clifton Terrace, Finsbury Park, London N4 3JP"
    },
    {
      location: "Camden Town, London",
      manager: "Marco Bianchi",
      address: "44 Camden High Street, Camden Town, London NW1 0JH"
    },
    {
      location: "Greenwich, London",
      manager: "Lucia Romano",
      address: "8 Nelson Road, Greenwich, London SE10 9JB"
    }
  ]
};

// ROUTES

// Home page
router.get("/", (req, res) => {
  res.render("index.ejs", { ...shopData, pageTitle: "Home | " + shopData.shopName });
});

// About page
router.get("/about", (req, res) => {
  res.render("about.ejs", { ...shopData, pageTitle: "About | " + shopData.shopName });
});

// Search page
router.get("/search", (req, res) => {
  res.render("search.ejs", { ...shopData, pageTitle: "Search | " + shopData.shopName });
});

// Search result
router.get("/search_result", (req, res) => {
  const searchText = req.query.search_text;
  const category = req.query.category;
  res.send("You searched for '" + searchText + "' in category '" + category + "'");
});

// Register page
router.get("/register", (req, res) => {
  res.render("register.ejs", { ...shopData, pageTitle: "Register | " + shopData.shopName });
});

// Register form submission
router.post("/register", (req, res) => {
  const { first, last, email } = req.body;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return res.send("Invalid email address. Please go back and enter a valid email.");
  }

  console.log("Received registration:", first, last, email);
  res.send(`Hello ${first} ${last}, you are now registered! We will send an email to you at ${email}.`);
});

//  EXPORT ROUTER 
module.exports = router;
