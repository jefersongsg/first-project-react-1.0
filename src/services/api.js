

import axios from "axios";

const api = axios.create({
    baseURL: 'https://first-project-node-vert.vercel.app'
})

export default api