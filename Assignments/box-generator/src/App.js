import Form from './components/Form.js';
import Box from './components/Box.js';
import './App.css';

import { useState } from 'react'

function App() {
  //state of all boxes
  const [boxes, setBoxes] = useState([])

  //pass a function to the form to add a box? 
  const addBox = (color, width) => {
    let newBox = <Box color={color} width={width} />
    setBoxes([...boxes, newBox])
  }

  return (
    <div className="App">
      <Form addBox={addBox} />
      <div className='boxes-container'>
        {boxes}
      </div>
    </div>
  );
}

export default App;
