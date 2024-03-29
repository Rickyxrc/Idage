const express = require("express");
const cors = require("cors");
const app = express();

process.env.GITHUBTOKEN="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"

console.log("checking environment......");
if (process.env.GITHUBTOKEN == undefined) {
  console.log('please set environment variable "GITHUBTOKEN".');
  process.exit();
}

app.use(cors());

console.log("loading router......");
app.get("/", require("./api/index/name"));
app.get("/github/user", require("./api/github/user"));
app.get("/github/repo", require("./api/github/repo"));
app.get("/luogu/user", require("./api/luogu/user"));
console.log("router loaded.");

console.log("server listening on 0.0.0.0:" + (process.env.PORT || 80) + ".");
app.listen(process.env.PORT || "80", "0.0.0.0");
