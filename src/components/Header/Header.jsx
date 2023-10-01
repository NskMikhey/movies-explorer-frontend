import React from 'react';
import headerLogo from '../../images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  // Бургер меню
  const [menuBurgerActive, setMenuBurgerActive] = React.useState(false);
  function handleOpenMenu() {
    setMenuBurgerActive(!menuBurgerActive);
  }

  const classHeader = props.loggedIn ? 'header header_open' : 'header';

  return (
    <header
      className={
        props.isLanding ? `${classHeader} header_landing` : classHeader
      }
    >
      <nav className='header__nav'>
        <Link className='header__link button-hover' to='/' title='Movies'>
          <img className='header__logo' src={headerLogo} alt='Логотип Movies' />
        </Link>
        {props.loggedIn && (
          <>
            <div
              className={
                menuBurgerActive
                  ? 'header__menu header__menu_open'
                  : 'header__menu'
              }
            >
              <ul className='header__list-menu header__list-menu_site'>
                {menuBurgerActive && (
                  <li className='header__item-menu'>
                    <NavLink className='header__link-menu link-hover' to='/'>
                      Главная
                    </NavLink>
                  </li>
                )}
                <li className='header__item-menu'>
                  <NavLink className='header__link-menu link-hover' to='/movies'>
                    Фильмы
                  </NavLink>
                </li>
                <li className='header__item-menu'>
                  <NavLink className='header__link-menu link-hover' to='/saved-movies'>
                    Сохранённые фильмы
                  </NavLink>
                </li>
                <li className='header__item-menu'>
                  <Link
                    className='header__link-menu link-hover header__link-menu_profile'
                    to='/profile'
                  >
                    Аккаунт
                  </Link>
                </li>
              </ul>
            </div>
            <button
              className={
                menuBurgerActive
                  ? 'header__menu-burger header__menu-burger_active button-hover'
                  : 'header__menu-burger button-hover'
              }
              type='button'
              aria-label='Меню'
              onClick={handleOpenMenu}
            />
          </>
        )}
        {!props.loggedIn && (
          <ul className='header__list-menu header__list-menu_auth'>
            <li className='header__item-auth'>
              <Link
                className='header__link-menu header__link-menu_auth link-hover'
                to='/signup'
              >
                Регистрация
              </Link>
            </li>
            <li className='header__item-auth'>
              <Link
                className='header__link-menu header__link-menu_button button-hover'
                to='/signin'
              >
                Войти
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
