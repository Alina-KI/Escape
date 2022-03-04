import './recent-post.scss'
import {Webcam} from "../../../api/webcams/list";

type Props = Webcam


export const RecentPost = ({title, image, location}: Props) => {
    return (
        <article className='recent-post'>
            <img className='recent-post__img' src={image.current.preview} alt=""/>
            <a className='recent-post__link' href={location.wikipedia}>
                <h4 className='recent-post__title'>{title}</h4>
            </a>
            <p className='recent-post__location'>{location.country} {location.city} {location.region}</p>
            <span className='recent-post__timezone'>{location.timezone}</span>
        </article>
    )
}