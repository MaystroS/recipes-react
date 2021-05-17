import axios from "axios";
import {API_URL, API_KEY} from "../config";

const http = axios.create({
	baseURL: API_URL,
	headers: {
		'Authorization': API_KEY
	}
})

export async function getGoods(lang = 'en') {
	const endpoint = '/shop';

	try {
		const {data} = await http.get(endpoint, {
			params: {lang, limit: 10}
		})

		console.log('response:', data)

		if (!data.result) {
			return [];
		}

		// noinspection JSUnresolvedVariable
		return data.shop;
	} catch (e) {
		console.log('Error:', e);
	}
}
