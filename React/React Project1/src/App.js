// import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Router/Home'
import About from './components/Router/About'
import Products from './components/Router/Products'
import ProductDetail from './components/Router/ProductDetail'
import Modal2 from './components/Modal2'
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)
  // useEffect 함수가 매개변수 두 개를 받는다.
  // 1. 콜백함수
  // 2. [] array
  useEffect(()=>{
    console.log('useEffect1');
  },[])

  // Array에 state 값을 넣으면 리액트 그 값을 주시하고 있다가
  // count 업데이트 되면 render State 업데이트 됐다고 알려준다.
  useEffect(()=>{
    console.log('useEffect2', count);
  },[count])

  return (
    <div className="App">
      {console.log('render')}
      <h2>{count}</h2>
      <button onClick={()=>{setCount(count + 1)}}>더하기 1</button>
      {/* <Modal2/> */}
      <Routes>
        {/* Route 안에 속성값이 두 개가 들어간다 path / element 
            1. path : 페이지의 주소 URL
            2. element : path 주소로 이동 했을 때 보여줄 페이지
            / : 기본 경로
        */}
        <Route path='/' element={<Home/>}/>

        {/* nested Routes */}
        {/* Outlet */}
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<h1>멤버~~</h1>}/>
          <Route path='location' element={<h1>로케이션~~!</h1>}/>
        </Route>

        <Route path='/about' element={<About/>}/>
        <Route path='/about/member' element={<h1>멤버~~</h1>}/>
        <Route path='/about/location' element={<h1>로케이션~~!</h1>}/>
        
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;

