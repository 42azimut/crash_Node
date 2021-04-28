const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

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

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create EJS' });
});

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: '404 EJS' });
});