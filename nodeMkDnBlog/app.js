const express = require('express');
const mongoose = require('mongoose');
const Article = require('./models/article');
const articleRouter = require('./routes/articles');
const methodOverride = require('method-override');
const app = express()

mongoose.connect('mongodb+srv://azimutuniverse:1234@cluster0.20jsw.mongodb.net/nodeblog?retryWrites=true&w=majority', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  })

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)   // :3000/articles/post, edit ...

app.listen(3000)