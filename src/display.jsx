import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
    const{name,age}=useSelector(state=>state.form)
  return (
    <div>
      <h1>name : {name}</h1>
      <h1>age : {age}</h1>
    </div>
  )
}

export default Display
