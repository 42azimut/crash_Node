const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to Cloud Mongodb URI
const dbURI = 'mongodb+srv://azimutuniverse:1234@cluster0.20jsw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000, console.log('mongo cloud db connected')))
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

//middleware  & static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  //res.sendFile('./views/about.html', { root: __dirname });  
  res.render('about', { title: 'About EJS' });
});

// blog routes
app.get('/blogs', (req, res) => {
  Blog.find().sort( { createdAt: -1 })
    .then((result) => {
      res.render('index', { title: 'All Blogs', blogs: result })
    })
    .catch((err) => {
      conolse.log(err);
    })
})

app.post('/blogs', (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
    .then((result) => {
      res.redirect('/blogs');
    })
    .catch((err) => {
      console.log(err);
    })
})

// create 라우터가 아래 :id 보다 위에 이썽야 한다. 
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create EJS' });
});

app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findById(id)
  .then(result => {
    res.render('details', { blog: result, title: 'Blog Details' });;
  })
  .catch(err => {
    console.log(err);
  })
})

app.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' })
    })
    .catch(err => {
      console.log(err);
    }) 
})

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: '404 EJS' });
});