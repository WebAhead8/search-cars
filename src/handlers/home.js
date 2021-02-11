const fs = require("fs");
const path = require("path");

function homeHandler(req, res) {
  const filepath = path.join(__dirname, "..", "public", "firstPage.html");
  fs.readFile(filepath, (err, file) => {
    if (err) {
      console.error(err);
      res.writeHead(404, { "content-type": "text/html" });
      res.end("<h1>Server Error</h1>");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(file);
    }
  });
}

module.exports = homeHandler;
