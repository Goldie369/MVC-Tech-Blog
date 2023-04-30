//-- Adding a liberies--//
//--The path module provides utilities for working with file and directory paths--//
//-- The express module is a Node.js web application framework that provides a set of features for building web applications--//
//-- The session module is an Express.js middleware that provides session management functionality--//

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//-- Adding routes and database connections--//
//-- routes: A module that exports the routes of the application as an Express.js router--//
//-- sequelize: A module that exports a Sequelize instance configured to connect to a database--//
//-- helpers: A module that exports helper functions that can be used in the views of the application--//

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

//-- Adding express module is created and assigned to the app variable--//

const app = express();
const PORT = process.env.PORT || 3001;

//-- Adding an object sess is defined with session configuration options--//
//-- The secret option is used to sign the session ID cookie--//
//-- The cookie option is an object that sets additional cookie options--//
//-- The saveUninitialized option forces an uninitialized session to be saved to the session store--//

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//-- app.use(session(sess));: This line sets up a middleware function to enable session management in the application--//
//--  It uses the session module, which provides a way to store user-specific data on the server--//
//-- const hbs = exphbs.create({ helpers });: This line creates an instance of the Handlebars view engine, which allows you to render dynamic HTML templates--//
//-- app.engine('handlebars', hbs.engine);: This line sets the view engine for the application to Handlebars--//
//-- app.set('view engine', 'handlebars');: This line specifies that the default file extension for views will be .handlebars--//
//-- app.use(express.json());: This line sets up a middleware function to parse incoming requests with JSON--//
//-- app.use(express.urlencoded({ extended: true }));: This line sets up a middleware function to parse incoming requests with URL--//

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});