import './App.css';

import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { Launches } from './views/Launches';
import { OneLaunch } from './views/OneLaunch';
import { NotFound } from './views/NotFound';

import './App.css';

function App() {
  //https://github.com/neilm813/MERN-demos/blob/sept-2022/routing-spacex/src/views/OneLaunch.js
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <header>
        <nav className="text-center">
          <Link to="/launches">Launches</Link>
        </nav>
      </header>

      {/* The view component rendered from the url path will be below the header. */}
      <Routes>
        <Route path="/" element={<Navigate to="/launches" replace />} />
        <Route index path="/launches" element={<Launches />} />
        <Route path="/launches/:id" element={<OneLaunch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;