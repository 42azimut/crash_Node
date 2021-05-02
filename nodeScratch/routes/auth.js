const express = require('express');
const passport = require('passport');
//const { model } = require('mongoose');
const router = express.Router();

// @desc  Auth with Google
// @route GET/auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// desc Google auth callback
// GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard')
  }
)


module.exports = router;