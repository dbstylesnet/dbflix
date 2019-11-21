import React, { useState } from 'react'
// import { Wrapper } from './styles'
// import { Link } from 'react-router-dom'
// import dbflixLogo from '../../images/dbflixLogo.svg'

function Counter({msg}) {
    const [count, setCount] = useState(0);

    function increaseCount(e) {
        console.log(e.target)
        setCount(count + 1)
    }

    function decreaseCount() {
        setCount(count - 1)
    }

    return(
        <><div>The current count is: {count} {msg}  </div>
            <button onClick={(e) => increaseCount(e)}>Increese</button>
            <button onClick={() => setCount(count - 1)}>Decreese</button>
        </>
    )
} 

export default Counter 
