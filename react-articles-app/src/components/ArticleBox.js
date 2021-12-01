import { useNavigate } from "react-router-dom";
import { Container, Paper, CardMedia, Box, Button } from "@mui/material";
import { ArrowLeft } from "akar-icons";

const ArticleBox = ({ imageUrl, children }) => {
	const navigate = useNavigate();

	return (
		<>
			<Container className="article-container ">
				<Box className="article-bg">
					<CardMedia
						component="img"
						height="245"
						image={imageUrl}
						alt="article img"
					/>
				</Box>
				<Paper variant="outlined" className="article-box shadow">
					{children}
				</Paper>
				<Button
					onClick={() => navigate("/", { replace: true })}
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
