import React, {useEffect, useMemo, useState} from 'react'
import './home.scss'
import {getNewPostsList, Webcam} from "../../../../api/webcams/list"
import {RecentPost} from "../../../shared/recent-post/recent-post";
import {FeaturedPost} from "../../../shared/featured-post/featured-post";

export const Home = () => {
    const [newPosts, setNewPosts] = useState<Webcam[]>([])

    useEffect(() => {
        getNewPostsList().then(setNewPosts)
    }, [])

    const featuredPosts = useMemo(() => newPosts.slice(0, 2), [newPosts])
    const recentPosts = useMemo(() => newPosts.slice(2, 8), [newPosts])

    return (
        <div className="home__inner container">
            <p className="home__title">Featured Posts</p>
            <div className="home__container">
                {featuredPosts.map(p => <FeaturedPost {...p} />)}
            </div>
            <p className="home__title">Most Recent</p>
            <div className="home__container">
                {recentPosts.map(p => <RecentPost {...p} />)}
            </div>
        </div>
    )
}