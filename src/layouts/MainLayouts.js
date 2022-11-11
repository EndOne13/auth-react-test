import React from 'react';
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

function MainLayouts() {

    const {count} = useSelector(state => state.count)

    return (
        <div>
            <span>{count}</span>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayouts;