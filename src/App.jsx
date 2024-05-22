import "./App.css";
import Blog from "./components/Blog"
import { useState } from "react";

function App() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Securing Node.js in Production: Expert Practices for Every Developer",
      description: "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.",
      imgUrl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*3Xdd_WEaRxryzfLC"
    },
    {
      id: 2,
      title: "Because of a Question About try…catch, I Failed My Interview",
      description: "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.",
      imgUrl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*oY_ucPmMlywwHFow"
    }
  ]);

  const generateNewBlog = () => {
    return {
      id: blogs.length + 1,
      title: `Blog number ${blogs.length + 1}`,
      description: `Blog description ${blogs.length + 1}`,
      imgUrl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*3Xdd_WEaRxryzfLC"
    }
  }

  function handleClickMe(display) {
    setDisplay(!display);
  }

  const [display, setDisplay] = useState(true);

  function handleAddBlog() {
    const newBlog = generateNewBlog();
    setBlogs([...blogs, newBlog]);
  }

  return (
    <>
      <h2>My Blogs</h2>
      <button onClick={() => handleAddBlog()}>Add Blog</button>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          title={blog.title}
          description={blog.description}
          imgUrl={blog.imgUrl}
          show={blog.id === 2 ? (display ? true : false) : true}
        />
      ))}

      <button onClick={() => handleClickMe(display)}>{display ? "Hide" : "Show"} second blog</button>
    </>
  )
}

export default App;