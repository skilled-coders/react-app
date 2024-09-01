import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleBlog() {
    const params = useParams();
    console.log("params", params);
    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/blogs/${params.url}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setBlog(data);
            });
    }, []);

    console.log("param blog", blog)
    return (
        <>
            <h1>{blog.title}</h1>
            <small>{blog.author}</small>
            <p dangerouslySetInnerHTML={{ __html: blog.details }}></p>
        </>
    )
};

export default SingleBlog;
