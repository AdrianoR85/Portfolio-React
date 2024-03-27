import { BiSolidUser, BiSolidHome, BiSolidContact, BiSolidBriefcase } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";

import '../styles/nav.css'
export default function NavMobile() {
  return (
    <nav className='nav-wrapper nav__mobile'>
      <a href="#home"><BiSolidHome /></a>
      <a href="#about"><BiSolidUser /></a>
      <a href="#portfolio"><BiSolidBriefcase /></a>
      <a href="#skill"><GiSkills /></a>
      <a href="#contact"><BiSolidContact /></a>
    </nav>
  )
}
