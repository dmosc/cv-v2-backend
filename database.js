const mysql = require("mysql");
const fs = require("fs");

// docker run -p 3306:3306 --name nodejs-mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=eshop -d mysql:5.7
const getDatabase = () => {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'personal_cv',
    multipleStatements: true
  });
};

const loadDDLQueries = () => {
  const database = getDatabase();
  const data = fs.readFileSync("data.sql", "utf-8").replace(/[\r\n]/g, "").toString();
  database.query(data);
  database.end();
}

module.exports = {
  getDatabase,
  loadDDLQueries
}