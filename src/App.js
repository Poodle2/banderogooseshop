import React, {createContext, useEffect, useState} from "react";
import {RouterProvider} from 'react-router-dom'
import axios from "axios";
import {AppRouter} from "./constants/router/AppRouter";

export const AppContext = createContext({})
const App = () => {

    const [counterProductToDrawer, setCounterProductToDrawer] = useState(0)
    const [cartItems, setCartItems] = useState([])

    const counterPlus = () => {
        if (cartItems.length > counterProductToDrawer - 1) {
            setCounterProductToDrawer(prev => prev + 1)
        }
    }
    const getItems = async () => {
        try {
            let response = await axios.get('https://64ff4975f8b9eeca9e29f2b8.mockapi.io/itemDrawer')
                .then(res => res.data);
            setCartItems(response)
            setCounterProductToDrawer(response.length)
        } catch (error) {
            const message = `Винекла помилка ${error} `
            console.log(message)
        }
    }

    useEffect(() => {
        getItems()
    }, [])


    const addToDrawer = (obj) => {
        axios.post('https://64ff4975f8b9eeca9e29f2b8.mockapi.io/itemDrawer', obj);
        setCartItems((prev) => [...prev, obj])
        counterPlus()
    }

    return (
        <>
            <AppContext.Provider
                value={{cartItems, setCartItems, counterProductToDrawer, setCounterProductToDrawer, addToDrawer}}>
                <RouterProvider router={AppRouter}/>
            </AppContext.Provider>
        </>);
}

export {App}