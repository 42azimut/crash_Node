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
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog 222',
    snippet: 'about my new blog',
    body: 'more about new blog',
  });
  blog.save()
    .then((result) => {
      res.send(result)
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('608a34c43023c61755422cd9')
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });
});


app.get('/', (req, res) => {
  const blogs = [
    {title: 'wonderWoman', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
    {title: 'SuperMan', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
    {title: 'Ironman3', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
  ];
  res.render('index', { title: 'Home EJS', blogs });
});

app.get('/about', (req, res) => {
  //res.sendFile('./views/about.html', { root: __dirname });  
  res.render('about', { title: 'About EJS' });
});

//blog routes
app.get('/blogs')

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create EJS' });
});

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: '404 EJS' });
});