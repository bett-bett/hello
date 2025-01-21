import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './pages/About';
import Count from './pages/Count';
import Hello from './pages/Hello';
import HomeLayout from './layout/HomeLayout';

function App() {
  
  return (
    <>
      <Router>
        <div className='main'>
          <HomeLayout />

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