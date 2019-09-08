const passport = require("passport");

//import all the strategies
//const googleStrategy = require('./google-strategy');
const signupStrategy = require('./signup-strategy');
const signinStrategy = require('./signin-strategy');
//const twitterStrategy = require('./twitter-strategy');

passport.use('local-signin', signinStrategy);
passport.use('local-signup', signupStrategy);

module.exports = passport;