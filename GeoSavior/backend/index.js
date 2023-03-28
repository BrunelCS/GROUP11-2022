import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "ribs000",
    database: "geosaviours",
});

db.connect(err => {  
       if(err) {    
             throw err}
              console.log('MySQL Connected') });

app.post('/create', (req,res) => {


    const nickname = req.body.nickname
    const email = req.body.email
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const password = req.body.password
    db.query(
        "INSERT INTO user (nickname,email,firstName,lastName,password) VALUES (?,?,?,?,?)",
        [nickname,email,firstName,lastName,password],
        (err,result) => {
            if(err) {
            console.log(err);
            }else{
                res.send("Values inserted");
            }
        }
    );
});

app.post('/login', (req, res)=>{
    const nickname = req.body.nickname
    const password = req.body.password
    db.query(
        "SELECT * FROM user WHERE nickname = ?  AND password = ?",
        [nickname,password],
        (err,result) => {

            if(err){
             res.send({err: err});
            }
            
            
                if (result){
                    res.send(result);
                } else {
                    res.send({message: "Wrong username or password"});
                }
            }

        
            
    );
});

app.get('/api/hello', (req, res) => {
    res.send('hello world');
});
app.listen(3002, () => {
    console.log("running server");
});

//AND email = ? AND firstName = ? AND lastName = ?