import React from 'react';
// import Home from './routes/Home';
import './App.css';
// import PropTypes from 'prop-types';
import { HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
import Header from './components/Header';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  )
}


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
