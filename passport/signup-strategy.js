const Strategy = require("passport-local").Strategy;
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const signupStrategy = new Strategy({ passReqToCallback: true, usernameField: 'email' }, function(
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
      if (user) {
        return done('user already exists', user);
      }

      const encryptedPassword = bcrypt.hashSync(password, salt);

      let newUser = new User({
        email,
        password: encryptedPassword
      });

      newUser.save((error, inserted) => {
        if (error) {
          return done(error, null);
        }
        //delete inserted.password;
        return done(null, inserted);
      });
    });
});

module.exports = signupStrategy;
