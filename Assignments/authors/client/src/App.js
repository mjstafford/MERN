import Main from './views/Main';
import New from './views/New';
import Edit from './views/Edit';
import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="authors" />} />
        <Route path="/authors" element={<Main />} />
        {/* <Route path="/authors/:id" element={<ShowOne />} /> */}
        <Route path="/authors/:id/edit" element={<Edit />} />
        <Route path="/authors/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;
