import { useSelector } from "react-redux";

import React from "react";

export const ErrorBoundary = () => {
	const hasError = useSelector(state => state.articles.hasError);
	const errorMsg = useSelector(state => state.articles.errorMsg);

	if (hasError) {
		return (
			<div className="error">
				<h3 className="error-msg">{errorMsg}</h3>
			</div>
		);
	}

	return <></>;
};
