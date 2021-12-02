import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
	name: "articles",
	initialState: {
		articles: [],
		isLoading: true,
		search: [],
		searchData: [],

		// totalQuantity: 0,
	},
	reducers: {
		replaceArticles(state, action) {
			state.articles = action.payload.articles;
			state.isLoading = false;
		},
		setData(state, action) {
			state.articles = action.payload;
			state.isLoading = false;
		},
		searchInput(state, action) {
			state.search = action.payload;
		},
		searchData(state, action) {
			state.searchData = action.payload.searchData;
		},
	},
});

export const articleActions = articleSlice.actions;

export default articleSlice.reducer;
