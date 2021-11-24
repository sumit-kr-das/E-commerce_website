import axios from 'axios';

const BASE_URL = "http://localhost:8000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTg4MWRmMzU5Njk0MmU4NTVkNTI0MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzQ4NjYxMiwiZXhwIjoxNjM3NzQ1ODEyfQ.vch0geYy-78TMwS_KXeoc6VJ99zT29i7CRiTYFIJ7OQ";

export const publicRequest = axios.create({
    baseUrl: BASE_URL
});

export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});