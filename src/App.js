import React from "react";
import {Route, Routes} from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";

import './scss/app.scss'
import HeaderTest from "./components/HeaderTest";
import Plus from "./pages/Plus";
import Minus from "./pages/Minus";

function App() {


    return (<>
            <HeaderTest/>
            <Routes>
                <Route path='/' element={<MainLayouts/>}>
                    <Route path='plus' element={<Plus/>}/>
                    <Route path='minus' element={<Minus/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
