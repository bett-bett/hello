
function Learning() {

  const boxStyle = {
    display: 'flex',
    flexDirection: 'row',
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

  const boxElement = {
    border: '1px solid',
    backgroundColor: '#242424',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  }
  return (
    <div className="main-edu">
      Coming soon ...
      <h2>Flexbox Demonstration</h2>
      <p>Flexbox - arranges a group of items along a primary axis</p>
      <p>Experiment with Flexbox properties below:</p>

      <div style={boxStyle}>
        <div style={arrowStyle}></div>
        <div style={boxElement}>Hello</div>
        <div style={boxElement}>internet</div>
        <div style={boxElement}>people</div>
      </div>
      
    </div>
  )
}

export default Learning