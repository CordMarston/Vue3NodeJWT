const express = require("express");
const cors = require("cors");
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // res.header("Access-Control-Allow-Origin", "cookie.cordmarston.com"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var corsOptions = {
  origin: "https://cookie.cordmarston.com"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "the fuck are you looking for?" });
});
// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/site.routes')(app);
// set port, listen for requests
const PORT = process.env.PORT || 1222;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// database
const db = require("./models");
const Role = db.role;
const User = db.user;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  var bcrypt = require("bcryptjs");
  User.create({
    'firstname': 'Cord',
    'lastname': 'Marston',
    'password': bcrypt.hashSync('test123'),
    'email': 'marston.cord@gmail.com'
  });

  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "admin"
  });
}