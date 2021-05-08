const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectDB = require('./config/db');


// Load config
dotenv.config({ path: './config/config.env' });

// Paspsort config
require('./config/passport')(passport)

connectDB();  // connectDB cluster0 연결실행! 

const app = express();

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Session
app.use(session({
  secret: 'cat secret',
  resave: false,
  saveUninitialized: false,
  // store: new MongoStore({ mongooseConnection: mongoose.connection })
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI})
}))

// Handlebars Helpers
const {
  formatDate,
  stripTags,
  truncate,
  editIcon,
  select,
} = require('./helpers/hbs')

// Handlebars
app.engine(
  '.hbs',
  exphbs({
    helpers: {
      formatDate,
      stripTags,
      truncate,
      editIcon,
      select,
    },
    defaultLayout: 'main',
    extname: '.hbs',
  })
)
  
app.set('view engine', '.hbs');

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// SEt global var
app.use(function (req, res, next) {
  res.locals.user = req.user || null
  next()

})

// Static Foler
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/stories', require('./routes/stories'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, 
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)); 
