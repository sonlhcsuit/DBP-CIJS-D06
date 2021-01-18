import logo from './logo.svg';
import './App.css';
import { signUp, addTodo, editTodo, getTodo } from './ultis/ultis'
// signUp({ username: 'thoth', password: 'cuncon' })
//   .then(userId => {
//     console.log(userId)
//   })
//   .catch(er => {
//     // console.error(er.stack)
//   })

// editTodo({
//   todoId:'PHjMLNjVhwqA5mth7REw',
//   ownerId: '552aSmFpE2WOZpCIVKM5',
//   title: 'Everyday working 123123',
//   content: 'di cho, nau com,hoc lap trinh, dau tu bds ...'
// }).then(data=>{
//   console.log(data)
// })
// getTodo('552aSmFpE2WOZpCIVKM5').then(todos=>{
//   console.log(todos)
// })


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
