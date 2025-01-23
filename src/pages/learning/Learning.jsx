import { useState } from "react";
import FlexBoxExperiment from "./FlexBoxExperiment"
function Learning() {
  const [showPage2, setShowPage2] = useState(false);
  // const [showGraph, setShowGraph] = useState(true); //sneak peak


  const page1 = {
    position: "relative",
    width: showPage2 ? "100%" : "100%",
    padding: "12px",
    margin: "4px",
    overflow: "auto",
    border: "1px solid #727578",
    transition: "all 0.5s ease",
  };

  const page2 = {
    position: "relative",
    width: showPage2 ? "100%" : "0%",
    padding: showPage2 ? "12px" : "0",
    margin: showPage2 ? "4px" : "0",
    overflow: "hidden",
    border: showPage2 ? "1px solid #727578" : "none",
    transition: "all 0.5s ease",
  };

  const minimizeButton = {
    position: 'absolute',
    top: '0',
    right: '0',
    fontSize: '20px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '10px', 
  };

  return (
    <div className="main-edu">
      <div style={page1}>
        <button
          style={minimizeButton}
          onClick={() => setShowPage2(false)}
          > □ </button>

        <h1>Data Vault</h1>
        <p>Ideally, each page holds an individual thought. each thought ..</p>
        <h2>Vault Pages</h2>
        <h4>CSS</h4>
        <ul>
          <li onClick={() => setShowPage2(true)}
            style={{
              cursor: "pointer",
              textDecoration: "underline"
              }}
              >
                CSS flexbox layout
          </li>  - opens flexbox experiment on the side
        </ul>
      </div>
      <div style={page2}>
      {showPage2 ?  
        <>
          <button
            style={minimizeButton}
            onClick={() => setShowPage2(false)}
          > - </button>
          <FlexBoxExperiment />
        </>
          :
        <></>
      }
      </div>
    </div>
  )
}

export default Learning