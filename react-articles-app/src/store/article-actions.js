import { articleActions } from "./article-slice";
import { api } from "../Service/axios";

export const fetchArticleData = () => {
	return async dispatch => {
		const fetchData = async () => {
			const API_KEY = "824b3baa4a7040f1bfbed034b877ea21";
			const response = await api.get(
				`/top-headlines?country=us&apiKey=${API_KEY}`
			);

			if (!response.status === "ok") {
				throw new Error("Couldn't fetch article data...");
			}

			const data = response.data;
			return data;
		};

		try {
			const articleData = await fetchData();
			console.log(articleData);
			dispatch(
				articleActions.replaceArticles({
					articles: articleData.articles || [],
					totalQuantity: articleData.articles.length,
				})
			);
		} catch (error) {
			console.log(error.message);
		}
	};
};
