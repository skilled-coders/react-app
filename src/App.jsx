import "./App.css";
import Blog from "./components/Blog"
import { useEffect, useState } from "react";

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

  function handleAddBlog() {
    const newBlog = generateNewBlog();
    setBlogs([...blogs, newBlog]);
  }

  function handleRemoveBlog(id) {
    const newArray = [];
    blogs.forEach((blog) => {
      if (blog.id !== id) {
        newArray.push(blog);
      }
    });

    setBlogs(newArray);
  }

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("UseEffect got triggered");
  }, [x, y])

  return (
    <>
      <h2>My Blogs</h2>
      <button onClick={() => handleAddBlog()}>Add Blog</button>
      {blogs.map((blog) => (
        <>
          <Blog
            key={blog.id}
            title={blog.title}
            description={blog.description}
            imgUrl={blog.imgUrl}
            show={true}
          />
          <button onClick={() => handleRemoveBlog(blog.id)}>{`Remove Blog ${blog.id}`}</button>
        </>
      ))}

      <button onClick={() => setX(x === 1 ? 0 : 1)}>Update X</button>
      <button onClick={() => setY(y === 1 ? 0 : 1)}>Update Y</button>
    </>
  )
}

export default App;