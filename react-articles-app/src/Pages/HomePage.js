import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import SearchInput from "./SearchInput";
import CardComponent from "../components/CardComponent";

const HomePage = () => {
	const articlesList = useSelector(state => state.articles.articles);
	const results = useSelector(state => state.articles.totalQuantity);

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
							key={article.id}
							id={article.id}
							title={article.title}
							description={article.summary}
							urlToImage={article.imageUrl}
							publishedAt={article.publishedAt}
						/>
					))}
				</div>
			</Container>
		</>
	);
};

export default HomePage;
