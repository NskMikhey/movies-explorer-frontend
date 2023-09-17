import './Header.css'
import {useLocation} from "react-router-dom";
import {Logo} from "../Logo/Logo";
import {Navigation} from "../Navigation/Navigation";

export function Header() {
  const location = useLocation();
  return (
    <header className={`header ${location.pathname === '/' ? 'header_theme_promo' : 'header_theme_main'}`}>
      <div className="header__container">
        <Logo/>
        <Navigation/>
      </div>
    </header>
  )
}