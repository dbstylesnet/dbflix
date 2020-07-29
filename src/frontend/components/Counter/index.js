import React, { useState } from 'react'

function Counter(props) {
    const [count, setCount] = useState(0)

    function increaseCount(e) {
        console.log(e.target)
        setCount(count + 1)
    }

    return(
        <>
            <div>The current count is: {count} {props.msg}</div>
            <button onClick={(e) => increaseCount(e)}>Increese</button>
            <button onClick={() => setCount(count - 1)}>Decreese</button>
        </>
    )
} 

export default Counter 
