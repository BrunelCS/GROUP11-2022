const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root123",
    database: "geosaviours",
});

db.connect(err => {
    if(err) {
        throw err
    }
    console.log('MySQL Connected')
});

app.post('/submition',(req, res)=> {
    const user_id = req.body.user_id;
    const donation_value = req.body.donation_value;
    const address = req.body.address;
    const charity_name = req.body.charity_name;
  
    db.query(
    "INSERT INTO donations (user_id, donation_value, address, charity_name) VALUES (?,?,?,?)", 
   [user_id, donation_value, address, charity_name], 
   (err, result)=> {
        if (err) {
            throw err;
        }
        console.log(err);
   }
   );
});
app.get('/api/hello', (req, res) => {
    res.send('Hello, World!');
  });


app.listen(3002, () => {
    console.log("running server");
});