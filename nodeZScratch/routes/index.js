const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

const Story = require('../models/Story')

// @desc  Login/Landing Page
// @route GET /
router.get('/', ensureGuest, (req, res) => {    //로그인 안한 게스트가 들어오면
  res.render('login', {                         // 로그인 페이지로 렌더링
    layout: 'login'
  });
});

// @desc  Dashboard
// @route GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {   //로그인한 유저(본인)이 대시보드에 들어오면 대시보드..
  try {
    const stories = await Story.find({ user: req.user.id }).lean()
    res.render('dashboard', {
      name: req.user.firstName,
      stories, 
      //  firstname: req.user.firstName,  // 두번째 인자에 객체형태로 자료를 담아 뷰에 전달할수 있다. 
      //  disName: req.user.displayName,
    })
  } catch (err) {
    console.error(err);
    res.render('error/500');
  }
  });


module.exports = router;