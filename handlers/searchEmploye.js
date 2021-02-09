const fs = require("fs");
const path = require("path");


function searchEmployeHandler(request, response)
{
    const params = new URLSearchParams(request.url.split("?")[1]);
    const carName = params.get("name");

    const filePath = path.join(__dirname , ".." , "employeData.json");

    fs.readFile(filePath ,{encoding: "utf-8"}, (err , file)=>{
        if(err)
        {
            console.log('err',err.message);
            response.writeHead(404, {encoding: "utf-8"} ,{"content-type" : "text/html"});
            response.end("<h1> error </h1>");
        }

        else
        { 
            response.writeHead(200 , {"content-type": "application/json"});
            console.log('here');
            let employeArray = JSON.parse(file).filter((cars)=>{
                return cars.companyName.toLowerCase().startsWith(carName.toLowerCase());
            })
            // employeArray = [... new Set(employeArray)];
            console.log('Emp array: ',employeArray)
            response.end(JSON.stringify(employeArray));
        }
    })
}

module.exports=searchEmployeHandler;