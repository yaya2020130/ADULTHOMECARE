import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstPage from './components/layout/FirstPage';
import Navbar from './components/layout/Navbar';
import Patient from './components/layout/Patient';
import Secound from './components/layout/Secound'
class App extends React.Component{
// function App() {
  render ()
{  
  return (
    
    
    <div className="App">
      
      <Navbar/>
   
      {/* <header className="App-header">
      
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
      </header> */}
     {/* <FirstPage/> */}
     <Patient/>
     <Secound/>
     
    </div>
    
  );
}
}
export default App;
