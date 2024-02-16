const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "chironess1",
  database: "auth",
});

module.exports = db;
