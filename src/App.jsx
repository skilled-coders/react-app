import './App.css'
import Header from './components/Header'
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import NewBlog from './pages/NewBlog';

import NotFound from './pages/NotFound';
import SingleBlog from './pages/SingleBlog';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

	return (
		<>
			{/* VIRTUAL DOM */}
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/blogs' element={<Blogs />} />
					<Route path='/blogs/:url' element={<SingleBlog />} />
					<Route path='/new-blog' element={<NewBlog />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>

		</>
	)
}

export default App
