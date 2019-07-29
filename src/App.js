import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>React App : person-react-app</h1>
                <Person/>
            </div>
        );
    }
}

// class App extends Component {
//     render() {
//         return React.createElement(
//             'div',
//             {className: 'App'},
//             React.createElement('h1', null, 'Hi, I\'m a React App called person-react-app'));
//     }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
