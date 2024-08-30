function Header() {
    const website = "Skilled Coders"
    return (
        <div className='header'>
            <div>
                <h2 className='montserrat-italic-400'>{website}</h2>
            </div>
            <div>
                <ul className='navigation'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/blogs">Blogs</a></li>
                    <li><a href="/new-blog">New Blog</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;