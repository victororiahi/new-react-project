import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCards from './components/UserCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserCards/>
    </>
  )
}

export default App
