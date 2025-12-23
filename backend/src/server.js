import express from "express";
import path from "path";
import { clerkMiddleware } from '@clerk/express';
import { serve } from "inngest/express";
import { functions, inngest } from "./config/inngest.js";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();
const __dirname = path.resolve();
app.use(express.json())
app.use(clerkMiddleware()) //req.auth


app.use("/api/inngest", serve({ client: inngest, functions: functions }))
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


const statServer = async () => {
    await connectDB();
    app.listen(ENV.PORT, () => {
        console.log(`Server running on http://localhost:${ENV.PORT}`);
    });
}

statServer();