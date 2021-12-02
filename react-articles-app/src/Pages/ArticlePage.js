import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArticleData } from "../store/article-actions";
import ArticleBox from "../components/ArticleBox";

const ArticlePage = () => {
	const { articleId } = useParams(); // to get the id of current pressed article-card
	const [currentArticle, setcurrentArticle] = useState({}); //to save   a current article object
	const articleList = useSelector(state => state.articles.articles);
	const dispatch = useDispatch();

	useEffect(() => {
		//to get data from API when the article page will update
		dispatch(fetchArticleData());
	}, [dispatch]);

	useEffect(() => {
		//to get current articles by ID from the state
		const getArticleById = id => {
			return articleList.find(item => {
				if (item.id === +id) return item;
				return null;
			});
		};

		setcurrentArticle(getArticleById(articleId));
	}, [articleId, articleList]);

	return (
		<>
			<ArticleBox imageUrl={currentArticle?.imageUrl}>
				<Typography className="article-title" variant="p" component="p">
					{currentArticle?.title}
				</Typography>
				<Typography className="article-text" variant="p" component="p">
					{currentArticle?.summary}
				</Typography>
			</ArticleBox>
		</>
	);
};
export default ArticlePage;
