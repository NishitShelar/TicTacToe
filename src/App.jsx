import { useState } from 'react'
import Tic from "./tictactoe/tic"


function App() {
  const [count, setCount] = useState(0)

  return (
    <Tic/>
  )
}

export default App
