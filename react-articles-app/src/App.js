import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import ArticlePage from "./Article/ArticlePage";
import { fetchArticleData } from "./store/article-actions";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchArticleData());
	}, [dispatch]);
	return (
		<React.Fragment>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/article" element={<ArticlePage />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
