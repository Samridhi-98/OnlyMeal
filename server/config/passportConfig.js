const User = require("../model/user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
  passport.use(
    new localStrategy((firstname, password, done) => {
      User.findOne({ firstname: firstname }, (err, foundUser) => {
        if (err) throw err;
        if (!foundUser) {
          return done(null, false);
        }
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, foundUser) => {
      const userInformation = {
        firstname: foundUser.firstname,
      };
      cb(err, userInformation);
    });
  });
};