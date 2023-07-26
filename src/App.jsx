import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [smiles, setSmiles] = useState(0)

  useEffect(() => {
    const smileCount = JSON.parse(localStorage.getItem('smileCount'));
    if (smileCount == null){
      localStorage.setItem('smileCount', "0");
      setSmiles(0)
    } else {
      setSmiles(parseInt(smileCount));
    }
  }, []);

  function changeSmileCount(increment){
    localStorage.setItem('smileCount', JSON.stringify(smiles + increment));
    setSmiles(smiles + increment);
  }

  return (
    <div className="content">
      <h2>Smile Counter</h2>
      <p>Try to keep your smile count as high as possible by spreading joy.</p>
      <p>Click <code>+</code> when you make someone smile</p>
      <p>Click <code>-</code> when you make someone feel sad </p>
      <span>SMILE COUNT: <strong>{smiles}</strong> </span>
      <button onClick={() => changeSmileCount(1)}>+</button>
      <button onClick={() => changeSmileCount(-1)}>-</button>
    </div>
  )
}

export default App
