import axios from "axios";
const instance = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API_URL,
  headers: {
    Authorization: process.env.REACT_APP_GITHUB_TOKEN,
  },
  timeout: 2500,
});

export default instance;
