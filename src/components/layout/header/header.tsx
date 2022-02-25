import React from 'react'
import './header.scss'
import logo from '../../../images/Escape.svg'

export const Header = () => {
    return (
        <header className="header container">
            <a className="header__logo">
                <img src={logo} alt=""/>
            </a>
            <div className="header__menu">
                <a href="" className="header__menu_link">HOME</a>
                <a href="" className="header__menu_link">CATEGORIES</a>
                <a href="" className="header__menu_link">ABOUT</a>
                <a href="" className="header__menu_link">CONTACT</a>
            </div>
        </header>
    );
}