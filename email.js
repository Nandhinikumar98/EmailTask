const express = require("express");
const path = require("path");
const emailcontroller = require("./Controller/emailcontroller");

const app = express();
//const port = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json);

const authentication = (req, res, next) => {
  const { mail, subject, message } = req.body;
  if (!mail || !subject || !message) {
    return res.status(400).send("No fields should be empty....");
  }
  next();
};

//app.post("/mail", authentication, require("./Controller/emailcontroller"));
app.post("/mail", authentication, emailcontroller.senddata);

app.get("/", (req, res, next) => {
  res.senddata(path.join(__dirname, "index.html"));
  next();
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
