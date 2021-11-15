import express from "express";
import { PORT } from "./config";
import connection from "./db/connection";
import router from "./routes";

const app = express();
connection();

app.use(express.json());

app.use("/api",router);

app.listen(PORT, () => console.log(`Listening on port no ${PORT}`));
