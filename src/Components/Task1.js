//export default function Task1(){} šāds ari var būt pieraksts


import { useState } from "react";

function Task1() {
    const [text, setText] = useState('Foo')

    const changeText = () => {
        // if (text = 'Foo') {
        //     setText('Bar')
        // } else {
        //     setText('Foo')
        // }
        //}
        //vai vienkāršāk:

        setText(text === 'Foo' ? 'Bar' : 'Foo');
    }

    let color = 'red';
    if (text === 'Foo') {
        color = 'blue'
    }

    return (
        <div>
            <h1 style={{ marginTop: '30px', marginLeft: '20px' }}>Task 1</h1>
            <h5 style={{color: color, marginLeft: '40px'}}>{text}</h5>
            <button style={{marginLeft: '40px'}} onClick={changeText}>Click me</button>
        </div>
    )
}

export default Task1;