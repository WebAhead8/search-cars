const homeHandler = require("./handlers/home");
const missingHandler = require("./handlers/missing");
const publicHandler = require("./handlers/public");
const searchHandler = require("./handlers/search");
const secondHandler = require("./handlers/secondHandler");
const thirdHandler = require("./handlers/thirdHandler");
const countyHandler = require("./handlers/country");
const searchEmployeHandler = require("./handlers/searchEmploye")

function router(req, res) {

  const url = req.url;

  if (url === "/")
    homeHandler(req, res);

  else if (url.includes("public"))
    publicHandler(req, res);

  else if (url.includes("search"))
    searchHandler(req, res);

  else if (url.includes("btata"))
    searchEmployeHandler(req, res);

  else if (url.includes("result"))
    secondHandler(req, res);

  else if (url.includes("info"))
    thirdHandler(req, res);

  else if (url.includes("country"))
    countyHandler(req, res);

  else
    missingHandler(req, res);

}
  module.exports = router;
