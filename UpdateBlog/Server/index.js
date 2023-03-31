// Import 3 modules that I am using
// Express is used for handling different Http requests
// mysql2 is used for establishing a link to my sql database created on mysql workbench
// cors is the protocol used for handling client-server requests

const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");

const app = express();

const PORT = 3002

app.use(express.json());
app.use(cors());

//The code below is just test code to see if i can get a connection to the backend API and that the connection to the server can be established

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3003, () => {
    console.log("running server");
});

//The code below establishes a connection to my database which

const db = mysql2.createConnection({
    user: "root",
    host: "localhost",
    password: "123RootOpen",
    database: "geosaviour",
});

app.get('/submition', (req, res) => {
    db.query(
        "SELECT* FROM comment ",
        
        (err, result) => {
            if (err) {
                console.log(err);
            } 
            res.send(result)
        }
    );
});

db.connect(err => {
    if (err) {
        console.log(err)
    }
    console.log('You have connected to the MYSQL Server')
});

app.post('/submition', (req, res) => {
    const content = req.body.content;
    const publish_date = req.body.publish_date;
    const user_id = req.body.user_id;
    const author_name = req.body.author_name;

    db.query(
        "INSERT INTO comment (content, publish_date, user_id, author_name) VALUES (?,?,?,?)",
        [content, publish_date, user_id, author_name],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values insterted")
            }
        }
    );
});
