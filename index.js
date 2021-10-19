import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(cookieParser());

app.get("/setcookie", (req, res) => {
  res.cookie("luckynumber", Math.random());
  res.cookie("pet", "veera");
  res.send("you now have a cookie :)");
});

app.use((req, res) => {
  console.log({
    cookies: req.cookies,
    signed:  req.signedCookies
  });
  res.send("bye");
});

app.listen(3999, () => console.log("Listening: http://localhost:3999"));