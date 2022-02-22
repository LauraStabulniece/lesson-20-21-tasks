function Task6() {

    const items = [];

    for (let i = 0; i < 20; i++) {
        let text = ''
        let color = ''

        if (i % 2 == 0 && i % 3 == 0) {
            text = 'Fizz Bazz';
            color = 'purple'
        } else if (i % 2 == 0) {
            text = 'Fizz';
            color = 'green'
        } else if (i % 3 == 0) {
            text = 'Bazz';
            color = 'blue'
        } else {
            text = i;
            color = 'pink'
        }



        items.push(
            <li style={{ color: color }} key={i}>
                {text}
            </li>
        )
    }


    return (
        <div className="conatainer">
            <div className="row">
                <div className="col">
                    <h1 style={{ marginTop: '30px', marginLeft: '20px' }}>Task 6</h1>
                </div>
            </div>
            <div className="row" style={{ marginLeft: '40px' }}>
                <ul>
                    {items}
                </ul>
            </div>
        </div>
    )
}

export default Task6;