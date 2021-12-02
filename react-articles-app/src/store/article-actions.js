import { articleActions } from "./article-slice";
import { api } from "../Service/axios";

export const fetchArticleData = () => {
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
					// totalQuantity: articleData.length,
				})
			);
		} catch (error) {
			console.log(error.message);
		}
	};
};
