const input = window.location.search.split("=")[1];

console.log("ala" + input);

fetch(`./search/?name=${input}`)
    .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
    })
    .then((data) => {
        console.log("the type of data is : " + typeof data)
        console.log("the data is : " + data)
        fillData(data);
    })
    .catch(err=>console.log('An Error Here:',err));


// fetch(`./btata/?name=${input}`)
//     .then((response) => {
//         if (!response.ok) throw new Error(response.status);
//         console.log("diab");
//         return response.json();
//     })
//     .then((dataEmploye) => {
//         console.log("the type of data is : " + typeof dataEmploye)
//         console.log("the data is : " + dataEmploye)
//         fillData1(dataEmploye);
//         console.log(dataEmploye+"bl5mes");
//     });

function fillData(data) {
    document.getElementById("flagImg").setAttribute("src", data[0]["country-flag"]);

    document.getElementById("companyName").textContent = data[0]["name"];

    document.getElementById("carLogo").setAttribute("src", data[0]["icon-url"]);

}

function fillData1(dataEmploye){

    let li1=document.createElement("li");
    li1.textContent="employe name : "+dataEmploye[0]["employeName"];
    document.getElementById("ulInfo").appendChild(li1);


    let li2=document.createElement("li");
    li2.textContent="job title : "+dataEmploye[0]["jobTitle"];
    document.getElementById("ulInfo").appendChild(li2);


    let li3=document.createElement("li");
    li3.textContent="phone number : "+dataEmploye[0]["phone"];
    document.getElementById("ulInfo").appendChild(li3);


    let li4=document.createElement("li");
    li4.textContent="email : "+dataEmploye[0]["email"];
    document.getElementById("ulInfo").appendChild(li4);
}
