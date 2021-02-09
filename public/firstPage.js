const dataInput = document.getElementById("car-input");
const form = document.getElementById("form");

dataInput.addEventListener("keyup", (event) => {
  fetch(`/search/?name=${dataInput.value}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((data) => {
      document.getElementById("data-list").innerHTML = "";

      for (let index of data) {
        let opt = document.createElement("option");
        opt.value = index.name;
        opt.textContent = index.name;
        document.getElementById("data-list").appendChild(opt);
      }
    });
});

form.addEventListener("submit", (event) => {
  let datalaistvalue = document.getElementById("data-list").textContent;

  if (dataInput.value !== datalaistvalue) 
  {
    event.preventDefault();
    alert("car not found");
  } 
  else 
  {
    event.preventDefault();
    window.location.href = `/result/?name=${dataInput.value}`;
  }
});
