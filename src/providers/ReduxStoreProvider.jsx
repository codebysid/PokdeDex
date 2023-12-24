"use client"
import React from 'react'
import { Provider } from "react-redux";
import { store } from "../redux-store/store";

const ReduxStoreProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxStoreProvider
