const express = require('express');
const router = express.Router();

// @desc  Login/Landing Page
// @route GET /
router.get('/', (req, res) => {
  res.send('login ~');
});

// @desc  Dashboard
// @route GET /dashboard
router.get('/dashboard', (req, res) => {
  res.send('dashbaord ~');
});


module.exports = router;