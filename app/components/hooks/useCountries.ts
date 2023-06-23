import countries from 'world-countries';

const formattedCountries = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flag, //emoji flag
    latlng: country.latlng, //latitude and longitude
    region: country.region, //continent
}))

const useCountries = () => {
    const getAll = () => formattedCountries;

    const getByValue = (value: string) => {
        return formattedCountries.find((item) => item.value === value);
    }

  return {
    getAll,
    getByValue
  }
}

export default useCountries