import { useState } from 'react'
import './App.css'

function App() {
  const [smiles, setSmiles] = useState(0)

  return (
    <>
      <span>SMILES: </span><strong>{smiles} </strong>
      <button onClick={() => setSmiles((smiles) => smiles + 1)}>
        +
      </button>
      <button onClick={() => setSmiles((smiles) => smiles - 1)}>
        -
      </button>
    </>
  )
}

export default App
