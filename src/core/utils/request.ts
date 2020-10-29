import axios, { Method } from 'axios';

//Criamos um tipo para o method, os registros para a url;
type RequestParams = {
    method?: Method;
    url: string; // url vinda da chamda;
}

// A url basica das requisições;
const BASE_URL = 'https://api.github.com/users';

export const makeRequest = ({ method = 'GET', url }: RequestParams) => {
    return axios ({
        method,
        url: `${BASE_URL}${url}`
    });
}