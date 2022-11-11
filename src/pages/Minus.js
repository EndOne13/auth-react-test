import React from 'react';
import {useDispatch} from "react-redux";
import {decrement} from "../redux/test/slice";

function Minus() {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}
export default Minus;