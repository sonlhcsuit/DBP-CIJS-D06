import "../assets/css/Navigation.css"
function Navigation() {
    return (
        <div className="nav-cont">
            <div className="nav-items">
                <a href="/">Todo App</a>
            </div>
            <div className="nav-items">
                <a href="/signin">Sign In</a>
            </div>
            <div className="nav-items">
                <a href="/signup">Sign Up</a>
            </div>
            <div className="nav-items">
                <a href="/about">About Us</a>
            </div>
        </div>
    )
}
export { Navigation }