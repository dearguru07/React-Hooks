import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import CallBack from "./useCallback";
// import EffectHookss from "./useEffect"
import HookEffect from "./useEffect";

const App = () => {
  const [a,seta]=useState(15)
  return <div>
      <h3>{a}</h3>
      <button onClick={()=>{
        seta(10)
      }}>click here</button>
  </div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<HookEffect/>);
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