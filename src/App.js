import logo from './logo.svg';
import './App.css';
import ParentComponent from './component/ParentComponent';
import LineChartComponent from './component/LineChartComponent';



function App() {
  return (
    <div className="App">
      <LineChartComponent />
      <ParentComponent />
    </div>
  );
}

export default App;
