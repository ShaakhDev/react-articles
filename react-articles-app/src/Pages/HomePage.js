import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Searchbar from "../components/SearchBar";
import CardComponent from "../components/CardComponent";
import Counter from "../components/Counter";
import { articleActions } from "../store/article-slice";

const HomePage = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.articles);

	const handle = e => {
		let str = e.target.value.split(" ");
		dispatch(articleActions.searchInput(str.join(" ")));
		const filteredArr = str
			.map(word => {
				return state.articles.filter(
					item =>
						item.title.toLowerCase().includes(word.toLowerCase()) ||
						item.summary
							.substring(0, 100)
							.toLowerCase()
							.includes(word.toLowerCase())
				);
			})
			.flat(1)
			.reduce((acc, current) => {
				const x = acc.find(item => item.id === current.id);
				if (!x) return acc.concat([current]);
				else return acc;
			}, [])
			.map(item => {
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
					...item,
					title: newTitle,
					summary: newDesc,
				};
			});
		dispatch(
			articleActions.searchData({
				searchData: filteredArr,
			})
		);
		console.log(filteredArr);
	};

	const handleInput = e => {
		//smth function
		let str = e.target.value;
		dispatch(articleActions.searchInput(str));
		const newArr = state.articles
			.filter(
				item =>
					item.title.toLowerCase().includes(str.toLowerCase()) ||
					item.summary.toLowerCase().includes(str.toLowerCase())
			)
			.map(item => {
				let newTitle = item.title.replace(
					new RegExp(`${str}`, "gi"),
					match => `<mark > ${match}</mark>`
				);
				let newDesc = item.summary.replace(
					new RegExp(`${str}`, "gi"),
					match => `<mark >${match}</mark>`
				);
				return {
					...item,
					title: newTitle,
					summary: newDesc,
				};
			});
		console.log(newArr);
		dispatch(
			articleActions.searchData({
				searchData: newArr,
			})
		);
	};

	return (
		<>
			<Container className="container">
				<p className="semibold">Filter by keywords</p>
				<Searchbar value={state.search} onInput={e => handle(e)} />

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
						<p>Loading ...</p>
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
				</div>
			</Container>
		</>
	);
};

export default HomePage;
