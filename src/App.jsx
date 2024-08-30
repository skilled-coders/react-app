import './App.css'
import Header from './components/Header'
import BlogList from './components/BlogList';
import useAPIRequest from './custom-hooks/useAPIRequest';
import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import NewBlog from './pages/NewBlog';

function App() {

	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/blogs' element={<Blogs />} />
					<Route path='/new-blog' element={<NewBlog />} />
					<Route path="*" element={<h1>404: Not Found</h1>} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
