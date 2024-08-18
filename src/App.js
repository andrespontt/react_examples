import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ParentComponent from './component/ParentComponent';
import LineChartComponent from './component/LineChartComponent';
import FormComponent from './component/FormComponent';
import CountriesGridComponent from './component/CountriesGridComponent';
import HomePageComponent from './component/HomePageComponent';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100 bg-dark text-light">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">MyApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/line-chart">Line Chart</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/grid">Countries Component</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/parent">Parent Component</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/form">Form Component</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid flex-grow-1 d-flex flex-column">
          <div className="row flex-grow-1">
            <div className="col-12">
              <Routes>
                <Route path="/line-chart" element={<LineChartComponent />} />
                <Route path="/parent" element={<ParentComponent />} />
                <Route path="/form" element={<FormComponent />} />
                <Route path="/grid" element={<CountriesGridComponent />} />
                <Route path="/" element={<HomePageComponent />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;