import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/jsx/Home"
import About from './components/jsx/About'
import Contact from './components/jsx/Contact'
import Skills from './components/jsx/Skills'
import Work from './components/jsx/Work'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/work" element={<Work/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
