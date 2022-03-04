import './featured-post.scss'
import {Webcam} from "../../../api/webcams/list";

type Props = Webcam


export const FeaturedPost = ({title, image, location}: Props) => {
    return (
        <article className='featured-post' style={{backgroundImage: `url(${image.current.preview})`}}>
            <a className='featured-post__link' href={location.wikipedia}>
                <h4 className='featured-post__title'>{title}</h4>
            </a>
            <p className='featured-post__location'>{location.country} {location.city} {location.region}</p>
            <span className='featured-post__timezone'>{location.timezone}</span>
        </article>
    )
}