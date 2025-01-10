import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

export const api = axios.create({
    baseURL: API_BASE_URL,
});