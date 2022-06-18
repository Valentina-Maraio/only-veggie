import { configureStore } from "@reduxjs/toolkit";
import reducer from './food'
import apifood from './middleware/apifood'

export default function store() {
    return configureStore({
        reducer, 
        middleware:
        (getDefaultMiddleware) => [...getDefaultMiddleware(), apifood]
    })
}