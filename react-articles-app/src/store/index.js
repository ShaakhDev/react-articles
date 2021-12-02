import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./article-slice";
import searchSlice from "./search-slice";

const store = configureStore({
	reducer: {
		articles: articleSlice,
		search: searchSlice,
	},
});

export default store;
