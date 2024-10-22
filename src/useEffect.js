import React, { useEffect, useState } from "react";

const HookEffect = () => {
  const [a, seta] = useState(0);
  useEffect(()=>{
    async function APP() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0445612&lng=77.57268839999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const OriginalData = await data.json();
        console.log(OriginalData);
      }
      APP();
  },[])
  
  return (
    <div>
      <h3>hello world</h3>
      <h4>{a}</h4>
      <button onClick={()=>{
        seta(a+1)
      }}>Click here</button>
    </div>
  );
};
export default HookEffect;
