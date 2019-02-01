const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const logger = require('morgan')
const config = require('./config');

// connect to the database and load models
// uses environmental variable for deployment (Heroku) or defaults to local config
const uri = process.env.MONGODB_URI || config.dbUri;

mongoose.connect(uri);

// plug in the promise library:
mongoose.Promise = global.Promise;

mongoose.connection.on('error', (err) => {
	console.error(`Mongoose connection error: ${err}`);
	process.exit(1);
});

// Use morgan logger for logging requests
app.use(logger("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// pass the passport middleware
app.use(passport.initialize());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Add routes, both API and view
require('./routes/api-routes-adult.js')(app);
require('./routes/api-routes-child.js')(app);
require('./routes/api-routes-teacher.js')(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://volunteer:vmommy1@ds031962.mlab.com:31962/heroku_58l4pc3g",
  { useNewUrlParser: true}
);
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactNotes");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});