import axios from 'axios';

const http = axios.create({
    baseURL: 'https://fakestoreapi.com', // הגדרת ה-base URL של החנות המזויפת
});

export default http;
