const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const path = require("path");
const axios = require("axios");

app.use(cors());

app.use(express.static("public"));

app.post("/", (req, res) => {
    res.end();
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});
