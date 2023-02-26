import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //아래에 <App/ > .은 현재 디렉토리 의미한다
import reportWebVitals from './reportWebVitals';
/*입구, index.js 파일을 찾고 여기 적힌대로 동작한다.*/ 

const root = ReactDOM.createRoot(document.getElementById('root')); 
/* root라는 아이디 아래 나오게해라 
root 는? public/index.html 안에 존재*/
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
