const express = require('express');
const app = express()
const articleRouter = require('./routes/articles');

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)   // :3000/articles/post, edit ...

app.get('/', (req, res) => {
  const articles = [{
    title: 'Test Article',
    createdAt: new Date(),
    description: 'Test Des blar bla '
  },
  {
    title: 'Test Article 22',
    createdAt: new Date(),
    description: 'Test Des 2222 blar bla '
  }]
  res.render('index', { articles: articles })
})

app.listen(3000)