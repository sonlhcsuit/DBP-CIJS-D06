import '../assets/css/Display.css';
import { TodoList } from "../components/TodoList";
function Display(props) {
    return (
        <div className="border display-cont" >
            {
                <TodoList/>
            }
        </div>
    )
}
export { Display }