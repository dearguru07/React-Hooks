import React, { useState } from "react";
import { useCallback } from "react";

const Guru=new Set()

const CallBack=()=>{
    const [one,setOne]=useState(0)
    const [two,setTwo]=useState(0)
    const [three,setTree]=useState(0)

    

    const first=useCallback(()=>{
        setOne(one+1)
    },[one])

    const second=useCallback(()=>{
        setOne(one+1)
    },[two])
    const third=useCallback(()=>{
        setOne(one+1)
    },[three])
    Guru.add(first)
    Guru.add(second)
    Guru.add(third)
    console.log(Guru)
    return <div>
        <h3>{one}</h3>
        <h3>{two}</h3>
        <h3>{three}</h3>
        <button onClick={first}>counter-1</button>
        <button onClick={second}>counter-2</button>
        <button onClick={third}>counter-3</button>
    </div>
}
export default CallBack;