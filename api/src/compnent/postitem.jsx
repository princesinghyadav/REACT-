

export default function Component({data}){


    return (
        <>
        <h1>This is the list to of rendering </h1>
        
      { 
      data.map((todoo) => {
        return (
        <div style={{border:"2px solid black", margin:"18px"}}  key={todoo.id} >
     <p>id:- {todoo.id}</p>
    <p> title:- { todoo.title }</p>
     
    
    
    </div>
        )
      })
    }
        
        
          
        </>
      )


     
}