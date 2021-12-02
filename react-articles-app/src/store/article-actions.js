import { articleActions } from "./article-slice";
import { api } from "../Service/axios";

export const fetchArticleData = () => {
	//we create an action function to get all data from API
	return async dispatch => {
		const fetchData = async () => {
			const resultLimit = 30;
			const response = await api.get(`?_limit=${resultLimit}`);

			if (!response.status === "ok")
				throw new Error("Couldn't fetch article data...");

			const data = response.data;
			return data;
		};

		try {
			const articleData = await fetchData();
			dispatch(
				articleActions.replaceArticles({
					articles: articleData || [],
				})
			);
		} catch (error) {
			dispatch(articleActions.showError(error.message));
			console.log(error.message);
		}
	};
};
