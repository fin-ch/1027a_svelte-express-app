const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const path = require("path");
const axios = require("axios");
const fs = require("fs");

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.post("/", (req, res) => {
    var temp;
    fs.readFile("./db.json", function (err, data) {
        if (err) throw err;
        console.log("data1");
        console.log(JSON.parse(data));
        temp = JSON.parse(data);
        console.log("data3");
        console.log(temp.device);
        temp.device[0].time = req.body.time;
        fs.writeFile("./db.json", JSON.stringify(temp), function (err) {
            if (err) throw err;
        });
    });
    res.end();
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});
