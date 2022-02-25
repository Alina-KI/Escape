import React from 'react'
import './footer-bot.scss'
import logo from "../../../../images/Escape.svg";

export const FooterBot = () => {
    return (
        <section className="footer-bot">
            <div className="container footer-bot__inner">
                <a className="footer-bot__logo">
                    <img src={logo} alt=""/>
                </a>
                <div className="footer-bot__menu">
                    <a href="" className="footer-bot__menu_link">HOME</a>
                    <a href="" className="footer-bot__menu_link">CATEGORIES</a>
                    <a href="" className="footer-bot__menu_link">ABOUT</a>
                    <a href="" className="footer-bot__menu_link">CONTACT</a>
                </div>
            </div>
        </section>
    )
}