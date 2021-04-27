import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com/';

const APIService = {
    FetchData: (endPoint) => {
        return axios.get(`${baseUrl}${endPoint}`)
    }

}

export default APIService;