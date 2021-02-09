const http = require("http");
const router = require("./router");
require("dotenv").config();
const port = process.env.PORT || 4000;

const server = http.createServer(router);

server.listen(port, () => console.log(`Listenig at http://localhost:${port}`));
