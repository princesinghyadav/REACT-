 
 import Appp from './App.jsx'
import './index.css'




function Condition (){
const[nor, norm]=React.useState(false);
return(
  <>
  {nor? <Appp/> :null}
  <button onClick={function(){
    norm(!nor);
  }}> change</button>
  <Appp/>
  </>
)
}
let ror= ReactDOM.createRoot(document.getElementById('root'))
ror.render(<Condition/>)
