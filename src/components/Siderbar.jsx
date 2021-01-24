import '../assets/css/Sidebar.css'
function Sidebar(props) {
    return (
        <div className="sidebar-cont border">
            <img className="avatar-image " src={props.profilePic || 'https://st.gamevui.com/images/image/2019/03/20/pikachu-200.jpg'} />

            <div className="option" style={{ color: "red" }}>
                <i className="fal fa-user fa-2x"></i>
                <p> Account</p>
            </div>
            <div className="option " onClick={props.signOut}>
                <i className="fal fa-sign-out fa-2x"></i>
                <p > Sign Out</p>
            </div>


        </div>
    )
}

export { Sidebar }