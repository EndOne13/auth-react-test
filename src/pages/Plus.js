import React from 'react';

function Plus({onPlus}) {

    return (
        <div>
            <button onClick={() => onPlus(1)}>+</button>
            <button onClick={() => onPlus(5)}>+5</button>
            <button onClick={() => onPlus(10)}>+10</button>
        </div>
    );
}

export default Plus;