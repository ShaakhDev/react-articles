import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
	name: "articles",
	initialState: {
		articles: [],
		isLoading: true,
		search: "",
		searchData: [],
		hasError: false,
		errorMsg: "",
	},
	reducers: {
		replaceArticles(state, action) {
			state.hasError = false;
			state.articles = action.payload.articles;
			state.isLoading = false;
		},
		searchInput(state, action) {
			state.search = action.payload;
		},
		searchData(state, action) {
			state.searchData = action.payload.searchData;
		},
		showError(state, action) {
			state.hasError = true;
			state.errorMsg = action.payload;
		},
	},
});

export const articleActions = articleSlice.actions;

export default articleSlice.reducer;
