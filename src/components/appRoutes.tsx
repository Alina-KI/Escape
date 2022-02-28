import React from 'react'
import {Route, Routes, useParams} from "react-router-dom"
import {MainPage} from "./pages/main/mainPage";
import {AboutPage} from "./pages/about/about";


export const Category = () => {
    const {categorySlug} = useParams()
    return (
        <div>
            {categorySlug}
        </div>
    )
}
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}>
                <Route index element={<div>КАТЕГОРИЯ НЕ ВЫБРАНА</div>}/>
                <Route path=':categorySlug' element={<Category/>}/>
            </Route>
            <Route path={'about'} element={<AboutPage/>}/>
        </Routes>
    )
}