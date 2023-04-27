const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "demir");
  } catch (err) {
    req.isAuth = false;
    err.statusCode = 500;
    return next();
  }
  if (!decodedToken) {
    req.isAuth = false;
    error.statusCode = 401;
    return next();
  }
  req.userId = decodedToken.userId;
  req.isAuth = true;
  next();
};
