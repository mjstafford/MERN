import Tabs from './components/Tabs.js';
import './App.css';

function App() {
  //starter data
  const tabsData = [
    { label: "Tab 1", content: "Tab 1 content is showing here!", isSelected: true },
    { label: "Tab 2", content: "Tab 2 content is showing here!!", isSelected: false },
    { label: "Tab 3", content: "Tab 3 content is showing here!!!", isSelected: false }
  ]

  return (
    <div className="App">
      <Tabs tabsData={tabsData} />
    </div>
  );
}

export default App;
