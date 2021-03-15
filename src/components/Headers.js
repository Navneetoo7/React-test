import React from 'react'

const Headers = ({name}) => {
    return (
        <div style= {{background: 'orange', padding: 30}}>
            <h1 style={{background:'blue', color:'white'}}>headers</h1>
            <h2 style={{background:'white', color:'blue'}}>{name}</h2>
        </div>
    )
}

export default Headers