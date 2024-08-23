import './App.css'
import Header from './components/Header'
import BlogList from './components/BlogList';
import useAPIRequest from './custom-hooks/useAPIRequest';
import { useState } from 'react';

function App() {
	// const {
	// 	isPending: blogsIsPending,
	// 	data: blogs,
	// 	error: blogsError
	// } = useAPIRequest({ url: "http://localhost:3000/blogs", timeout: 5 }); // 5

	const {
		isPending: oldestBlogIsPending,
		data: oldestBlogs,
		error: oldestBlogsError
	} = useAPIRequest({ url: "http://localhost:3000/oldestBlogs", timeout: 1 }); // 10

	// const {
	// 	data: profile,
	// 	error: profileError,
	// } = useAPIRequest({ url: "http://localhost:3000/profile", timeout: 1 });

	// const {
	// 	data: college,
	// 	error: collegeError,
	// } = useAPIRequest({ url: "http://localhost:3000/college", timeout: 3 });

	// I/O operations - node js - asynchrounous
	// Processing / OS operations - java - threading - synchrounous
	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");
	const [date, setDate] = useState("");

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	}

	const handleDetailsChange = (e) => {
		setDetails(e.target.value);
	}

	const handleDateChange = (e) => {
		setDate(e.target.value);
	}

	const handleFormSubmit = (e) => {
		e.preventDefault();
		fetch("http://localhost:3000/oldestBlogs", {
			headers: {
				"content-type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({
				title,
				details,
				date
			})
		}).then((res) => {
			return res.json();
		}).then((data) => {
			setNewBlogs([...newBlogs, data]);
		})
	}

	return (
		<>
			<Header />
			<div className="body">
				{/* {
					profile && <p>Hello, {profile.name}. You are {profile.details} years old!!</p>
				} */}

				{/* {
					college && <p>You studied in {college.name}, {college.place}. From {college.startYear} to {college.endYear}</p>
				} */}

				{/* {
					blogsError ? (<h3 className='error'>Latest blogs: {error}</h3>) : blogsIsPending ? <h3>Loading...</h3> : <BlogList blogs={blogs} title={"Recent Blogs"} />
				} */}
				{
					oldestBlogsError ? (<h3 className='error'>Oldest Blogs: {error}</h3>) : <BlogList blogs={oldestBlogs} title={"Oldest Blogs"} />
				}
				<br />
				<br />
				<br />

				<form action="" onSubmit={handleFormSubmit}>
					<div className="input-group">
						<label htmlFor="title">Title</label>
						<input type="text" name="title" value={title} onChange={handleTitleChange} />
					</div>
					<br />
					<div className="input-group">
						<label htmlFor="details">Details</label>
						<textarea name="details" id="" value={details} onChange={handleDetailsChange}></textarea>
					</div>
					<br />
					<div className="input-group">
						<label htmlFor="date">Date</label>
						<input type="date" value={date} onChange={handleDateChange} />
					</div>

					<input type="submit" />
				</form>
			</div>
		</>
	)
}

export default App
