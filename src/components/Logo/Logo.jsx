import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
import './Logo.css'

export function Logo() {
  return (
    <Link to="/" className="logo logo_type_flex link-hover">
      <img src={logo} alt="Лого" className="logo__img"/>
    </Link>
  )
}