import { Paper, IconButton, InputBase } from "@mui/material";

import { Search } from "akar-icons";

const SearchBar = ({ onInput, value }) => {
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

			<InputBase
				className="input"
				onInput={onInput}
				placeholder="Search article"
				style={{ width: "100%" }}
				value={value}
			/>
		</Paper>
	);
};

export default SearchBar;
