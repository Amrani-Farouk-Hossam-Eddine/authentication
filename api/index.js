const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth.route");
const usersRoute = require("./routes/users.route");

dotenv.config();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

app.listen(8800, () => {
  console.log("API is working");
});
