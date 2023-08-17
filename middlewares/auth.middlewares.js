
const auth = (req, res, next) => {
  const token = req.headers["Authorization"];
  // token == 'assil'

  if (!token) {
    res.status(401).send({ message: "You are not authorized" });
  }

  if (!!token) {
    // bcrypt
    // decripted token
    //
    // jwt
    //   jwt(decryptedToken)
    //   user
    req.user = user;
  }

  next();
};

module.exports = { auth };
