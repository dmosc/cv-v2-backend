const express = require("express");
const cors = require("cors");
const {loadDDLQueries, getDatabase} = require("./database");

loadDDLQueries();

const app = express();
app.use(cors());

app.get('/work-experience', (_, res) => {
  const database = getDatabase();
  const query = `SELECT * FROM WorkExperience AS WE JOIN Company AS C ON WE.company = C.id;`;

  database.query(query, (error, rows) => {
    if (error) res.status(400).json(error);
    res.status(200).json(rows);
  });
});

app.listen(4000, () => console.log('Listening on port 4000'));