import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const ButtonText = count >= 7 
    ? ` \`\`\` <button onClick={() => setCount((count) => count + 1)}>count is ${count}</button> \`\`\` `
    : `count is ${count}`;
   
  return (
    <>
      <div>
        <h2>Normal React starter code</h2>
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
              >
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default App