import React from "react";
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import List from './List';
import Paragraph from './Paragraph';
/*
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
}*/

const hello = React.createElement("p", null, "Hello React.");

const App = () => {
  return (
    <>
      <Header />
      <Paragraph />
      <List />
    </>
    );
}

export default App;
