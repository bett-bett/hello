import FlexBoxExperiment from "./FlexBoxExperiment"
function Learning() {
  const sidebyside = {

    width: "100%",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    padding: "-10px",
    boxSizing: "border-box",
    overflow: "auto",
    justifyContent: "space-between"
  }

  return (
    <div className="main-edu">
      <div style={sidebyside}>

      </div>
      
      <FlexBoxExperiment />
    </div>
  )
}

export default Learning