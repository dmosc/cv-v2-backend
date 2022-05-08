const mysql = require("mysql");
const fs = require("fs");
const {databaseKeys} = require("./environment");

// docker run -p 3306:3306 --name nodejs-mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=personal_cv -d mysql:5.7
const getDatabase = (database = "") => {
  return mysql.createConnection({
    ...databaseKeys,
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