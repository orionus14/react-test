import { useState } from 'react'
import './App.css'
import user from './user.json'

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
  return <SomeButton name={user.name}></SomeButton>
}

export default App