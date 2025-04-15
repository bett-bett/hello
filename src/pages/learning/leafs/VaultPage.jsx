import React from 'react'
import FlexBoxExperiment from './FlexBoxExperiment'
import MarkdownRenderer from '../../../components/MarkdownRenderer'
import NotesGraph from './NotesGraph'

// Landing page for the vault. 1st leaf
function VaultPage({newLeaf}) {
  return (
    <div>
      <h1>Data Vault</h1>
        <p>Ideally, each page holds an individual thought. each thought ..</p>
        <h2>Vault Pages</h2>
        <div>         
          <h4>CSS</h4>
          <ul>
            {/* here, onclick, I want to change a value that affects the parent component. hmmmm, what to do? */}
            {/* props. lets pass the function in the parent component as a prop */}
            <li onClick={() => newLeaf(<FlexBoxExperiment/>)}
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
          

            {/* <li onClick={() => newLeaf()} */}
            {/* <MarkdownRenderer content={mdLeaf} onLinkClick={handleWikiLinkClick}/> */}
            <li onClick={() => newLeaf(<NotesGraph />)}
              style={{
                cursor: "pointer",
                textDecoration: "underline"
                }}
                >
                  Table of Content
            </li>  - coming soon
          </ul>
        </div>
    </div>
  )
}

export default VaultPage