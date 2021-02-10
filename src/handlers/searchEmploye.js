const fs = require("fs");
const path = require("path");
const db = require("../db/connection");

// function searchEmployeHandler(request, response)
//{
//     const params = new URLSearchParams(request.url.split("?")[1]);
//     const carName = params.get("name");

//     const initPath = path.join(__dirname , ".." , "./db/init.sql");
//     fs.readFile(initPath ,{encoding: "utf-8"}, (err , file)=>{
//         if(err)
//         {
//             console.log('err',err.message);
//             response.writeHead(404, {encoding: "utf-8"} ,{"content-type" : "text/html"});
//             response.end("<h1> error </h1>");
//         }

//         else
//         {
//             response.writeHead(200 , {"content-type": "application/json"});
//             console.log('here');
//             let employeArray = JSON.parse(file).filter((cars)=>{
//                 return cars.companyName.toLowerCase().startsWith(carName.toLowerCase());
//             })
//             // employeArray = [... new Set(employeArray)];
//             console.log('Emp array: ',employeArray)
//             response.end(JSON.stringify(employeArray));
//         }
//     })
// }

function searchEmployeHandler(request, response) {
<<<<<<< HEAD
  const params = new URLSearchParams(request.url.split("?")[1]);
  const car = params.get("name");

  db.query("SELECT * FROM employes WHERE LOWER(carName) = $1", [car])
    .then((result) => {
      response.writeHead(200, { "content-type": "application/json" });
      response.end(JSON.stringify(result.rows));
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
=======
    const params = new URLSearchParams(request.url.split("?")[1]);
    const car = params.get("name");

    db.query(`SELECT * FROM employes WHERE carName = $1`, [car])
        .then(result => {
            response.writeHead(200 , {encoding:"utf-8"} ,{ "content-type": "application/json" });
            console.log(result.rows);
            response.end(JSON.stringify(result.rows))
        })
        .catch(error=>{
            console.log('error',error.message);
            response.writeHead(404, {encoding: "utf-8"} ,{"content-type" : "text/html"});
            response.end("<h1> error </h1>");
        })

>>>>>>> 4fce395985febc82d17a52d8e48c021187bace88
}

module.exports = searchEmployeHandler;
