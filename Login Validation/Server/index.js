
const express = require("express");
const mysql = require("mysql");

const app =express();

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "ribs000",
    database: "geosaviours",
});

app.listen(3001, () => {
    console.log("running server");
});