import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})
