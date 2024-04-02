import React from 'react'
import { useContext } from 'react'
import { AppContext } from './UseContext'
import UseContext from "./UseContext";


function Child() {
const userData = useContext(AppContext);
  return (
    <>
      {/* <p> Child {props.name} is {props.age} years old</p>
      <button onClick={() => props.setName("Ramesh")}>Click</button> */}

      {/* <p> Child </p>
      <button onClick={() => props.setX("Ramesh")}>Click</button>
       */}

       <p>Child = My name is {userData.name} and age is {userData.age}.</p>
    </>
  )
}

export default Child
