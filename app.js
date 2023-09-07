const express = require("express");
const cors = require("cors");
const pagesRouter = require("./routes/pageRouter");

const app = express();

app.use(cors());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(express.json());
app.use("/", pagesRouter);

app.listen(80, () => {
    console.log("listening port 80");
});

