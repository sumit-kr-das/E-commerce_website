import axios from 'axios';

const BASE_URL = "http://localhost:8000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTg4MWRmMzU5Njk0MmU4NTVkNTI0MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzczNTQxNywiZXhwIjoxNjM3OTk0NjE3fQ.UZYtEcQtK6rxL55U0E8uDrQRz7nkDzFT-vVnzPczis8";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});