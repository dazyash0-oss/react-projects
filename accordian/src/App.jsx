import { useState } from 'react'

import './App.css'
import Accordion from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/stra-rating'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  {/* accordian  */}
  <Accordion/>

  {/* random color component */}
  <RandomColor/>

<StarRating noOfStars={10}/>
  
  </>
  )
}

export default App
