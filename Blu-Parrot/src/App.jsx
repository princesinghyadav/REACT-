import { useState } from 'react'
import './App.css'
import Content from './components/content'
import Landing from './components/landing'
import Footer from './components/footer'
 
 import Linkk from './Routes/Link'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div  className=' container mx-auto'>
      

      <Linkk/>
       <Footer/>
      
      </div>
   
     
    </>
  )
}

export default App
