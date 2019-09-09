const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const usersRouter = require("./routes/users");
const PORT = process.env.PORT || 3001;
const app = express();

const passport = require("./passport");



// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
//app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use('/authentication', usersRouter); // this is a prefix, so use /authentication/signup to test routes

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/authentication-example', 
{
  useCreateIndex: true,
  useNewUrlParser: true
});


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
