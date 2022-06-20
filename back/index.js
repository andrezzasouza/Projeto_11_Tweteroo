import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
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

app.get("/tweets", (_req, res) => {
    const latestTweets = tweets.slice(-10);
    latestTweets.reverse();
    for(let i of latestTweets) {
        i.avatar = user.find(user => user.username === i.username).avatar;
    }
    res.send(latestTweets);
});

app.listen(5000);