import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from "./components/Home.js"
import Number from "./components/Number.js"
import Word from "./components/Word.js"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:num" element={<Number />} />
        <Route path="/hello" element={<div>Hello</div>} />
        <Route path="/:word/:color1/:color2" element={<Word />} />
      </Routes>
    </div>
  );
}

export default App;
