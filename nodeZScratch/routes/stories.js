const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middleware/auth');

const Story = require('../models/Story');

// @desc  Login/Landing Page
// @route GET /
router.get('/', ensureGuest, (req, res) => {    //로그인 안한 게스트가 들어오면
  res.render('login', {                         // 로그인 페이지로 렌더링
    layout: 'login'
  });
});



module.exports = router;