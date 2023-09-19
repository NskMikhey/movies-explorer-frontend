import {useLocation} from "react-router-dom";
import {useContext, useState} from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {WindowModeContext} from "../../contexts/WindowModeContext";
import {NavAnon} from "./NavAnon/NavAnon";
import {NavUser} from "./NavUser/NavUser";
import {NavBurger} from "./NavBurger/NavBurger";
import './Navigation.css'

export function Navigation() {
  const location = useLocation();
  const user = useContext(CurrentUserContext);
  const screenType = useContext(WindowModeContext);
  const [burgerActive, setBurgerActive] = useState(false);

  function handleBurger() {
    setBurgerActive((prev) => !prev)
  }

  function getType() {
    if (location.pathname === '/' && !user.isLoggedIn) {
      return "navAnon"
    } else if (screenType !== "desktop") {
      return "navUserBurger"
    } else {
      return "navUser"
    }
  }

  const navType = getType()
  console.log(burgerActive)
  console.log(navType)

  return (
    <>{{
      navAnon: <NavAnon/>,
      navUser: <NavUser/>,
      navUserBurger: <NavBurger onClose={handleBurger} active={burgerActive}/>
    }[navType]}
    </>
  )
}