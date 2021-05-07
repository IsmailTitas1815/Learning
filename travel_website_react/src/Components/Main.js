import React, { useState } from 'react'
import Navbar from './Header/Navbar';

function Main() {
    const [name, setName] = useState("");
    return (
        <div >
            <Navbar />
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
    )
}

export default Main;
