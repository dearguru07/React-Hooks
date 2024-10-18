import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import EffectHook from "./useEffect";
import CallBack from "./useCallback";

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
// root.render(<EffectHook />);
root.render(<CallBack />);
