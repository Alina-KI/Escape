import React from 'react'
import './about.scss'
import {AboutInfo} from "./about-info/about-info";
import {aboutInfos} from "../../../content/about";
import start from '../../../images/Slider.svg'
import social from '../../../images/Social.svg'


export const AboutPage = () => {
    return (
        <div className='about'>
            <section className="about__top">
                <div className="about__container container">
                    <a href="" className="about__img">
                        <img className="about__img__social" src={social} alt=""/>
                    </a>
                    <div className="about__top__inner">
                        <h3 className="about__sub-title">About Escape.</h3>
                        <h1 className="about__title">Be Prepared
                            For The Mountains And Beyond!</h1>
                    </div>
                    <img className="about__img__start" src={start} alt=""/>
                </div>
            </section>
            <div className="about__top__gradient"/>
            <article className="about__content container">
                {aboutInfos.map((aboutInfo, i) => <AboutInfo
                    {...aboutInfo}
                    imgPosition={i % 2 ? 'left' : 'right'}
                />)}
            </article>
        </div>
    )
}