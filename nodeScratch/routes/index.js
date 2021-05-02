const express = require('express');
//const { model } = require('mongoose');
const router = express.Router();

// @desc  Login/Langding pagew
// @route GET/
router.get('/', (req, res) => {
  res.render('login') 
});

// desc Dashboard
// GET /dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard'); 
});



module.exports = router;