const express = require('express');
//const { model } = require('mongoose');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth'); 
// @desc  Login/Langding pagew
// @route GET/
router.get('/', ensureGuest, (req, res) => {
  res.render('login', {
    layout: 'login',
  }) 
});

// desc Dashboard
// GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
  res.render('dashboard', {
    name: req.user.firstName,
  }); 
});


module.exports = router;