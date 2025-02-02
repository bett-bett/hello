import { useState, useEffect } from "react";

function FlexBoxExperiment() {
  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('stretch');
  const [axis, setAxis] = useState('?');


  const FlexBoxExperimentDemo = {
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
    border: '1px solid',
    backgroundColor: '#22442244',
    height: '300px',
    padding: '10px',
    boxShadow: '0 0 8px 6px rgba(34, 68, 34, 0.5)',
  }


  const boxItem = {
    border: '1px solid',
    backgroundColor: '#242424',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  }

  const codeContainer = {
    whiteSpace: "pre-wrap", 
    wordWrap: "break-word",
    backgroundColor: "#2d2d2d",
    color: "#f8f8f8",
    borderRadius: "3px",
    padding: "12px 9px",
    fontSize: "14px",
    lineHeight: "1.3",
    boxShadow: 'inset 0 0 15px 2px rgba(34, 68, 34, 0.4)',
  }
  useEffect(() => {
    if (flexDirection == "row") {setAxis('→')}
    else if (flexDirection == "row-reverse") {setAxis('←')}
    else if (flexDirection == "column") {setAxis('↓')}
    else if (flexDirection == "column-reverse") {setAxis('↑')}
    else {setAxis('?')}
  }),[flexDirection]

  return (
    <div>
      <h2>Flexbox Demonstration</h2>
      <p>CSS Flexible Box Layout module (Flexbox) arranges a group of items along a primary axis</p>
      <br></br>
      <p>| Experiment with Flexbox properties below:</p>
        <p> | Primary axis {axis}</p>
      <div style={FlexBoxExperimentDemo}>
        <div style={boxItem}>Hello</div>
        <div style={boxItem}>internet</div>
        <div style={boxItem}>people</div>
      </div>

      <div style={{ display:'flex',  justifyContent:'space-around', flexDirection:'row', marginTop: '6px'}}>
        <label>
          <strong>Flex Direction: </strong>
          {/* form field without id and name? come on now, remember the basics */}
          <select 
            id="flex-direction"
            name="flex-direction"
            value={flexDirection} 
            onChange={(e) => setFlexDirection(e.target.value)}>

            <option value="row">Row</option>
            <option value="row-reverse">Row-Reverse</option>
            <option value="column">Column</option>
            <option value="column-reverse">Column-Reverse</option>

          </select>
        </label>
      
        <label >
          <strong>Justify Content: </strong>
          <select 
            id="justifyContent"
            name="justifyContent"
            value={justifyContent} 
            onChange={(e) => setJustifyContent(e.target.value)}>

            <option value="flex-start">Flex-Start</option>
            <option value="flex-end">Flex-End</option>
            <option value="center">Center</option>
            <option value="space-between">Space-Between</option>
            <option value="space-around">Space-Around</option>
            <option value="space-evenly">Space-Evenly</option>

          </select>
        </label>

        <label >
          <strong>Align Items: </strong>
          <select 
            id="alignItems"
            name="alignItems"
            value={alignItems} 
            onChange={(e) => setAlignItems(e.target.value)}>
              
            <option value="stretch">Stretch</option>
            <option value="flex-start">Flex-Start</option>
            <option value="flex-end">Flex-End</option>
            <option value="center">Center</option>
            <option value="baseline">Baseline</option>
            
          </select>
        </label>
      </div>
    <pre style={codeContainer}>
{`.FlexBoxExperiment {
    display: 'flex',`}
    <span style={{fontWeight:"bold",  backgroundColor: '#224422'}}>
    {`

    flex-direction: '${flexDirection}',
    justify-content: '${justifyContent}',
    align-items: '${alignItems}',`}
    </span>
    {`

    border: '1px solid',
    backgroundColor: '#22442244',
    height: '300px',
    padding: '10px',
  }
    `}
      </pre>
    </div>
  )
}

export default FlexBoxExperiment