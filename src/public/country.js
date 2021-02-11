const output = document.querySelector("output");

let country = window.location.search.split("=")[1];

fetch(`/flag/?name=${country}`)
  .then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  })
  // if we get a successful response
  .then((countriesData) => {
    const country = document.createElement("h2");
    country.textContent = countriesData[0].name;
    const population = document.createElement("p");
    population.textContent = "population: " + countriesData[0].population;
    const capital = document.createElement("p");
    capital.textContent = "capital: " + countriesData[0].capital;
    const currencies = document.createElement("p");
    currencies.textContent = "currencies: ";
    const currenciesCode = document.createElement("li");
    const currenciesName = document.createElement("li");
    const currenciesSymbol = document.createElement("li");
    currenciesCode.textContent = "code: " + countriesData[0].currencies[0].code;
    currenciesName.textContent = "code: " + countriesData[0].currencies[0].name;
    currenciesSymbol.textContent =
      "code: " + countriesData[0].currencies[0].symbol;
    const flag = document.createElement("img");
    flag.src = countriesData[0].flag;

    output.appendChild(country);
    output.appendChild(population);
    output.appendChild(capital);
    output.appendChild(currencies);
    output.appendChild(currenciesCode);
    output.appendChild(currenciesName);
    output.appendChild(currenciesSymbol);
    output.appendChild(flag);
  })
  // if the request is unsuccessful
  .catch((error) => {
    console.log(error);
    if (error.message === "404" || "400") {
      output.textContent = `⚠️ Couldn't find "${country}"`;
    } else {
      output.textContent = "⚠️ Something went wrong";
    }
  });
