import express from "express";
import mysql from "mysql";
import cors from "cors";

//imports for the packages variable to be use in this backend file
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "ribs000",
    database: "geosaviours",
});

//declaring the server and making a connection to the database

db.connect(err => {  
       if(err) {    
             throw err}
              console.log('MySQL Connected') });
//when connecting to the database this message is shown 

app.post('/create', (req,res) => {
    


    const nickname = req.body.nickname
    const email = req.body.email
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const password = req.body.password
    //declariing these variables to be requested from the front end
    db.query(
        "INSERT INTO user (nickname,email,firstName,lastName,password) VALUES (?,?,?,?,?)",

    //db query so that data can get inserted into the table and in the correct column 
        [nickname,email,firstName,lastName,password],
        (err,result) => {
            if(err) {
            console.log(err);
            }else{
                res.send("Values inserted");
            }
            //should bbe sent to confirm whether values have been inserted 
        }
    );
});

app.post('/login', (req, res)=>{
    const nickname = req.body.nickname
    const password = req.body.password
    db.query(
        "SELECT * FROM user WHERE nickname = ?  AND password = ?",
    //database query so that it can select the correct data that needsto be checked for login 
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
// once using node index.js to start the server this message will will be sent to the console
