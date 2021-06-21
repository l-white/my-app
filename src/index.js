import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: "Laura",
  lastName: "White"
}

const userImage = <img src="https://0.gravatar.com/avatar/032eadee734869888f5120264c289713?s=400&d=mm" />

const element = (
  <div>
    <h1>Hello, {formatName(user)}!</h1>
    <p>Good to see you here.</p>
    <img src="https://0.gravatar.com/avatar/032eadee734869888f5120264c289713?s=400&d=mm" width="200"/>
  </div>
);

const reactLink = <h1><a href="http://reactjs.org/">React</a></h1>


ReactDOM.render(
  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  */
 App(),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
