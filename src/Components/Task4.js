import { useState } from "react";

function Task4() {
    const [currentBlock, setCurrentBlock] = useState(0)

    const bg1 = currentBlock === 0? 'red' : 'blue'
    const bg2 = currentBlock === 1? 'red' : 'blue'
    const bg3 = currentBlock === 2? 'red' : 'blue'
    const bg4 = currentBlock === 3? 'red' : 'blue'
    const bg5 = currentBlock === 4? 'red' : 'blue'

    const moveLeft = () => {
        let nextSelected = currentBlock -1
        if (nextSelected < 0) {
            nextSelected = 0
        }
        setCurrentBlock(nextSelected)
    }

    const moveRight = () => {
        let nextSelected = currentBlock +1
        if (nextSelected > 4) {
            nextSelected = 4
        }
        setCurrentBlock(nextSelected)
    }


    return (
        <div>
            <h1 style={{ marginTop: '30px', marginLeft: '20px' }}>Task 4</h1>
            <div style={{display: 'flex', marginLeft: '40px'}}>
            <div style={{height: 100, width: 100, backgroundColor: bg1, margin: 5}}></div>
            <div style={{height: 100, width: 100, backgroundColor: bg2, margin: 5}}></div>
            <div style={{height: 100, width: 100, backgroundColor: bg3, margin: 5}}></div>
            <div style={{height: 100, width: 100, backgroundColor: bg4, margin: 5}}></div>
            <div style={{height: 100, width: 100, backgroundColor: bg5, margin: 5}}></div>
            </div>
            <button style={{marginLeft: '40px'}} onClick={moveLeft}>Left</button>
            <button onClick={moveRight}>Right</button>
        </div>

    )
}

export default Task4;