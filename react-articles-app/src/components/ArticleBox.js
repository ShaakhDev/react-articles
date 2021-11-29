import { useNavigate } from "react-router-dom";
import { Container, Paper, CardMedia } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ArrowLeft } from "akar-icons";
import cardImg from "../images/5.png";

const ArticleBox = ({ children }) => {
	const navigate = useNavigate();
	return (
		<>
			<Container className="article-container ">
				<Box className="article-bg">
					<CardMedia
						component="img"
						height="245"
						image={cardImg}
						alt="netflix brand"
					/>
				</Box>
				<Paper variant="outlined" className="article-box shadow">
					{children}
				</Paper>
				<Button
					onClick={() => navigate("/")}
					className="card-button"
					variant="text"
					size="large"
				>
					<ArrowLeft strokeWidth={1} size={16} /> Back to homepage
				</Button>
			</Container>
		</>
	);
};

export default ArticleBox;
