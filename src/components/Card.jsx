import { FiLink } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";


import '../styles/card.css'
// eslint-disable-next-line react/prop-types
export default function Card({src, name, link, alt, className, code=""}) {
  return (
    <div className={`card-wrapper ${className}`}>
      <img src={src} alt={alt}/>
      <h4>{name}</h4>
      <div className='card__links'>
        <a href={code} target="_blank"><BiCodeAlt /></a>
        <a href={link} target="_blank"><FiLink /></a>
      </div>
    </div>
  )
}
