import '../assets/css/SignIn.css';
function SignIn(props) {
    return (
        <div className="signin-cont">
            <form className="">
                <div className="signin-comp title">
                    <h1>Sign In</h1>
                </div>
                <div className="signin-comp">
                    <label htmlFor="">Username</label>
                    <input type="text" name="" id="username" placeholder="Enter username" />
                </div>

                <div className="signin-comp">
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="password" placeholder="Enter password" />

                </div>
                <div className="signin-comp opt">
                    <small>
                        <a >Forgot Password?</a>
                    </small>
                    <small >
                        <a>Sign Up</a>
                    </small>
                </div>
                <div className="signin-comp">
                    <input type="button" value="Sign In" />

                </div>
            </form>

        </div>
    )
}
export { SignIn }