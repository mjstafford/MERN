import logo from './logo.svg';
import './App.css';

import { Routes, Link, Route } from 'react-router-dom'
import Home from "./components/Home.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets/:id" element={<Home />} />
        <Route path="/people/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
