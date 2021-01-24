// import './App.css';
// import { Navigation } from './components/Navigation'
// import { About } from "./components/About";
// import { Home } from "./components/Home";
// import { SignIn } from "./components/SignIn";
// import { SignUp } from "./components/SignUp";


// function App() {
//   let path = window.location.pathname
//   let listOfUrls = [
//     '/signin', '/signup', '/about', '/'
//   ]
//   if (listOfUrls.indexOf(path) == -1) {
//     console.log(path)
//   }
//   const comp = {
//     '/signin': <SignIn />,
//     '/signup': <SignUp />,
//     '/': <Home />,
//     '/about': <About />
//   }

//   return (

//     <div className="app-cont ">
//       <Navigation />
//       {
//         comp[window.location.pathname]
//       }
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class App extends Component {
    constructor(props){
      super(props)
      this.state = {data:''}
    }
    render() {
        return (
            <div className="App">
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data={this.state.data}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.setState({data:data})
                        console.log(data)
                    } }
             
                />
                <div dangerouslySetInnerHTML={
                  {
                    __html:this.state.data
                  }
                }>

                </div>
            </div>
        );
    }
}

export default App;