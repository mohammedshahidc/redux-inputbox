import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { submit } from './formslice'

const Form = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const dispatch = useDispatch()

    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <label>Name : </label>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /><br />
                <label>Age : </label>
                <input type="text" value={age} onChange={(e) => { setAge(e.target.value) }} /><br />
                <button onClick={() => { dispatch(submit({ name, age })) }}>Submit</button>
            </form>
        </div>
    )
}

export default Form
