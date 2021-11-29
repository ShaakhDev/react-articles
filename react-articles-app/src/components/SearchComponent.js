import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { Search } from "akar-icons";

const SearchComponent = () => {
	return (
		<Paper
			component="form"
			elevation={3}
			sx={{
				display: "flex",
				alignItems: "center",
				margin: "1rem 0",
				width: 400,
			}}
		>
			<IconButton type="submit">
				<Search width={20} />
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
