import { useState } from 'react'

import './App.css'
import Accordion from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/stra-rating'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data'
import QRCodeGenerator from './components/qr-code-generator'
import LightDarkMode from './components/light-dark-mode'
import ScrollIndicator from './components/scroll-indicator'



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
      {/* <QRCodeGenerator/> */}



      {/* 
<LightDarkMode/> */}


 <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />


    </>
  )
}

export default App
