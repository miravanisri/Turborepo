import { email } from "@repo/common/config";
import express from "express";
console.log(email)
const app = express()

app.get("/", (req, res) => {
    res.json({
        message: "hello world"
    });
})


app.listen(8080)
