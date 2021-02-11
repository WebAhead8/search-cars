const q = require("request");

function getCountryData(request, respons) {
  const country = request.url.split("=")[1];

  q.get(
    `https://restcountries.eu/rest/v2/name/${country}`,
    function (error, response, body) {
      if (error) {
        console.error(err);
        response.writeHead(500, { "content-type": "text/html" });
        response.end("<h1>Server Error</h1>");
      } else {
        respons.end(body);
      }
    }
  );
}
module.exports = getCountryData;
