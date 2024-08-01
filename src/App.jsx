import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import BlogList from './components/BlogList';

function App() {
	const [user, setUser] = useState("Bharat"); // ES6 - destructuring
	const [age, setAge] = useState(20);

	const clickHandler = (e, name, age) => {
		setUser(name);
		setAge(age)
	}

	const [blogs, setBlogs] = useState([
		{
			id: 1,
			title: "My First Blog",
			details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque distinctio itaque similique? Minus est cum temporibus molestias, amet asperiores facilis. Temporibus quidem blanditiis velit explicabo accusamus iusto et qui consequuntur."
		},
		{
			id: 2,
			title: "My Second Blog",
			details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque distinctio itaque similique? Minus est cum temporibus molestias, amet asperiores facilis. Temporibus quidem blanditiis velit explicabo accusamus iusto et qui consequuntur."
		},
		{
			id: 3,
			title: "My Third Blog",
			details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque distinctio itaque similique? Minus est cum temporibus molestias, amet asperiores facilis. Temporibus quidem blanditiis velit explicabo accusamus iusto et qui consequuntur."
		}
	]);

	const secondClickHandler = (e) => {
		for (let index = 0; index < 10; index++) {
			console.log(index, e)
		}
	}

	return (
		<>
			<Header />

			<h5>{user}</h5>
			<h6>{age}</h6>
			<button onClick={(e) => clickHandler(e, "Yash", 29)}>Click Me</button>
			<button onClick={secondClickHandler}>Click Me</button>
			<div className="body">
				<BlogList blogs={blogs} name={user} aayu={age} />
			</div>
		</>
	)
}

export default App
