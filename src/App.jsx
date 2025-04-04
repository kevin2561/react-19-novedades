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
      <Acciones />
      {/* <Use /> */}
      {/* https://chatgpt.com/share/67ef43e1-61f8-8003-8a5e-9f3ecea15a0f */}
    </>
  )
}

export default App
