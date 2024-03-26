const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "OrbitalSecret";

function createToken(data, time) {
  return jwt.sign(data, secret, { expiresIn: time });
}

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

module.exports = {
  createToken,
  verifyToken,
};
