import axios  from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(config => {
    // eslint-disable-next-line no-useless-concat
    config.url = config.url + '&units=metric' + '&appid=' + process.env.REACT_APP_API_KEY;
    return config;
});

export default api;