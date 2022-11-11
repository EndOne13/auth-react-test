import {configureStore} from "@reduxjs/toolkit";
import count from './test/slice'


export const store = configureStore({
    reducer: {
        count
    }
})