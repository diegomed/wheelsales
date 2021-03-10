import server from "./interceptor.service";
import { AxiosError, AxiosResponse, AxiosPromise } from "axios";


export const get = (url: string, params = {}): AxiosPromise<any> =>  {
    return  server.get(url, { params });
};

export const post = (url: string, body = {}, params = {}, cb?: any): AxiosPromise<any> => {
    return server.post(url, body, { params });
};

export const patch = (url: string, body = {}, params = {}): AxiosPromise<any> => {
    return server.patch(url, body, { params });
};

export const put = (url: string, body = {}, params = {}): AxiosPromise<any> => {
    return server.put(url, body, { params });
};

export const erase = (url: string, params = {}): AxiosPromise<any> => {
    return server.delete(url, { params });
};


export default server;