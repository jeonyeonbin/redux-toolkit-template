import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
const cache = setupCache({
	debug: process.env.NODE_ENV !== 'production',
	maxAge: 15 * 60 * 1000,
});

const instance = axios.create({
	baseURL: process.env.REACT_APP_GITHUB_API_URL,
	headers: {
		Authorization: process.env.REACT_APP_GITHUB_TOKEN,
	},
	adapter: cache.adapter,
	timeout: 2500,
});

export default instance;
