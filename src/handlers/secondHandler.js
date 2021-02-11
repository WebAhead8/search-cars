const fs = require("fs");
const path = require("path");

function secondHandler(request, response) {

  const filePath = path.join(__dirname, "..", "public" ,"secondPage.html");
  fs.readFile(filePath, {encoding: "utf-8"}, (err, file) => {
    if (err) {
      console.error(err);
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Server Error</h1>");
    } else {
      response.writeHead(200 , {"content-type": "text/html"});
      response.end(file)
      
    }
  });
}

module.exports = secondHandler;
