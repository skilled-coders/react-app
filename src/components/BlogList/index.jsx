function BlogList({ blogs }) {
    return (
        <div className="blogListContainer">
            {
                blogs.map((blog) => {
                    return (
                        <div key={blog.id} className="blogWrapper">
                            <div>
                                <h3 className='montserrat-400'>{blog.title}</h3>
                            </div>
                            <div>
                                <p className='montserrat-300'>{blog.details}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default BlogList;