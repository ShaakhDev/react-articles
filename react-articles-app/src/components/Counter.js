import React from "react";

const Counter = ({ result }) => {
	return (
		<p className="semibold result">
			Results: <span>{result}</span>
		</p>
	);
};
export default Counter;
