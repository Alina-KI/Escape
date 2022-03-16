import React from 'react'
import './contact.scss'
import Frame from "../../../images/Frame.svg"
import Phone from "../../../images/Phone.png"
import EnvelopeSimple from "../../../images/EnvelopeSimple.png"
import Laptop from "../../../images/Laptop.png"
import Map from "../../../images/MapPin.png"
import {Header} from "../../layout/header/header";

export const Contact = () => {
    return (
        <>
            <div className="contact-container-header">
                <Header/>
            </div>
            <div className="container contact-table">
                <table className="table">
                    <tbody>
                    <tr className="tr__logo">
                        <td><img src={Frame} alt="Logo" className="logo"/></td>
                    </tr>
                    <tr><td className="td-line" colSpan={2}><hr className="line"/></td></tr>
                    <tr>
                        <td className="td-surname">Дмитрий Давкин</td>
                    </tr>
                    <tr>
                        <td className="td-position">Генеральный директор</td>
                    </tr>
                    </tbody>
                </table>
                <table className="table">
                    <tbody>
                    <tr className="tr-align">
                        <td className="td-img">
                            <img src={Phone} alt="Phone" className="img"/>
                        </td>
                        <td className="td-text">
                            <span className="span">+7 (499) 348-19-80;</span>
                            &nbsp;
                            <span className="span">+7 (926) 575-16-40</span>
                        </td>
                    </tr>
                    <tr className="tr-align">
                        <td className="td-img">
                            <img src={EnvelopeSimple} alt="Envelop" className="img"/>
                        </td>
                        <td className="td-text">
                            <span className="span"> ddy@lgc-it.ru;</span>
                            &nbsp;
                            <span className="span">dmitry.davkin@gmail.com</span>
                        </td>
                    </tr>
                    <tr className="tr-align">
                        <td className="td-img">
                            <img src={Laptop} alt="Laptop" className="img"/>
                        </td>
                        <td className="td-text">lgc-it.ru</td>
                    </tr>
                    <tr className="tr-align">
                        <td className="td-img">
                            <img src={Map} alt="Map" className="img"/>
                        </td>
                        <td className="td-text">
                            <span className="span">105082, г. Москва,</span>
                            &nbsp;
                            <span className="span">ул. Фридриха Энгельса,</span>
                            &nbsp;
                            <span className="span">д. 58, стр. 1</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}