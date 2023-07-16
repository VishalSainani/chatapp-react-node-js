const express = require("express");
const cors = require("cors");
const axios = require("axios");
require('dotenv').config({ path: '.env.local' });

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", async (req, res) => {
    return res.send("server is running ");
});


app.post("/authenticate", async (req, res) => {
    console.log("env backend", process.env.PRIVATE_KEY)

    const { username } = req.body;
    // Get or create user on Chat Engine!
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "Private-Key": process.env.PRIVATE_KEY } }

        )
        console.log("ok", r);
        return res.status(r.status).json(r.data);
    } catch (e) {
        console.log("not ok", e);

        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(process.env.PORT || 4000);