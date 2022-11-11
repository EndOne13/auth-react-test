import React, {useState} from 'react';
import {Link} from "react-router-dom";
//Navigation
function HeaderTest({plus, minus}) {

    return (
        <div style={{display: "flex"}}>
            <Link  to="/plus">plus</Link>
            <Link style={{marginLeft: 10}} to="/minus">minus</Link>
        </div>
    );
}

export default HeaderTest;