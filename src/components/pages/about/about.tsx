import React from 'react'
import './about.scss'
import {AboutInfo} from "./about-info/about-info";
import {aboutInfos} from "../../../content/about";


export const AboutPage = () => {
    return (
        <div className='about'>
            <section className="about__top">
                <div className="about__top__inner">
                    <h3 className="about__sub-title">About Escape.</h3>
                    <h1 className="about__title">Be Prepared
                        For The Mountains And Beyond!</h1>
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