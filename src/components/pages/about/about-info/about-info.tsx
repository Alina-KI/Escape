import {NavLink} from "react-router-dom";

type Props = {
    subTitle: string
    title: string
    description: string
    image: string
    link: string
}

export const AboutInfo = ({subTitle, title, description, image, link}: Props) => {
    return (
        <section className='about-info'>
            <div className="about-info__text">
                <h6 className='about-info__sub-title'>{subTitle}</h6>
                <h5 className='about-info__title'>{title}</h5>
                <p className="about-info__description">{description}</p>
                <NavLink to={link} className="about-info__link">{link}</NavLink>
            </div>
            <img src={image} alt="" className="about-info__info"/>
        </section>
    )
}