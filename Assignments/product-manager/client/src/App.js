import Main from './views/Main';
import FourOFour from './components/FourOFour';
import './App.css';
import { Routes, Link, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<FourOFour />} />
        {/* <Route path="/people/:id" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
