const dataInput = document.getElementById("car-input");
const form = document.getElementById("form");

dataInput.addEventListener("keyup", (event) => {
  fetch(`/search/?name=${dataInput.value.toLowerCase()}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((data) => {
      document.getElementById("data-list").innerHTML = "";
      for (let index of data) {
        let opt = document.createElement("option");
        opt.value = index.carname;
        opt.textContent = index.carname;
        document.getElementById("data-list").appendChild(opt);
      }
    });
});

form.addEventListener("submit", (event) => {
  let datalaistvalue = document
    .getElementById("data-list")
    .textContent.toLowerCase();

  console.log(dataInput.value, "datainput", datalaistvalue, "datalist");

  if (dataInput.value.toLowerCase() !== datalaistvalue) {
    event.preventDefault();
    alert("car not found");
  } else {
    event.preventDefault();
    window.location.href = `/result/?name=${dataInput.value}`;
  }
});
