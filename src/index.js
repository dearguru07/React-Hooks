import React from "react";
import ReactDOM from "react-dom/client";
import CallBack from "./useCallback";
// import EffectHookss from "./useEffect"
import HookEffect from "./useEffect";
import Context from "./context";
import { useRef } from "react";


// const App = () => {
//   const [a,seta]=useState(15)
//   return <div>
//       <h3>{a}</h3>
//       <button onClick={()=>{
//         seta(10)
//       }}>click here</button>
//   </div>;
// };

const AppLay=()=>{
  const personName=useRef()
  const personEmail=useRef()
  const personPassword=useRef()

  function data(){
    console.log(personName.current.value)
    console.log(personEmail.current.value)
    console.log(personPassword.current.value)
  }

  return <div>
    <input placeholder="name.." type="text" ref={personName}></input>
    <input placeholder="email.." type="email" ref={personEmail}></input>
    <input placeholder="password.." type="password" ref={personPassword}></input>
    <button onClick={data}>Click Here</button>
    <h3>HELOO</h3>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
// root.render(<HookEffect/>);
root.render(<AppLay/>);
// root.render(<CallBack />);




// const StateEff=()=>{
  //   const [value,setValue]=useState(2)
  //   return (<div>
  //     <h2>{value}</h2>
  //     <button onClick={()=>{
  //       setValue(value)
  //     }}>click here</button>
  //   </div>)
  // }
  // root.render(<StateEff/>)