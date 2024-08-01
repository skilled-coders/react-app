function Header() {
    const website = "Skilled Coders"
    return (
        <div className='header'>
            <div>
                <h2 className='montserrat-italic-400'>{website}</h2>
            </div>
            <div>
                <ul className='navigation'>
                    <li>Home</li>
                    <li>New Blog</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;