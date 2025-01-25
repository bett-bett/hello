import { useState } from "react";
import FlexBoxExperiment from "./FlexBoxExperiment"
function Learning() {
  const [showPage2, setShowPage2] = useState(false);
  // const [showGraph, setShowGraph] = useState(true); //sneak peak


  const page1 = {
    position: "relative",
    width: showPage2 ? "100%" : "100%",
    padding: "8px",
    overflow: "auto",
    border: "1px solid #727578",
    transition: "all 0.5s ease",
  };

  const page2 = {
    position: "relative",
    width: showPage2 ? "100%" : "0%",
    padding: showPage2 ? "8px" : "0",
    overflow: "auto",
    border: showPage2 ? "1px solid #727578" : "none",
    transition: "all 0.5s ease",
  };

  const minimizeButton = {
    position: 'absolute',
    top: '0.4%',
    right: '2%',
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
        <div>         
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
          <h4>Test</h4>
          <ul>
            <li onClick={() => console.log('coming soon')}
              style={{
                cursor: "pointer",
                textDecoration: "underline"
                }}
                >
                  Rendering Markdown to jsx
            </li>  - coming soon
          </ul>
        </div>
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