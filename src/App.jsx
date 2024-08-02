import { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header'
import BlogList from './components/BlogList';

function App() {
	const [user, setUser] = useState("Bharat"); // ES6 - destructuring
	const [age, setAge] = useState(20);

	const [counter, setCounter] = useState(0);

	const clickHandler = (event, name, age) => {
		setUser(name);
		setAge(age)
	}

	const [blogs, setBlogs] = useState([
		{
			id: 1,
			title: "My First Blog",
			details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque distinctio itaque similique? Minus est cum temporibus molestias, amet asperiores facilis. Temporibus quidem blanditiis velit explicabo accusamus iusto et qui consequuntur.",
			author: "Pratham"
		},
		{
			id: 2,
			title: "My Second Blog",
			details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque distinctio itaque similique? Minus est cum temporibus molestias, amet asperiores facilis. Temporibus quidem blanditiis velit explicabo accusamus iusto et qui consequuntur.",
			author: "Jatin"
		},
		{
			id: 3,
			title: "My Third Blog",
			details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque distinctio itaque similique? Minus est cum temporibus molestias, amet asperiores facilis. Temporibus quidem blanditiis velit explicabo accusamus iusto et qui consequuntur.",
			author: "Bharat"
		}
	]);

	const [oldestBlogs, setOldestBlogs] = useState([
		{
			id: 1,
			title: "My First Old Blog",
			details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque distinctio itaque similique? Minus est cum temporibus molestias, amet asperiores facilis. Temporibus quidem blanditiis velit explicabo accusamus iusto et qui consequuntur.",
			date: new Date().toDateString()
		},
		{
			id: 2,
			title: "My Second Old Blog",
			details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque distinctio itaque similique? Minus est cum temporibus molestias, amet asperiores facilis. Temporibus quidem blanditiis velit explicabo accusamus iusto et qui consequuntur.",
			date: new Date().toDateString()
		},
		{
			id: 3,
			title: "My Third Old Blog",
			details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque distinctio itaque similique? Minus est cum temporibus molestias, amet asperiores facilis. Temporibus quidem blanditiis velit explicabo accusamus iusto et qui consequuntur.",
			date: new Date().toDateString()
		}
	]);

	const secondClickHandler = (e) => {
		setCounter(counter + 1);
	}

	// Triggers after each re-render
	useEffect(() => {
		console.log("Use Effect got triggered");
	});

	// Triggers only when we refresh the page / component get rendered for the first time
	useEffect(() => {
		console.log("Use Effect got triggered");
	}, []);

	// Triggers whenver the values of the dependency array changes
	useEffect(() => {
		console.log("Use Effect got triggered");
	}, [counter, user]);

	return (
		<>
			<Header />

			<h5>{user}</h5>
			<h6>{age}</h6>
			<h2>{counter}</h2>
			<button onClick={(e) => clickHandler(e, "Yash", 29)}>Click Me</button>
			<button onClick={secondClickHandler}>Click Me</button>
			<div className="body">
				<BlogList blogs={blogs} title={"Recent Blogs"} />
				<BlogList blogs={oldestBlogs} title={"Oldest Blogs"} /> {/* Reusability */}
			</div>
		</>
	)
}

export default App
