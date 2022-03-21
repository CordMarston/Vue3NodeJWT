const db = require("../models");
// const config = require("../config/auth.config");
const Site = db.site;
const User = db.user;
const jwt = require("jsonwebtoken");
const Browser = require("zombie");
exports.create = (req, res) => {
  let token = req.headers["x-access-token"];
  // Save Site to Database
  Site.create({
    name: req.body.name,
    scheme: req.body.scheme,
    url: req.body.url
  })
  .then(site => {
    let user_id = jwt.decode(token).id;
    site.setUser([user_id]).then(() => {
      res.send({ message: "User was registered successfully!" });
    });
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};