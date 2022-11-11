import React from "react";
import {Route, Routes} from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";

import './scss/app.scss'
import HeaderTest from "./components/HeaderTest";
import Plus from "./pages/Plus";
import Minus from "./pages/Minus";

function App() {

    const [state, setState] = React.useState(0)

    const plusHandler = (initialState) => {
        setState((state + initialState))
    }

    const minusHandler = (initialState) => {
        setState((state - initialState))
    }
    return (<>
            <HeaderTest/>
            <Routes>
                <Route path='/' element={<MainLayouts
                    state={state}
                />}>
                    <Route path='plus' element={<Plus
                        onPlus={plusHandler}
                    />}/>
                    <Route path='minus' element={<Minus
                        onMinus={minusHandler}
                    />}/>
                </Route>
            </Routes>
        </>

    );
}

export default App;
