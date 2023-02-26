import logo from './logo.svg';
import './App.css'; // App.js 의 디자인
/*App 이 return 하는것이 HTML 으로 출력*/

function Header(){ // 사용자 정의 태그 = 컴포넌트 
      return (
      <header>
        React
      </header>)
}
function Nav(){
  return (
    <nav>
        <ol>
          <li><a href='/read/1'>html</a></li>
          <li><a href='/read/2'>css</a></li>
          <li><a href='/read/3'>js</a></li>
        </ol>
      </nav>
  )
}
function Article(){
  return(
    <article>
    <h2>Hello React</h2>
  </article>
  )
}
function App() {
  return (
    <div >
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
