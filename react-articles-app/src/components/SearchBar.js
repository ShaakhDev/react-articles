import { Paper, TextField, IconButton } from "@mui/material";

import { Search } from "akar-icons";

const SearchBar = ({ onInput }) => {
	return (
		<Paper
			component="form"
			variant="outlined"
			sx={{
				display: "flex",
				alignItems: "center",
				margin: "1rem 0 3rem",
				width: 600,
				padding: "0.5rem 1rem",
			}}
			className="search-bar shadow"
		>
			<IconButton type="submit">
				<Search width={24} />
			</IconButton>
			{/* <InputBase
				sx={{
					ml: 1,
					flex: 1,
					fontSize: "1.6rem",
					fontWeight: "400",
					color: "#575757",
				}}
				placeholder="Search article"
			/> */}
			<TextField
				// label="Search Article"
				onInput={onInput}
				placeholder="Search article"
				style={{ width: "100%" }}
			/>
		</Paper>
	);
};

export default SearchBar;
