import { useState } from 'react'
import Header from './components/Header'
import CardsHolder from './components/CardsHolder'
import AddPopup from './components/AddPopup'


function App() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <CardsHolder/>
      <AddPopup isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )

}

export default App
