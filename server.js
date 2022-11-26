const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());

const cors = require("cors");

// Filesystem module
var fs = require("fs");
var dir = "./tmp";

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/data", function (req, res) {
  // remove directory and files if exists
  fs.rmSync(dir, { recursive: true, force: true });
  // create directory
  fs.mkdirSync(dir);

  //filter post data
  Object.keys(req.body).map((key, index) => {
    req.body[key].map(
      (submission) => {
        //create directory for each user
        if (!fs.existsSync(dir + "/" + submission.users.username)) {
          fs.mkdirSync(dir + "/" + submission.users.username, {
            recursive: true,
          });
        }
        // fs.writeFile(dir + "/" + submission.users.username + "/" + submission.id + ".pl", submission.code, function (err,data));

        fs.writeFile(
          dir + "/" + submission.users.username + "/" + submission.id + ".pl",
          submission.code,
          function (err, data) {
            if (err) {
              return console.log(err);
            }
            console.log(data);
          }
        );
      }

      //console.log(submission.users.username)
    );
  });
});

app.listen(3001, function () {
  console.log("Server started on port 3001");
});
