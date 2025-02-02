import { useEffect, useState } from "react";
import VaultPage from "./leafs/VaultPage";

function Learning() {
  const [showPage2, setShowPage2] = useState(false);
  const [leftLeaf, setLeftLeaf] = useState();
  const [rightLeaf, setRightLeaf] = useState();
  // const [showGraph, setShowGraph] = useState(true); //sneak peak

  // okay, I want to change how I implement the learning page as I will rendering different data in the page; code components, fetched data(markdown), graphs ...
  /**
   * The learning page has a physical book design flex layout with two div items(like book pages - I will call them leafs) side by side or top and bottom for smaller displays
   * 
   * handle leaf loading and swapping(exchanging right leaf with left leaf)
   *    - array of leafs
   * handle minimizing 
   * 
   */
    
  // need to make a better implementation, this looks too simple, dont trust it. If you see this, please PR with how you would implement this page. Imagine a book, we are flipping through the pages
  // ps avoid unnecessary rerendering
  const addLeaf = (leaf) => {
    // set new leaf to right leaf if not present and showPage
    //  if right leaf is present then set rightleaf to left and set newleaf to right

    if (rightLeaf === undefined) {
      setRightLeaf(leaf);
      setShowPage2(true)
      console.log("new right leaf")
    }
    else {
      console.log(rightLeaf)

      setLeftLeaf(rightLeaf);
      setRightLeaf(leaf);
      console.log("right present so move right leaf to left and add new leaf")

    }
  }

  const removeLeaf = (leaf) => {
    // remove current leaf
    // if remaining leaf is righ leaf then move to left then setShowPage to false

  }
  
  useEffect(() => {
    setLeftLeaf(<VaultPage newLeaf={addLeaf} />);
  }, []);

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
      {/* left Leaf */}
      <div style={page1}>
        { showPage2 ?
          <button
          style={minimizeButton}
          onClick={() => {setShowPage2(false) 
            setTimeout(() => {
              setRightLeaf(false);
            }, 500)}}
          > □ </button>
          // better move on before i continue nit picking on transitions and easing
          :
          <>
          {/* todo: show graph */}
          </>
        }
        
        <div key="leftleaf">{leftLeaf}</div>
      </div>
      
      {/* right Leaf */}
      <div style={page2}>
      {rightLeaf ?  
        <>
          <button
            style={minimizeButton}
            onClick={() => {setShowPage2(false)
              setTimeout(() => {
                setRightLeaf(false);
              }, 500)
            }}
          > - </button>
          <div ley="rightleaf">{rightLeaf}</div>
        </>
          :
        <></>
      }
      </div>
    </div>
  )
}

export default Learning