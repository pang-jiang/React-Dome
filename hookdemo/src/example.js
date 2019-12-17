import React, { useState } from 'react'

function Example() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=>{setCount(count)}}>Click Me</button>
        </div>
    )
}

export default Example;