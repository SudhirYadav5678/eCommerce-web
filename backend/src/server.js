import express from "express";

const app = express();

app.get("/", (req, res) => {
    return res.json({
        message: "Hello 5000"
    })
})
app.listen(5000, (req, res) => {
    console.log("server is running");

})