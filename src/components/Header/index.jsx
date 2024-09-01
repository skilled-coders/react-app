import { Link } from "react-router-dom";

function Header() {
    const website = "Skilled Coders"
    return (
        <div className='header'>
            <div>
                <h2 className='montserrat-italic-400'>{website}</h2>
            </div>
            <div>
                <ul className='navigation'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/new-blog">New Blog</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;