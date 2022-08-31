import PersonCard from './components/PersonCard.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Michael" lastName="stafford" age={99} hairColor="brown" />
      <PersonCard firstName="Sara" lastName="white" age={97} hairColor="brown" />
      <PersonCard firstName="Butternut" lastName="White" age={9} hairColor="white/black" />
      <PersonCard firstName="Bnut" lastName="White" age={9.5} hairColor="white/black" />
    </div>
  );
}

export default App;
