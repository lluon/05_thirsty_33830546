// Create a new router
const express = require("express");
const router = express.Router();
// Define our data
var shopData = {shopName: "Osteria Tufo", 
                productCategories:[
                    "starters",
                    "pasta mains", 
                    "meat mains", 
                    "fish mains", 
                    "side orders",
                    "desserts",
                    "wine",
                    "soft drinks"
                ]};

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs",shopData)
}); 

router.get("/about", (req, res) => {
    res.render("about.ejs",shopData)
}); 
router.get("/search", (req, res) => {
    res.render("search.ejs",shopData)
}); 

// Export the router object so index.js can access it
module.exports = router;

