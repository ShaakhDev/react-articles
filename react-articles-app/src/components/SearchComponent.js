import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { Search } from "akar-icons";

const SearchComponent = () => {
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
			className="search-component shadow"
		>
			<IconButton type="submit">
				<Search width={24} />
			</IconButton>
			<InputBase
				sx={{
					ml: 1,
					flex: 1,
					fontSize: "1.6rem",
					fontWeight: "400",
					color: "#575757",
				}}
				placeholder="Search article"
			/>
		</Paper>
	);
};

export default SearchComponent;
