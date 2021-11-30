import { Typography } from "@mui/material";
import React from "react";
import ArticleBox from "../components/ArticleBox";

const ArticlePage = () => {
	return (
		<>
			<ArticleBox>
				<Typography className="article-title" variant="p" component="p">
					The 2020 World's Most Valuable Brands
				</Typography>
				<Typography
					className="article-text"
					variant="p"
					component="p"
				></Typography>
			</ArticleBox>
		</>
	);
};
export default ArticlePage;
