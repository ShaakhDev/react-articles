import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
	name: "search",
	initialState: {
		isLoading: true,
		data: [],
		search: "",
		searchData: [],
	},
	reducers: {
		setData(state, action) {
			state = { ...state };
			state.data = action.payload;
			state.isLoading = false;
		},
		searchInput(state, action) {
			state = { ...state };
			state.search = action.payload;
		},
		searchData(state, action) {
			state = { ...state };
			state.searchData = action.payload;
		},
	},
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
