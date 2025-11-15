import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <span>Total Clicks: {count}</span>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
