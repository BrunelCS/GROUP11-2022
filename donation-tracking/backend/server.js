const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "sharedacc123",
  database: "donationtracking",
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

db.connect(err => {  
       if(err) {    
             throw err}
              console.log('MySQL Connected')
});

app.get('/dt', (req, res) => {
    const sql = "SELECT * FROM donationtracking.dt;";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

app.get('/api/hello', (req, res) => {
    res.send('hello world');
});

app.listen(3002, () => {
    console.log("running server");
});