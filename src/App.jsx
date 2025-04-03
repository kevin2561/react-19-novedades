import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Acciones from './pages/Acciones'
import Use from './hooks/Use'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Acciones /> */}
      <Use />
    </>
  )
}

export default App
