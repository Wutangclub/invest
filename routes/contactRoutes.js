// dashboardRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');


// Dashboard route
router.get('/', async (req, res) => {
        // Render the dashboard view and pass user data to it
        res.render('contact');
})

module.exports = router;
