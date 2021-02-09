function missingHandler(req, res) {
  res.writeHead(404, { "content-type": "text/html" });
  res.end("<h1>missing Not Found</h1>");
}

module.exports = missingHandler;
