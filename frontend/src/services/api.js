import axios from "axios";

const rawBaseURL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api/";
const baseURL = rawBaseURL.endsWith("/") ? rawBaseURL : rawBaseURL + "/";

const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;