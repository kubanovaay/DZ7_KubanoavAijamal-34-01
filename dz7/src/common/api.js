const BASE_URL = 'https://jsonplaceholder.typicode.com/'

export const getApi = async(api) => {
    const response = await fetch(`${BASE_URL}${api}`);
    const  data = await response.json()
    return data
};