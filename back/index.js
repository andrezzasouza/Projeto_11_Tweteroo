import express from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());
const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    users.push(req.body);
    res.send("OK");
});

app.post("/tweets", (req, res) => {
    tweets.push(req.body);
    res.send("OK");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000")
});