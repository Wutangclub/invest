// dashboardRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { ensureAuth } = require("../middleware/auth");

// Dashboard route
router.get('/', async (req, res) => {
    try {
        // Fetch user data from MongoDB
        const user = await User.findById(req.user.id);
        if (!user) {
            throw new Error('User not found');
        }
        
        // Render the dashboard view and pass user data to it
        res.render('plans', { user });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).send('Error fetching user data');
    }
});


module.exports = router;
