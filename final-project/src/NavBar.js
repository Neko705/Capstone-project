
function NavBar(){
    return(
        <nav className="nav">
            <ul>
                <li>
                    <a href="/" className="home">Home</a>
                </li>
                <li>
                    <a href="/about" className="about">About</a>
                </li>
                <li>
                    <a href="/menu" className="menu">Menu</a>
                </li>
                <li>
                    <a href="/book" className="book">BookTable</a>
                </li>
                <li>
                    <a href="/login" className="login">Login</a>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;