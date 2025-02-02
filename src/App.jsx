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
import Learning from './pages/learning/Learning';
import FlexBoxExperiment from './pages/learning/leafs/FlexBoxExperiment';
// import Lost from './pages/Lost';


function App() {

  return (
    <>
      <Router>
        <div className='main'>
          <Routes>
            <Route element={<HomeLayout />} >
              <Route path="/count" element={<Count/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/count" element={<Count/>} />
              <Route path="/" element={<Hello/>} />
              <Route path="/edu" element={<Learning/>} />
              <Route path="/edu/flex-box-experiment" element={<FlexBoxExperiment/>} />
              {/* <Route path="*" element={<Lost.jsx/>} /> */}
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App