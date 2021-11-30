import React from "react";
import { Container } from "@mui/material";
import SearchInput from "./SearchInput";
import CardComponent from "../components/CardComponent";
import { useSelector } from "react-redux";

const HomePage = () => {
	const articlesList = useSelector(state => state.articles.articles);
	const results = useSelector(state => state.articles.totalQuantity);
	console.log(articlesList);
	return (
		<>
			<Container className="container">
				<p className="semibold">Filter by keywords</p>
				<SearchInput />
				<p className="semibold results">
					Results: <span>{results}</span>
				</p>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
					}}
				>
					{articlesList.map(article => (
						<CardComponent
							key={article.title}
							title={article.title}
							description={article.description}
							urlToImage={article.urlToImage}
							publishedAt={article.publishedAt}
						/>
					))}
				</div>
			</Container>
		</>
	);
};

export default HomePage;
