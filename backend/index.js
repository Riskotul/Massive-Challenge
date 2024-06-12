import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import KucingRoute from "./routes/KucingRoute.js";
import AnjingRoute from "./routes/AnjingRoute.js";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import EditRoute from "./routes/EditRoute.js"; 
dotenv.config();

const app = express();


// (async () => {
//   await db.sync();
// })();

try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.log("Error connecting to the database: ", error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(KucingRoute);
app.use(AnjingRoute);
app.use(UserRoute);
app.use(AuthRoute);
app.use(EditRoute);

app.listen(5000, () => {
  console.log("Server up and running on port 5000");
});
