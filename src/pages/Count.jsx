import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

function Count() {
  const [count, setCount] = useState(0)
  const [showStarter, setStarter] = useState(true)

  const ButtonText = count >= 7 
    ? ` \`\`\` <button onClick={() => setCount((count) => count + 1)}>count is ${count}</button> \`\`\` `
    : `count is ${count}`;
   
  return (
    <>
      <div className='count-body'>
        <h2 style={{cursor: "pointer"}} onClick={() => setStarter(showStarter => !showStarter)}>
          Normal React starter code ↓
        </h2>
          {
            showStarter === false
              ? <></>
              :
            (  
            <div>

            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
              {ButtonText}
              </button>
            </div>

            <div>      
              <a href="https://vite.dev" target="_blank" rel="noreferrer">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>

              {[...Array(count)].map((_, index) => (
                <a 
                key={index} 
                href="https://react.dev" 
                target="_blank" 
                rel="noreferrer"
                title="Why is the first react logo the only spinning logo? PR"
                >
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              ))}
            </div>
          </div>
          )
        } 
      </div>
    </>
  )
}

export default Count