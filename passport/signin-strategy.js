const Strategy = require('passport-local').Strategy;
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const loginStrategy = new Strategy({ passReqToCallback: true, usernameField: 'email' }, function(
    req,
    email,
    password,
    done
  ) {
    //const email = req.body.email;
  
    User.findOne({ email }).lean().exec((err, user) => {
        if (err) {
          return done(err, null);
        }
        if (!user) {
          return done('no user found', null);
        }
  
        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            return done('password not valid', null);
        }

        return done(null, user);
    });        
  });

module.exports = loginStrategy;