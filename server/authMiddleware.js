const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {

  let headers = req.headers;
  if (headers) {
    const authorization = headers["authorization"];
    if (authorization) {
      const token = authorization.split(" ")[1];
      console.log(token);
      const decoded = jwt.verify(token, "KRABBYPATTYFORMULA");
      if (decoded) {
        const username = decoded.username;
        const authUser = users.find((user) => user.username == username);
        if (authUser) {
          next()
        } else {
          res.json({ error: "Unable to authenticate" });
        }
      }
    } else {
      res.json({ error: "Unable to authenticate" });
    }
  } else {
    res.json({ error: "Required headers" });
  }
}

module.exports = authenticate