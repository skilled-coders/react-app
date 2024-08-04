import './App.css'
import Header from './components/Header'
import BlogList from './components/BlogList';
import useAPIRequest from './custom-hooks/useAPIRequest';

function App() {
	const {
		isPending: blogsIsPending,
		data: blogs,
		error: blogsError
	} = useAPIRequest({ url: "http://localhost:3000/blogs", timeout: 5 }); // 5

	const {
		isPending: oldestBlogIsPending,
		data: oldestBlogs,
		error: oldestBlogsError
	} = useAPIRequest({ url: "http://localhost:3000/oldestBlogs", timeout: 10 }); // 10

	const {
		data: profile,
		error: profileError,
	} = useAPIRequest({ url: "http://localhost:3000/profile", timeout: 1 });

	const {
		data: college,
		error: collegeError,
	} = useAPIRequest({ url: "http://localhost:3000/college", timeout: 3 });

	// I/O operations - node js - asynchrounous
	// Processing / OS operations - java - threading - synchrounous

	return (
		<>
			<Header />
			<div className="body">
				{
					profile && <p>Hello, {profile.name}. You are {profile.age} years old!!</p>
				}

				{
					college && <p>You studied in {college.name}, {college.place}. From {college.startYear} to {college.endYear}</p>
				}

				{/* Condional rendering */}
				{
					blogsError ? (<h3 className='error'>Latest blogs: {error}</h3>) : blogsIsPending ? <h3>Loading...</h3> : <BlogList blogs={blogs} title={"Recent Blogs"} />
				}
				{/* Reusability */}
				{
					oldestBlogsError ? (<h3 className='error'>Oldest Blogs: {error}</h3>) : <BlogList blogs={oldestBlogs} title={"Oldest Blogs"} />
				}

			</div>
		</>
	)
}

export default App
