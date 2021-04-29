const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

// blog routes
router.get('/', blogController.blog_index);

router.post('/', blogController.blog_create_post);

// create 라우터가 아래 :id 보다 위에 이썽야 한다. 
router.get('/create', blogController.blog_create_get);

router.get('/:id', blogController.blog_details);

router.delete('/:id', blogController.blog_delete);

module.exports = router;