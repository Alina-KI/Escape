import React from 'react'
import './welcome.scss'

export const Welcome = () => {
    return (
        <section className="welcome">
            <div className="container welcome__inner">
                <h1 className="welcome__title">Let's do it together.</h1>
                <h5 className="welcome__description">We travel the world in search of stories. Come along for the ride.</h5>
                <button className="welcome__to-latest-posts">View Latest Posts</button>
            </div>
        </section>
    )
}