import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Calendar, ArrowRight } from "akar-icons";

// import cardImg from "../images/1.png";

export default function CardComponent(props) {
	const navigate = useNavigate();
	const { title, description, urlToImage, publishedAt } = props;

	return (
		<Card variant="outlined" className="card shadow">
			<CardMedia
				component="img"
				height="217"
				image={urlToImage}
				alt="netflix brand"
			/>
			<CardContent>
				<Typography
					className="card-date"
					gutterBottom
					variant="p"
					component="p"
				>
					<Calendar strokeWidth={1} size={14} />
					{publishedAt}
				</Typography>
				<Typography
					gutterBottom
					className="card-title"
					variant="p"
					component="p"
				>
					{title}
				</Typography>
				<Typography variant="p" className="card-description" component="p">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					onClick={() => navigate("/article")}
					className="card-button"
					variant="text"
					size="large"
				>
					Read more <ArrowRight strokeWidth={1} size={16} />
				</Button>
			</CardActions>
		</Card>
	);
}
