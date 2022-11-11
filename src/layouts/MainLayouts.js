import React from 'react';
import {Outlet} from "react-router-dom";

function MainLayouts({state}) {


    return (
        <div>
            <span>{state}</span>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayouts;