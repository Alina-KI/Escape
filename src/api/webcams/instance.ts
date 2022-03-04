import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://webcamstravel.p.rapidapi.com/webcams/',
    params: {lang: 'en', show: 'webcams:image,location'},
    headers: {
        'x-rapidapi-host': 'webcamstravel.p.rapidapi.com',
        'x-rapidapi-key': '990823aaa7msh57e2a566b8642c7p1e24dfjsnb291682bd707'
    }
})