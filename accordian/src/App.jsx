import { useState } from 'react'

import './App.css'
import Accordion from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/stra-rating'
import  ImageSlider  from './components/image-slider'
import LoadMoreData from './components/load-more-data'
import QRCodeGenerator from './components/qr-code-generator'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* /* accordian  */}
      {/* <Accordion/> */}

      {/* random color component */}
      {/* <RandomColor/> */}
{/* 
      <StarRating noOfStars={10}/> */}
   

      {/* image slider */}

      {/* <ImageSlider url={'https://picsum.photos/v2/list'} 
      limit={'10'} page={'1'} />


      <LoadMoreData/> */}
      <QRCodeGenerator/>
    </>
  )
}

export default App
