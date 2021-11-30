import axios from "axios";

export const api = axios.create({
	baseURL: "https://api.spaceflightnewsapi.net/v3",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});
