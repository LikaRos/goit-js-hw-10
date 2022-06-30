export function fetchCountries(name) {
  return fetch('https://restcountries.com/v3.1/name/' + name).then(response => {
    if (response.status === 200) {
      return response.json();
    }

    throw new Error('Oops, there is no  country with this name');
  });
}
