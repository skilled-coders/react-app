import "./styles/Blog.css";

function Blog({ title, description, imgUrl }) {
    return (
        <>
            <div className="blogContainer">
                <div className="details">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="imageWrapper">
                    <img src={imgUrl} alt="" />
                </div>
            </div>
        </>
    )
};

export default Blog;