import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Searchbar from "../components/SearchBar";
import CardComponent from "../components/CardComponent";
import Counter from "../components/Counter";
import { articleActions } from "../store/article-slice";
import { ErrorBoundary } from "../components/ErrorBoundary";

const HomePage = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.articles); //to get access to the whole statement of the application

	const handleInput = e => {
		//to handle and modify the value of input which is entered by the user
		let str = e.target.value.split(" "); //to get the input value into an array.
		dispatch(articleActions.searchInput(str.join(" "))); //to send the entered input value to the global statement
		const filteredArr = str
			.map(word => {
				//iterate an array through each keyword
				return state.articles.filter(
					//to filter all matching objects by keywords
					item =>
						item.title.toLowerCase().includes(word.toLowerCase()) ||
						item.summary
							.substring(0, 100) //to get only 100 characters of the description
							.toLowerCase()
							.includes(word.toLowerCase())
				);
			})
			.flat(1) //merging all nested arrays into one main array
			.reduce((acc, current) => {
				//removing all duplicate objects from the array
				const x = acc.find(item => item.id === current.id);
				if (!x) return acc.concat([current]);
				else return acc;
			}, []) //we got  only filtered array of objects matching by keywords :)
			.map(item => {
				//now we need to highlight words matching by keywords
				let newTitle = item.title.replace(
					new RegExp(`${str.join("|")}`, "gi"),
					match => `<mark > ${match}</mark>`
				);
				let newDesc = item.summary
					.substring(0, 100)
					.replace(
						new RegExp(`${str.join("|")}`, "gi"),
						match => `<mark >${match}</mark>`
					);
				return {
					// finally, we return the filtered and highlighted objects matching by keywords which we search :)
					...item,
					title: newTitle,
					summary: newDesc,
				};
			});
		dispatch(
			//and we send the filtered objects to the global statement for rendering
			articleActions.searchData({
				searchData: filteredArr,
			})
		);
	};

	return (
		<>
			<ErrorBoundary />
			<Container className="container">
				<p className="semibold">Filter by keywords</p>
				<Searchbar value={state.search} onInput={e => handleInput(e)} />

				<Counter
					result={
						state.searchData.length > 0 &&
						state.searchData.length < state.articles.length
							? state.searchData.length
							: null
					}
				/>
				<div className="cards-container">
					{state.isLoading ? (
						<p>{state.hasError ? null : "Loading ..."}</p>
					) : state.search.length > 0 ? (
						state.searchData.map(item => (
							<CardComponent
								key={item.id}
								id={item.id}
								title={item.title}
								description={item.summary}
								urlToImage={item.imageUrl}
								publishedAt={item.publishedAt}
							/>
						))
					) : (
						state.articles.map(item => (
							<CardComponent
								key={item.id}
								id={item.id}
								title={item.title}
								description={item.summary.substring(0, 100)}
								urlToImage={item.imageUrl}
								publishedAt={item.publishedAt}
							/>
						))
					)}
					{state.searchData.length === 0 && !state.hasError ? (
						<p>No matches were found</p>
					) : null}
				</div>
			</Container>
		</>
	);
};

export default HomePage;
