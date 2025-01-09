 
 
import {useState, useEffect } from 'react';
import './App.css'
  



export default function Appp(){
   const [data, setData]=  React.useState ([]);
   const[page,change]=React.useState(1)
 
async function Fetchingdata(){
  // const [data, setData]= useState([]);
try {
  console.log("buton")
 let res= await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
  let resp= await res.json();
  setData(resp)
// console.log(resp)
} catch (error) {
  console.log(error)
}
}
 console.log(data)
  React.useEffect(
    function(){ 
Fetchingdata();
  },[page])

  return( 
     <>
<h1>click me to continue</h1>
 
<button onClick={function(){
  change(page+1)
}}>next  </button>
<button onClick={function(){
  change(page-1)
}}>previous</button>
{
  data.map((todoo) => {
    return (
    <div key={todoo.id} >
    <h3>hii</h3>
<p> {todoo.id}</p>
<p> { todoo.title }</p>
<h1>hello</h1>


</div>
    )
  })
}
    
    </>
  )
}
