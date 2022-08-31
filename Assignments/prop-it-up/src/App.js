import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <PersonCard firstName="Michael" lastName="stafford" age={99} hairColor="brown" />
      <PersonCard firstName="Sara" lastName="white" age={97} hairColor="brown" />
      <PersonCard firstName="Butternut" lastName="White" age={9} hairColor="white/black" />
      <PersonCard firstName="Bnut" lastName="White" age={9.5} hairColor="white/black" />
    </div>
  );
}

export default App;
