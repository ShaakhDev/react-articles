import axios from "axios";

export const api = axios.create({
	baseURL: "https://api.spaceflightnewsapi.net/v3/articles",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});
