import express from "express"; //import express
import db from "./config/Database.js"; //import config db
// import Users from "./models/UserModel.js"; //import user table
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/index.js";
dotenv.config();
const app = express(); //app

// try {
//   await db.authenticate(); //untuk cek database connect
//   console.log("Database Connected");
//   // await Users.sync(); //untuk sync table dgn db, apabila tidak ada table, maka akan otomatis dibuatkan
// } catch (error) {
//   console.log(error); //error
// }
app.use(cors({ credentials: true, origin: "http://localhost:5000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server running at port 5000")); //server running
