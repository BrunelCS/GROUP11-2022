const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");

const app = express();

const PORT = 3002

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3003, () => {
    console.log("running server");
});



const db = mysql2.createConnection({
    user: "root",
    host: "localhost",
    password: "123RootOpen",
    database: "geosaviour",
});

db.connect(err => {
    if (err) {
        console.log(err)
    }
    console.log('MySQL Connected')
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
