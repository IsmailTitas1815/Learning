import React, { useState, useEffect } from 'react';

const Test = props => {
    const [myName, setMyName] = useState("");
    const [myInfo, setMyInfo] = useState({
        a: "hello",
        b: "world"
    });
    const changeState = () => {
        setMyName("Ismail Hasan");
        setMyInfo({
            ...myInfo,
            b: "New World"
        });

    }
    useEffect(() => {
        console.log(myInfo);
    }, [])

    return (
        <div>
            <button onClick={changeState}>Change</button>

        </div>
    )
}

export default Test;