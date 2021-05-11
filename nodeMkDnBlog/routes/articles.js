const express = require('express');
const router = express.Router()

router.get('/test', (req, res) => {
  res.send('in article index')
})


module.exports = router