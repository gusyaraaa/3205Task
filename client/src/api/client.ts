import axios, { CancelTokenSource } from 'axios';

const client = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_URL
});

let previousRequest: CancelTokenSource | null = null;

client.interceptors.request.use(
    (config) => {
        if (previousRequest) {
            previousRequest.cancel();
        }

        const source = axios.CancelToken.source();
        previousRequest = source;

        config.cancelToken = source.token;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default client;
