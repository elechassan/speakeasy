const passport = require('passport');
const User = require('../../models/user');

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log('serialize')
    done(null, user.username);
  });

  passport.deserializeUser((username, done) => {
    console.log('deserialize whatever')
    User.findByUserName(username)
    .then(user => {
      done(null, user);
    })
    .catch(err => {
      done(err, null);
    });
  });
};