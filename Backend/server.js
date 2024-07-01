const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_db"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post('/create', (req, res) => {
    const sql = "INSERT INTO users (`Name`, `Email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ];

    db.query(sql, [values], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.json("Error");
        }
        return res.json(result);
    });
});

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
