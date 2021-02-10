const input = window.location.search.split("=")[1];

fetch(`./search/?name=${input.toLowerCase()}`)
  .then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  })
  .then((data) => {
    fillData(data);
  })
  .catch((err) => console.log("An Error Here:", err));

function fillData(data) {
  document
    .getElementById("flagImg")
    .setAttribute("src", data[0]["country_flag"]);

  document.getElementById("companyName").textContent = data[0]["carname"];

  document.getElementById("carLogo").setAttribute("src", data[0]["iconurl"]);
}

//search empolye
fetch(`/btata/?name=${input.toLowerCase()}`)
  .then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  })
  .then((dataEmploye) => {
    fillData1(dataEmploye);
  });

function fillData1(dataEmploye) {
  let li1 = document.createElement("li");
  li1.textContent = "employe name : " + dataEmploye[0]["employename"];
  document.getElementById("ulInfo").appendChild(li1);

  let li2 = document.createElement("li");
  li2.textContent = "job title : " + dataEmploye[0]["jobtitle"];
  document.getElementById("ulInfo").appendChild(li2);

  let li3 = document.createElement("li");
  li3.textContent = "phone number : " + dataEmploye[0]["phone"];
  document.getElementById("ulInfo").appendChild(li3);

  let li4 = document.createElement("li");
  li4.textContent = "email : " + dataEmploye[0]["email"];
  document.getElementById("ulInfo").appendChild(li4);
}
