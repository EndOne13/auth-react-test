import React from 'react';

function Minus({onMinus}) {

    return (
        <div>
            <button onClick={() => onMinus(1)}>-</button>
            <button onClick={() => onMinus(5)}>-5</button>
            <button onClick={() => onMinus(10)}>-10</button>
        </div>
    );
}
export default Minus;