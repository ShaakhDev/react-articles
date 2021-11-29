import React from "react";
import { Container } from "@mui/material";
import SearchInput from "./SearchInput";
import CardComponent from "./Card";

const HomePage = () => {
	return (
		<>
			<Container className="container">
				<p className="semibold">Filter by keywords</p>
				<SearchInput />
				<p className="semibold results">
					Results: <span>6</span>
				</p>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
					}}
				>
					<CardComponent />
					<CardComponent />
					<CardComponent />
					<CardComponent />
					<CardComponent />
					<CardComponent />
				</div>
			</Container>
		</>
	);
};

export default HomePage;
