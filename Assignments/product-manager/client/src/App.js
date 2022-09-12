import Main from './views/Main';
import Detail from './views/Detail';
import Edit from './views/Edit';
import FourOFour from './components/FourOFour';
import './App.css';
import { Routes, Link, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<Main />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/products/:id/edit" element={<Edit />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </div>
  );
}

export default App;
