import { useState } from 'react'

import './App.css'
import Accordion from './components/accordian'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  {/* accordian  */}
  <Accordion/>
  
  </>
  )
}

export default App
