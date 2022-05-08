const express = require("express");
const cors = require("cors");
const {loadDDLQueries, getDatabase} = require("./database");

loadDDLQueries();

const app = express();
app.use(cors());

app.get('/work-experience', (_, res) => {
  const database = getDatabase("personal_cv");
  const query = `
    SELECT title, C.name AS company, CT.name AS team, start, end, WE.description AS work_description, CT.description AS team_description, ipfs_cid, color 
    FROM WorkExperience AS WE
    JOIN CompanyTeam AS CT ON WE.team = CT.id
    JOIN Company AS C ON CT.company = C.id;
  `;

  database.query(query, (error, rows) => {
    if (error) res.status(400).json(error);
    res.status(200).json(rows);
  });
});

app.listen(4000, () => console.log('Listening on port 4000'));