import express from "express";
import path from "path";
import { ENV } from "./config/env.js";

const app = express();
const __dirname = path.resolve();

app.get("/api/health", (req, res) => {
    res.json({ message: "Hello Server" });
});


//make it prouduction
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../admin/dist")));

    app.use((req, res) => {
        res.sendFile(path.join(__dirname, "../admin/dist/index.html"));
    });
}

app.listen(ENV.PORT, () => {
    console.log(`Server running on http://localhost:${ENV.PORT}`);
});
