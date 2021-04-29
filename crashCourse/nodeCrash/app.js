const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const blogRoutes = require('./routes/blogRoutes');

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
app.use('/blogs/', blogRoutes);


// 404
app.use((req, res) => {
  res.status(404).render('404', { title: '404 EJS' });
});

