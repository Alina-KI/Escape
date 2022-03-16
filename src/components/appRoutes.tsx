import React from 'react'
import {Route, Routes, useParams} from "react-router-dom"
import {MainPage} from "./pages/main/mainPage";
import {AboutPage} from "./pages/about/about";
import {Home} from "./pages/category/home/home";
import {Contact} from "./pages/contacts/contact";


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
                <Route index element={<Home/>}/>
                <Route path=':categorySlug' element={<Category/>}/>
            </Route>
            <Route path={'about'} element={<AboutPage/>}/>
            <Route path={'contact'} element={<Contact/>}/>
        </Routes>
    )
}