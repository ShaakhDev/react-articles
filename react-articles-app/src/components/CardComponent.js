import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "akar-icons";
import moment from "moment";
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@mui/material";

export default function CardComponent(props) {
	const { id, title, description, urlToImage, publishedAt } = props;

	//convert date from  ISO format to human-readable
	const published = moment(publishedAt).format("LL");
	const createMarkup = html => {
		return { __html: html };
	};

	return (
		<Card variant="outlined" className="card shadow">
			<Link to={`article/${id}`}>
				<CardMedia
					component="img"
					height="217"
					image={urlToImage}
					alt="article image"
				/>
			</Link>

			<CardContent>
				<Typography
					className="card-date"
					gutterBottom
					variant="p"
					component="p"
				>
					<Calendar strokeWidth={1} size={14} />
					{published}
				</Typography>
				<Link to={`article/${id}`}>
					<Typography
						gutterBottom
						className="card-title"
						variant="p"
						component="p"
						dangerouslySetInnerHTML={createMarkup(title)}
					/>
				</Link>
				<Typography
					variant="p"
					className="card-description"
					component="p"
					dangerouslySetInnerHTML={createMarkup(description)}
				/>
				...
			</CardContent>
			<CardActions className="card-actions">
				<Link to={`article/${id}`}>
					<Button className="card-button" variant="text" size="large">
						Read more <ArrowRight strokeWidth={1} size={16} />
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}
