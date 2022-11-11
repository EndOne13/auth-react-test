import React from 'react';
import {useDispatch} from "react-redux";
import {increment} from "../redux/test/slice";

function Plus() {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
}

export default Plus;