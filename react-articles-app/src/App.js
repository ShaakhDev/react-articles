import React, { lazy, useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchArticleData } from "./store/article-actions";
const HomePage = lazy(() => import("./Pages/HomePage"));
const ArticlePage = lazy(() => import("./Pages/ArticlePage"));

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchArticleData());
	}, [dispatch]);
	return (
		<React.Fragment>
			<Suspense fallback={<h2 className="fallback">Loading ...</h2>}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/article/:articleId" element={<ArticlePage />} />
				</Routes>
			</Suspense>
		</React.Fragment>
	);
}

export default App;
