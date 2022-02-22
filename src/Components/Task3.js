import { useState } from "react";

function Task3() {
    const [balance, setBalance] = useState(10)

    const updateBalance = (amount) => {
        setBalance(balance + amount)
    }

    const updateInputValue = (event) => {
        const newValue = event.target.value
        setBalance(parseInt(newValue))
    }

    return (
        <div>
            <h1 style={{ marginTop: '30px', marginLeft: '20px' }}>Task 3</h1>
            <button style={{marginLeft: '40px'}} onClick={() => updateBalance(-5)}>-5</button>
            <button onClick={() => updateBalance(-1)}>-1</button>
            <input type="number" value={balance} onChange={updateInputValue} />
            <button onClick={() => updateBalance(+1)}>+1</button>
            <button onClick={() => updateBalance(+5)}>+5</button>
        </div>
    )
}

export default Task3;