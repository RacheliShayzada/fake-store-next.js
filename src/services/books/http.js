import axios from 'axios';

const http = axios.create({
    baseURL: '/api', // גישה יחסית ל-API הפנימי
    headers: {
        'Content-Type': 'application/json',
        "access-control-allow-origin": "*"
    }
});

export default http;
