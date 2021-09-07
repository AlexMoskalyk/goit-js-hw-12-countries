const BASE_URL =  'https://restcountries.eu/rest/v2/name'

const fetchCountries = (searchQuery) => {
    
    return fetch(`${BASE_URL}/${searchQuery}`).
        then(response => {

            if (response.status === 404) {
                return Promise.reject('Write value!');
            }
            return response.json();


        //     if (response.ok) {
        //         return response.json();
        //     }

        //     throw new Error('not found');
            
        });
}

export { fetchCountries };









