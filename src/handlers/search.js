const fs = require("fs");
const path = require("path");
const db = require("../db/connection");


// function searchHandler(request, response)
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

function searchHandler(request, response) {
    const params = new URLSearchParams(request.url.split("?")[1]);
    const car = params.get("name");

    db.query(`SELECT * FROM cars WHERE carName = $1`, [car])
        .then(result => {
            response.writeHead(200 , {encoding:"utf-8"} ,{ "content-type": "application/json" });
            response.end(JSON.stringify(result.rows))
        })
        .catch(error=>{
            console.log('error',error.message);
            response.writeHead(404, {encoding: "utf-8"} ,{"content-type" : "text/html"});
            response.end("<h1> error </h1>");
        })

}

module.exports=searchHandler;