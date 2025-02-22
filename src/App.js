import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Strategies from './components/Strategies';
import Tips from './components/Tips';
import Articles from './components/Articles';
import Videos from './components/Videos';
import Organizations from './components/Organizations';
function App() {
  /*return (
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
  );*/
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='strategies' element={<Strategies/>}>
            <Route index element={<Tips/>}/>
            <Route path='articles'element={<Articles/>}/>
            <Route path='videos'element={<Videos/>}/>
            <Route path='organizations'element={<Organizations/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
