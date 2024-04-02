import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    // const [first, setfirst] = useState("Ram")
    // const [a, setA] = useState("Ram")
  return (
    // <div className="App">
    //     <p> Parent: {a} </p>
    //     {/* paren to child */}
    //     {/* <Child name="Ram" age="18" /> */}
    //      {/* <Child name={first} setName={setfirst} age="18" /> */}
    //     <Child X={a} setX={setA} />
    // </div>
    <>
     <p> Parent </p>
      <Child />
    </>
  )
}

export default Parent
