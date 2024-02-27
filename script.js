// Fetch data from the API
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Problem 1: Get all the countries from Asia continent/region using Filter function
    const asiaCountries = data.filter((country) => country.region === "Asia");
    console.log("Countries from Asia:", asiaCountries);

    // Problem 2: Get all the countries with a population of less than 2 lakhs using Filter function
    const smallPopulationCountries = data.filter(
      (country) => country.population && country.population < 200000
    );
    console.log(
      "Countries with population less than 2 lakhs:",
      smallPopulationCountries
    );

    // Problem 3: Print name, capital, flag using forEach function
    data.forEach((country) => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital && country.capital[0]);
      console.log("Flag:", country.flags && country.flags.svg);
    });

    // Problem 4: Print the total population of countries using reduce function
    const totalPopulation = data.reduce((accumulator, country) => {
      return accumulator + (country.population ? country.population : 0);
    }, 0);
    console.log("Total population of countries:", totalPopulation);

    // Problem 5: Print the country that uses US dollars as currency
    const usDollarCountry = data.find(
      (country) => country.currencies && country.currencies.USD
    );
    console.log("Country that uses US dollars:", usDollarCountry);
  })
  .catch((error) => console.error("Error fetching data:", error));
