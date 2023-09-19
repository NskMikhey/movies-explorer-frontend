import {Link, useNavigate} from "react-router-dom";
import "./NavAnon.css"

export function NavAnon() {
  const navigate = useNavigate();

  return (
    <div className="nav-home">
      <nav className="nav-home__container">
        <ul className="nav-home__links list">
          <li>
            <button className="nav-home__button button-hover" type="button" onClick={(e) => navigate("/signup")}>
              Регистрация
            </button>
          </li>
          <li>
            <button className="nav-home__button-login button-hover" type="button" onClick={(e) => navigate("/signin")}>
              Войти
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}