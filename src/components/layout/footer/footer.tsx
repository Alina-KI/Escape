import React from 'react'
import './footer.scss'
import {FooterBot} from "./footer-bot/footer-bot";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <h2 className="footer__title">Stay in touch</h2>
                <hr/>
                <form>
                    <input type="text"/>
                    <button>Submit</button>
                </form>
            </div>
            <FooterBot/>
        </footer>
    )
}