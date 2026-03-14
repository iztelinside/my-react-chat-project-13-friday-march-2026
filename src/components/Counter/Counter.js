import React from "react";
import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(1);
    const addButton = ()=>{
        return(
            setCount(count + 1)
        )
    }
    const deleteButton = ()=>{
        return(
            setCount(count - 1)
        )
    }
    const multiplyButton = ()=>{
        return(
            setCount(count * 2)
        )
    }
    const devideButton = ()=>{
        return(
            setCount(count / 2)
        )
    }
    const initialButton = ()=>{
        return(
            setCount( 1)
        )
    }

    return(
        <div>
            <h1>The number: {count}</h1>
            <button onClick={addButton}>+</button>
            <button onClick={deleteButton}>-</button>
            <button onClick={multiplyButton}>x</button>
            <button onClick={devideButton}>/</button>
            <button onClick={initialButton}>1</button>
        </div>


    )
}

export default Counter