import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
 
import './App.css'
import Component from './compnent/postitem.jsx'

function App() {
  const [count, setCount] = useState(1)
  const [data ,setdata]=useState([])
  const [isloading,loaded]=useState([true])

 async function fetchdata(){
  try {
    let res= await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${count}`);
    let final = await res.json();
    // console.log(final)
   
      setdata(final)
       loaded(false)
      console.log(data)


    } catch (error) {
      console.log(error)
    }
 }
useEffect(function(){
fetchdata()
},[count])



  return (
    <>
      {  isloading ?<h1>page is loading........ </h1>:(
        <div >
    <Component data={data}  />
   <div  style={{ justifyContent:"space-around", margin:"18px",display:"flex"}}>
    <button onClick={()=>
      setCount(count+1)}>next</button>
      <h3>{count}</h3>
    <button onClick={()=>
    setCount(count-1)}>previous</button>
    </div>
    </div>
     
      )
    
    }
      
    </>
  )
}

export default App
