import '../styles/header.css'

import useWindowWidth from "../hook/useWindowWidth.jsx"
import NavDesktop from './NavDesktop.jsx';
import NavMobile from './NavMobile.jsx';
export default function Header() {
  const windowWidth = useWindowWidth();

  return (
    <header className='header'>
      <div className="header-wrapper">
        <div className="header__logo">
          <span className="header__logo--letter">A</span>driano
        </div>
        { windowWidth > 421 ? <NavDesktop /> : <NavMobile /> }
      </div>
    </header>
  )
}
