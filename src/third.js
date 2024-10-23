import React from "react";
import Context from "./context";
import Second from "./second";

const Third=()=>{
    const parent='this is pros data'
    return <div>
        <h3>morng to all </h3>
        <Second data={parent}/>
    </div>
}
export default Third;