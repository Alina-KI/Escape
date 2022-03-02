import React from 'react'
import './footer-bot.scss'
import logo from "../../../../images/Escape.svg";
import {NavLink} from "react-router-dom";

export const FooterBot = () => {
    return (
        <section className="footer-bot">
            <div className="container footer-bot__inner">
                <NavLink to="/" className="footer-bot__logo">
                    <img src={logo} alt=""/>
                </NavLink>
                <div className="footer-bot__menu">
                    <NavLink to="/" className="footer-bot__menu_link">HOME</NavLink>
                    <NavLink to="/" className="footer-bot__menu_link">CATEGORIES</NavLink>
                    <NavLink to="/about" className="footer-bot__menu_link">ABOUT</NavLink>
                    <NavLink to="/" className="footer-bot__menu_link">CONTACT</NavLink>
                </div>
            </div>
        </section>
    )
}