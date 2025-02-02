import React from 'react'
import FlexBoxExperiment from './FlexBoxExperiment'
import MarkdownRenderer from '../../../components/MarkdownRenderer'

import mdLeaf from '../../../assets/new/testing.md'
function VaultPage({newLeaf}) {
  // test . inconclusive
  // const handleWikiLinkClick = (fileKey) => {
  //   console.log("Wiki link clicked. fileKey:", fileKey);
  //   import(`../../../assets/new/${fileKey}.md`)
  //     .then((module) => {
  //       const newContent = module.default;
  //       newLeaf(
  //         <MarkdownRenderer
  //           content={newContent}
  //           onLinkClick={handleWikiLinkClick}
  //         />
  //       );
  //     })
  //     .catch((error) => {
  //       console.error("Error loading markdown file:", error);
  //     });
  // };

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
          

            <li onClick={() => newLeaf(<MarkdownRenderer content={mdLeaf} onLinkClick={handleWikiLinkClick}/>)}
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
  )
}

export default VaultPage