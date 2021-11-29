import React from "react";
import { Container } from "@mui/material";
import SearchInput from "./SearchInput";

const HomePage = () => {
	return (
		<>
			<Container className="container">
				<p className="semibold">Filter by keywords</p>
				<SearchInput />
				<p className="semibold">
					Results: <span>6</span>
				</p>
			</Container>
		</>
	);
};

export default HomePage;
