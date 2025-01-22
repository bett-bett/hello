import { useState } from "react";

function Learning() {
  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('stretch');

  const boxStyle = {
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
    border: '1px solid',
    backgroundColor: '#2424',
    height: '300px',
    padding: '10px',
  }

  const arrowStyle = {
    position: "absolute",
    left: "50%",
    width: "0",
    height: "0",
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderTop: "10px solid #f9f9f9",
    whiteSpace: "nowrap",

  };

  const boxItem = {
    border: '1px solid',
    backgroundColor: '#242424',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  }
  
  return (
    <div className="main-edu">
      <h2>Flexbox Demonstration</h2>
      <p>CSS Flexible Box Layout module (Flexbox) arranges a group of items along a primary axis</p>
      
      <p>Experiment with Flexbox properties below. The </p>
      <div style={boxStyle}>
        <div style={arrowStyle}></div>
        <div style={boxItem}>Hello</div>
        <div style={boxItem}>internet</div>
        <div style={boxItem}>people</div>
      </div>

      <div style={{ display:'flex',  justifyContent:'space-between', flexDirection:'row', marginTop: '5px', marginBottom: '30px' }}>
        <label>
          <strong>Flex Direction: </strong>
          <select value={flexDirection} onChange={(e) => setFlexDirection(e.target.value)}>
            <option value="row">Row</option>
            <option value="row-reverse">Row-Reverse</option>
            <option value="column">Column</option>
            <option value="column-reverse">Column-Reverse</option>
          </select>
        </label>
      
        <label style={{  }}>
          <strong>Justify Content: </strong>
          <select value={justifyContent} onChange={(e) => setJustifyContent(e.target.value)}>
            <option value="flex-start">Flex-Start</option>
            <option value="flex-end">Flex-End</option>
            <option value="center">Center</option>
            <option value="space-between">Space-Between</option>
            <option value="space-around">Space-Around</option>
            <option value="space-evenly">Space-Evenly</option>
          </select>
        </label>

        <label style={{ }}>
          <strong>Align Items: </strong>
          <select value={alignItems} onChange={(e) => setAlignItems(e.target.value)}>
            <option value="stretch">Stretch</option>
            <option value="flex-start">Flex-Start</option>
            <option value="flex-end">Flex-End</option>
            <option value="center">Center</option>
            <option value="baseline">Baseline</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default Learning