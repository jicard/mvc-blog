const excAuth = (req, res, next) => {
    console.log(req.session);
    if (!req.session.user_id) {
      res.redirect("/login");
      //return;
    } else {
      next();
    }
  };
  
  module.exports = excAuth;