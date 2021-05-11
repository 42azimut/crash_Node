const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send('hi there node blog')
})

app.listen(3000)