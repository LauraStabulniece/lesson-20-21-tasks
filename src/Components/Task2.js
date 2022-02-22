import { useState } from "react";

function Task2() {
    const [btnName, setName] = useState('Foo')
    const changeBtnName = () => {
        if (btnName === 'Foo') {
            setName('Bar')
        } else if (btnName === 'Bar') {
            setName('Baz')
        } else {
            setName('Foo')
        }
    }
    
return (
    <div>
        <h1 style={{ marginTop: '30px', marginLeft: '20px' }}>Task 2</h1>
        <button style={{marginLeft: '40px'}} onClick={changeBtnName} onChange={btnName}>{btnName}</button>
    </div>
)
}

export default Task2;
