module.exports = {
    ensureAuth: function (req, res, next) {
      //if sucessful login 
        if (req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/')
      }
    },
    ensureGuest: function (req, res, next) {
      // after login would see dashboard page, not login page
        if (!req.isAuthenticated()) {
        return next();
      } else {
        res.redirect('/dashboard');
      }
    },
  }