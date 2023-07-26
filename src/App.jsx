import { useState } from 'react'
import './App.css'

function App() {
  const [smiles, setSmiles] = useState(0)

  return (
    <div className="content">
      <h2>Smile Counter</h2>
      <p>Try to keep your smile count as high as possible by spreading joy.</p>
      <p>Click <code>+</code> when you make someone smile</p>
      <p>Click <code>-</code> when you make someone feel sad </p>
      <span>SMILES: <strong>{smiles}</strong> </span>
      <button onClick={() => setSmiles((smiles) => smiles + 1)}>+</button>
      <button onClick={() => setSmiles((smiles) => smiles - 1)}>-</button>
    </div>
  )
}

export default App
