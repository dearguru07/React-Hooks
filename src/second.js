import React from "react";
import Third from "./third";
import Context from "./context";

const Second = (props) => {
  return (
    <div>
      <Context data={props.data}/>
    </div>
  );
};
export default Second;
