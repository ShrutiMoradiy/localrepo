import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer, useState } from "react";

function UseReducer() {

    // const [count, setCount] = useState(0);
    const reducer = (state, action) => {
        if(action.type === "INC") return (state = state + 1);
        if(action.type === "DEC") {
            let num = 0 ;
            state > 1 ? (num = state - 1) : (num = 0);
            return num;
        }
        return state;
    }

   const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="container">
      <button className="icon" onClick={() => dispatch({type : "INC"})}>
        +
      </button>
      <h1>{count}</h1>
      <button
        className="icon minus_icon"
        onClick={() => dispatch({type : "DEC"})}>
        -
      </button>
    </div>
  );
}

export default UseReducer;
