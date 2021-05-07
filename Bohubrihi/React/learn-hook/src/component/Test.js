import React, { useState, useEffect } from 'react';


const Test = props => {
    const [count, setState] = useState(0);
    const [myInfo, infoChange] = useState({
        name: "titas",
        age: 22,
        address: "dhaka"
    });

    const changeState = () => {
        setState(count + 1)
    }

    const changeInfo = () => {
        infoChange({
            ...myInfo,
            number: Math.random()
        })
    }

    useEffect(() => {
        console.log(myInfo);
    }, [])


    return (
        <div>
            <h3>{count}</h3>
            <button onClick={changeState}>Increase</button>
            <h4>{myInfo.name}</h4>
            <h4>{myInfo.age}</h4>
            <h4>{myInfo.number}</h4>
            <h4>{myInfo.address}</h4>
            <button onClick={changeInfo}>Click Click</button>
        </div>
    )
}

export default Test;