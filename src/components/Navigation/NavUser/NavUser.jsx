import {useContext} from "react";
import {WindowModeContext} from "../../../contexts/WindowModeContext";
import {NavLink, useLocation} from "react-router-dom";
import './NavUser.css'

export function NavUser() {
  const screenType = useContext(WindowModeContext);
  const location = useLocation();

  function getTheme() {
    if (location.pathname === '/' && screenType !== "desktop") {
      return 'light'
    } else if (location.pathname === '/' ) {
      return 'pink'
    }
    return 'light'
  }

  const theme = getTheme();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list list">
        {screenType !== "desktop" && <li className="header__nav-link-container">
          <NavLink
            to="/"
            className={({isActive}) => `header__nav-link header__nav-link_theme_${theme} link-hover${isActive ? ' header__nav-link_active' : ''}`}
          >Главная</NavLink>
        </li>}
        <li className="header__nav-link-container">
          <NavLink
            to="/movies"
            className={({isActive}) => `header__nav-link header__nav-link_theme_${theme} link-hover${isActive ? ' header__nav-link_active' : ''}`}
          >Фильмы</NavLink>
        </li>
        <li className="header__nav-link-mid-container">
          <NavLink
            to="/saved-movies"
            className={({isActive}) => `header__nav-link header__nav-link_theme_${theme} link-hover${isActive ? ' header__nav-link_active' : ''}`}
          >Сохранённые фильмы</NavLink>
        </li>
        <li className="header__nav-account">
          <NavLink to="/profile" className="header__nav-account-link link-hover">Аккаунт
            <div className={`header__nav-account-icon header__nav-account-icon_theme_${theme}`}/>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}