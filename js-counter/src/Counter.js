import './Counter.css';
import { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(10);

    const reduceCount = () => {
        setCount(count - 1);
    }

    const increaseCount = () => {
        setCount(count + 1);
    }

    const setCountManually = (event) => {
        let val = Number(event.target.value);
        if (isNaN(val)) {
            alert("Please only enter digits")
        } else {
            setCount(val);
        }
    }

    return (
        <div className="Counter">
            <button className='elements' onClick={reduceCount}>-</button>            
            <input className='elements input' name="countDisplay"  value={count} onChange={setCountManually} />
            <button className='elements' onClick={increaseCount}>+</button>
        </div>
    );
}

export default Counter;