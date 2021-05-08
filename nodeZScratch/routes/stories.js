const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middleware/auth');

const Story = require('../models/Story');

// @desc  Show add page
// @route GET /stories/add
router.get('/add', ensureAuth, (req, res) => {    //로그인 안한 게스트가 들어오면
  res.render('stories/add');
});

// @desc  Process add form
// @route POST /stories
router.post('/', ensureAuth, async (req, res) => { 
  try {
    req.body.user = req.user.id 
    await Story.create(req.body);
    res.redirect('/dashboard')
  } catch (err) {
    console.error(er);
    res.render('error/500');
  }
});


// @desc  Show all Stories
// @route GET /stories
router.get('/', ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({ status: 'public' })
                    .populate('user')  // join with 'user'
                    .sort({ createdAt: 'desc' })
                    .lean()
    res.render('stories/index', {
      stories,
    })

  } catch (err) {
    console.error(err)
  }
});

module.exports = router;