const infoB = document.getElementById("infoButton");
const input = window.location.search.split("=")[1];

fetch(`/search/?name=${input.toLowerCase()}`)
  .then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    fillinformation(data);
  });

function fillinformation(data) {
<<<<<<< HEAD
  document
    .getElementById("flagImg")
    .setAttribute("src", data[0]["country_flag"]);
  document.getElementById("flagImg").textContent = data[0]["industry"];

  document.getElementById("companyName").textContent = data[0]["carname"];

  document.getElementById("carLogo").setAttribute("src", data[0]["iconurl"]);
=======
  document.getElementById("flagImg").setAttribute("src", data[0]["country_flag"]);
  document.getElementById("flagImg").textContent = data[0]["industry"];

  document.getElementById("companyName").textContent = data[0]["carName"];

  document.getElementById("carLogo").setAttribute("src", data[0]["iconUrl"]);
>>>>>>> 4fce395985febc82d17a52d8e48c021187bace88

  for (const index of data[0]["geners"]) {
    let par = document.createElement("span");
    par.textContent = index;
    document.getElementById("genres").appendChild(par);
  }
}

infoB.addEventListener("click", (event) => {
  window.location.href = `/info/?name=${input}`;
});

function getcountryinfo() {
  let countyName = document.getElementById("flagImg").textContent;

  window.location.href = `/country/?name=${countyName}`;
}
