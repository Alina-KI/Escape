import {NavLink} from "react-router-dom";
import {AboutInfo as AboutInfoType} from "../../../../content/about";
import './about-info.scss'

type ImgPosition = 'left' | 'right'

type Props = AboutInfoType & {
    imgPosition?: ImgPosition
}

export const AboutInfo = ({subTitle, title, description, image, link, imgPosition = 'right'}: Props) => {
    return (
        <section className={`about-info ${imgPosition === 'left' ? 'img-left' : ''}`}>
            <h6 className='about-info__sub-title'>{subTitle}</h6>
            <h5 className='about-info__title'>{title}</h5>
            <p className="about-info__description">{description}</p>
            <NavLink to={link} className="about-info__link">read more</NavLink>
            <img src={image} alt="" className="about-info__img"/>
        </section>
    )
}