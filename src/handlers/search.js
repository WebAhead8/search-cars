const fs = require("fs");
const path = require("path");
const db = require("../db/connection");

function searchHandler(request, response) {
  // {
  //     const params = new URLSearchParams(request.url.split("?")[1]);
  //     const carName = params.get("name");

  //     const filePath = path.join(__dirname , ".." , "./db/data.json");

  //     fs.readFile(filePath ,{encoding: "utf-8"}, (err , file)=>{
  //         if(err)
  //         {
  //             response.writeHead(404, {encoding: "utf-8"} ,{"content-type" : "text/html"});
  //             response.end("<h1> error </h1>");
  //         }

  //         else
  //         {
  //             response.writeHead(200 , {"content-type": "application/json"});
  //             let carsArray = JSON.parse(file).filter((cars)=>{
  //                 return cars.name.toLowerCase().startsWith(carName.toLowerCase());
  //             })
  //             carsArray = [... new Set(carsArray)];
  //             response.end(JSON.stringify(carsArray));
  //         }
  //     })
  // }

  const params = new URLSearchParams(request.url.split("?")[1]);
  const car = params.get("name");

  db.query(`SELECT * FROM cars WHERE LOWER(carName) LIKE $1 || '%'`, [car])
    .then((result) => {
      // console.log(result.rows);
      response.writeHead(200, { "content-type": "application/json" });
      let carsArray = result.rows.filter((cars) => {
        console.log(cars.carname);
        return cars.carname;
      });
      carsArray = [...new Set(carsArray)];
      // console.log(carsArray, "carArray");
      response.end(JSON.stringify(carsArray));
    })
    .catch((error) => {
      console.log("error", error.message);
      response.writeHead(
        404,
        { encoding: "utf-8" },
        { "content-type": "text/html" }
      );
      response.end("<h1> error </h1>");
    });
}

module.exports = searchHandler;
