import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab'
function App() {
  return (
    <div className="App">
      <Tab items={
        [{label: "Tab 1", content: "check out my first tab"}, 
        {label: "Tab 2", content: "check out my next tab"},
        {label: "Tab 3", content: "check out my last tab"}]} />
      
    </div>
  );
}

export default App;
