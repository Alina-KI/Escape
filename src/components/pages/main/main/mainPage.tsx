import React from 'react'
import {Welcome} from "./welcome/welcome"
import {Categories} from "./categoties/categories"
import {Outlet} from "react-router-dom";

export const MainPage = () => {
    return (
        <>
            <Welcome/>
            <Categories/>
            <Outlet/>
        </>
    )
}