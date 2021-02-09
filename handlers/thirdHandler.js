const fs = require("fs");
const path = require("path");


function thirdHandler(req , res)
{
    const filePath = path.join(__dirname , ".." , "public" , "thirdPage.html");

    fs.readFile(filePath , {encoding: "utf-8"}, (err , file)=>{
        if(err)
        {
            console.error(err);
            res.writeHead(404,{"context-type":"text/html"})
            res.end("<h1>server error</h1>");
        }

        else
        {
            res.writeHead(200,{"context-type":"text/html"})
            res.end(file);
        }
    })
}

module.exports=thirdHandler;