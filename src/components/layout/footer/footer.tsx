import React from 'react'
import './footer.scss'
import {FooterBot} from "./footer-bot/footer-bot";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <h2 className="footer__title">Stay in Touch</h2>
                <form className="footer__form">
                    <input className="footer__form__input" type="text" placeholder="Enter your email address"/>
                    <button className="footer__form__button">Submit</button>
                </form>
            </div>
            <FooterBot/>
        </footer>
    )
}