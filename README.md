# 🍽️ Osteria Tufo — Restaurant Web Application

Welcome to **Osteria Tufo**, a Node.js web application built for learning and showcasing dynamic server-side rendering with EJS.  
This project simulates a restaurant website with menu browsing, customer registration, and survey features.

---

##  Project Overview

This application demonstrates:

 Express routing and middleware  
 EJS templating with partials  
 Static asset serving (CSS)  
 GET & POST form handling  
 Simple email validation  
 Dynamic data passed to views  

Users can explore different pages, submit a registration form, and complete a customer survey that displays personalized results.

---

##  Technologies Used

| Technology | Description |
|-----------|-------------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Backend web framework |
| **EJS** | Template engine for dynamic HTML |
| **CSS** | Styling for UI |
| **Google Fonts** | EB Garamond typography |

---

##  File Structure

05_THIRSTY_33830546
│── index.js
│── package.json
│── package-lock.json
│── .gitignore
│── links.txt
│
├── public/
│ └── css/style.css
│
├── routes/
│ └── main.js
│
├── views/
│ ├── index.ejs
│ ├── about.ejs
│ ├── search.ejs
│ ├── register.ejs
│ ├── survey.ejs
│ ├── survey_result.ejs
│ └── partials/head.ejs
│
└── node_modules/


##  Installation

1. Clone or copy the project folder  
2. Install dependencies:


## Running the App

1. run in CMD: node index.js
2. Open your browser and go to: https://doc.gold.ac.uk/usr/388

##  Routes Overview

| Route            | Method | Description                       |
|------------------|--------|-----------------------------------|
| `/`              | GET    | Home page                         |
| `/about`         | GET    | About the restaurant              |
| `/search`        | GET    | Search menu items                 |
| `/search_result` | GET    | Displays search query             |
| `/register`      | GET    | Customer registration form        |
| `/register`      | POST   | Validates + registers user        |
| `/survey`        | GET    | Customer survey form              |
| `/survey`        | POST   | Displays survey results           |

---

##  Styling

The project uses:

- Custom CSS in `public/css/style.css`
- Google Font: **EB Garamond**
- Uppercase and serif decorative theme

---

##  Features

- Dynamic menus rendered from server data  
- Multi-page EJS rendering  
- Form input handling & email validation  
- Styled restaurant-themed interface  

---

##  Notes

This project is for educational purposes — ideal for learning **Express** and **EJS** view rendering.
