import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 951d421677c5442637f14dea62c974a4fc10e5ebab81b5d32317e2cc6cc25894"
    } 
});