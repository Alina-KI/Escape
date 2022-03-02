import {NavLink} from "react-router-dom";
import {AboutInfo as AboutInfoType} from "../../../../content/about";
import './about-info.scss'

type Props = AboutInfoType

export const AboutInfo = ({subTitle, title, description, image, link}: Props) => {
    return (
        <section className='about-info'>
            <h6 className='about-info__sub-title'>{subTitle}</h6>
            <h5 className='about-info__title'>{title}</h5>
            <p className="about-info__description">{description}</p>
            <NavLink to={link} className="about-info__link">read more</NavLink>
            <img src={image} alt="" className="about-info__img"/>
        </section>
    )
}