const express = require("express");
const config = require("config");
const fs = require('fs')
const path = require("path");
const bodyParser = require("body-parser");

const PORT = config.get("port") || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({ extended: true }));


app.use("/api", require("./routes/users.routes"));

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const start = async () => {
  try {
    app.listen(PORT, () => console.log("App hes benn started on port " + PORT));
  } catch (e) {
    console.log("server error", e.message);
    process.exit(1);
  }
};

start();
