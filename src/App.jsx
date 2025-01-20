import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import Count from './pages/Count';
import Hello from './pages/Hello';

function App() {
  
  return (
    <>
      <Router>
        <div className='main'>
          <h1 className='main-heading'>
            Bryan's Website
          </h1>
          <nav className='main-nav'>
            <ul>
              <li><Link to="/">landing page (Hello)</Link></li>
              <li><Link to="/about">Here and Now (About)</Link></li>
            </ul>
          </nav>
          <div className="body">
            {/* A <Routes> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Routes>
              <Route path="/about" element={<About/>} />
              <Route path="/count" element={<Count/>} />
              <Route path="/" element={<Hello/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App