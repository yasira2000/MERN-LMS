const jwt = require("jsonwebtoken");

const verifyToken = (token, secretkey) => {
  return jwt.verify(token, secretkey);
};

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "User is not authenticated",
    });
  }

  const token = authHeader.split(" ")[1];

  const payload = verifyToken(token, process.env.ACCESS_TOKEN_SECRET);

  req.user = payload;

  next();
};

module.exports = authenticate;
