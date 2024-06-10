import './App.css';
import { useEffect } from "react";
function App (){
  useEffect(()=>{
    console.log("im parent use effect")
  },[])
  return (
    <div className="App">
      <Child1/>
    </div>
  );
}
export default App;
const Child1 = () =>{
  useEffect(()=>{
    console.log("im child 1 use effect")
  },[])
  return(
    <div>
     <Child2/>
    </div>
  )
}
const Child2 = () =>{
  useEffect(()=>{
    console.log("im child 2 use effect")
  },[])
  return(
    <div>
      content of child 2 
    </div>
  )
}