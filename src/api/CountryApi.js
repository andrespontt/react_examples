import countriesData from '../data/countries_sm.json';

export const getTransformedCountryData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [];
      countriesData.data.forEach(country => {
        country.populationCounts.forEach(population => {
          data.push({
            country: country.country,
            code: country.code,
            iso3: country.iso3,
            year: population.year,
            population: population.value
          });
        });
      });
      resolve(data);
    }, 3000); // 3 seconds delay
  });
};