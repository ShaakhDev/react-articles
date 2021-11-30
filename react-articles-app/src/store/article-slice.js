import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
	name: "articles",
	initialState: {
		articles: [],
		totalQuantity: 0,
	},
	reducers: {
		replaceArticles(state, action) {
			state.articles = action.payload.articles;
			state.totalQuantity = action.payload.totalQuantity;
		},
	},
});

export const articleActions = articleSlice.actions;

export default articleSlice.reducer;
