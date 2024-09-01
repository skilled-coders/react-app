import BlogList from "../../components/BlogList";
import useAPIRequest from "../../custom-hooks/useAPIRequest";

function Blogs() {
    const {
        isPending: blogsIsPending,
        data: blogs,
        error: blogsError
    } = useAPIRequest({ url: "http://localhost:3000/blogs", timeout: 0 }); // 5

    return (
        <>
            {
                blogsError ? (<h3 className='error'>Latest blogs: {error}</h3>) : blogsIsPending ? <h3>Loading...</h3> : <BlogList blogs={blogs} title={"Recent Blogs"} />
            }
        </>
    )
};

export default Blogs;
