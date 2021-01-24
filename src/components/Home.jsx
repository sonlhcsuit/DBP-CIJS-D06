import { Sidebar } from "./Siderbar";
import { Display } from "./Display";

import "../assets/css/Home.css";
function Home(props) {
    return (
        <div className="home-cont border">
            <Sidebar/>
            <Display/>
        </div>
    )
}
export { Home }