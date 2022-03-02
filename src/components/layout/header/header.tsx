import React from 'react'
import './header.scss'
import logo from '../../../images/Escape.svg'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className="header container">
            <NavLink to="/" className="header__logo">
                <img src={logo} alt=""/>
            </NavLink>
            <div className="header__menu">
                <NavLink to="/" className="header__menu_link">HOME</NavLink>
                <NavLink to="/" className="header__menu_link">CATEGORIES</NavLink>
                <NavLink to="/about" className="header__menu_link">ABOUT</NavLink>
                <NavLink to="/" className="header__menu_link">CONTACT</NavLink>
            </div>
        </header>
    );
}