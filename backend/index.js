import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import KucingRoute from "./routes/KucingRoute.js";
import AnjingRoute from "./routes/AnjingRoute.js";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
const app = express();
dotenv.config();

// (async () => {
//   await db.sync();
// })();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(KucingRoute);
app.use(AnjingRoute);
app.use(UserRoute);
app.use(AuthRoute);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server up and running...` + process.env.APP_PORT);
});
