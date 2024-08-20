import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function SomeButton({name}) {
  const [showName, setShowName] = useState(false);

  const handleClick = () => {
    setShowName(!showName)
  }

  return (
    <>
      <button
        onClick={handleClick}
        className='name-btn'
      >Show the name</button>
      {showName && <div className='my-name'>{name}</div>}
    </>
  )
}

function App() {
  return <SomeButton name="Dmytro"></SomeButton>
}

export default App