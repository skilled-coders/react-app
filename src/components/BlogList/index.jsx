function BlogList({ blogs, title }) {
    return (
        <div className="blogListContainer">
            <h2>{title}</h2>
            {
                blogs && blogs.length && blogs.map((blog) => {
                    // let author = "";
                    // if (blog.author) {
                    //     author = `- ${blog.author}`
                    // }
                    // let authorname = blog.author ? `- ${blog.author}` : "";
                    return (
                        <div key={blog.id} className="blogWrapper">
                            <div>
                                <h3 className='montserrat-400'>{blog.title}</h3>
                            </div>
                            <div>
                                <p className='montserrat-300'>{blog.details}</p>
                            </div>
                            {/* Conditional Rendering */}
                            {
                                blog.author ? (
                                    <div>
                                        <span>-  {blog.author}</span>
                                    </div>
                                ) : <></>
                            }
                            {
                                blog.date ? (
                                    <div>
                                        <span>Date: {blog.date}</span>
                                    </div>
                                ) : <></>
                            }
                            <button onClick={() => alert("Delete " + blog.id)}>Delete</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default BlogList;