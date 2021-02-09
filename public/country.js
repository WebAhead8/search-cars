const output = document.querySelector("output");

let country = window.location.search.split("=")[1];


fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  .then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  })
  // if we get a successful response
  .then((citiesData) => {
    const country = document.createElement("h2");
    country.textContent = citiesData[0].name;
    const population = document.createElement("p");
    population.textContent = "population: " + citiesData[0].population;
    const capital = document.createElement("p");
    capital.textContent = "capital: " + citiesData[0].capital;
    const currencies = document.createElement("p");
    currencies.textContent = "currencies: ";
    const currenciesCode = document.createElement("li");
    const currenciesName = document.createElement("li");
    const currenciesSymbol = document.createElement("li");
    currenciesCode.textContent = "code: " + citiesData[0].currencies[0].code;
    currenciesName.textContent = "code: " + citiesData[0].currencies[0].name;
    currenciesSymbol.textContent =
      "code: " + citiesData[0].currencies[0].symbol;
    const flag = document.createElement("img");
    flag.src = citiesData[0].flag;
    flag.alt = "";
    flag.width = "250";
    flag.height = "166.5";

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

 
