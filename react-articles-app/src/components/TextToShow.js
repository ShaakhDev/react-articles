export const TextToShow = ({ content, limitChar }) => {
	const text = content.substring(0, limitChar); // + "...";

	return <>{text}</>;
};
