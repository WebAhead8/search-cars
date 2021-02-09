const fs = require("fs");
const path = require("path");

const types = {
  css: "text/css",
  png: "image/png",
  jpg: "image/jpeg",
  html: "text/html",
  js: "application/javascript",
  json: "application/json",
  ico: "image/x-icon",
};

function publicHandler(req, res) {
  const url = req.url;
  const filePath = path.join(__dirname, "..", url);
  const extention = url.split(".")[1];
  const type = types[extention];

  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(404, { "content-type": "text/html" });
      res.end("<h1>Server Error</h1>");
    } else {
      res.writeHead(200, { "content-type": type });
      res.end(file);
    }
  });
}

module.exports = publicHandler;
