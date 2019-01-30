const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
require('./routes/api-routes-adult.js')(app);
require('./routes/api-routes-child.js')(app);
require('./routes/api-routes-teacher.js')(app);

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