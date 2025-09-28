import { useState } from 'react';
import './Counter.css';

function MyComponent() {
    let [count, setCount] = useState(0)

    return (
        <div className='Counter'>
            <h2>Счетчик:</h2>
            <h1>{count}</h1>

            <div>                
                <button 
                    className='minus' 
                    onClick={() => setCount(count - 1)}
                >
                    - Минус
                </button>
                <button 
                    className='plus' 
                    onClick={() => setCount(count + 1)}
                >
                    Плюс +
                </button>
            </div>
        </div>
    );
}

export default MyComponent;