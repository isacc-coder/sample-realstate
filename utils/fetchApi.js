import axios from 'axios';

export const baseUrl ='https://bayut.p.rapidapi.com'


export const fetchApi = async(url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '348df26e1dmsh54c6c341655697fp188ccajsnf69ff2e4d7ad'
          }
    });
    return data;
}