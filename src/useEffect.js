import React, { useEffect, useState } from "react";

const EffectHook=()=>{
    const [search,setsearch]=useState('iphone')
    const [count,setcount]=useState(0)

    useEffect(()=>{
        async function Api(){
        const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0445612&lng=77.57268839999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const OriginalData=await data.json()
        console.log(OriginalData)
        }
        Api()
},[])
    return <div>
        <h3>useEffect</h3>
        <input  placeholder='find a mbl' onChange={(x)=>{
            setsearch(x.target.value)
        }}></input>
        <h4>{count}</h4>
        <button onClick={()=>{
            setcount(count+1)
        }}>increse</button>
        <button onClick={()=>{
            setcount(count-1)
        }}>Decrese</button>
    </div>
}
export default EffectHook;