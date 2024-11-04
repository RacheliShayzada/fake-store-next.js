import axios from 'axios';

const http = axios.create({
    url: "/api",
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
        "access-control-allow-origin": "*"
    }
});

export default http;