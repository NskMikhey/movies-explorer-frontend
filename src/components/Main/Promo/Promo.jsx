import "./Promo.css"
import landingLogo from "../../../images/landing-logo.svg";

export function Promo() {
  return (
    <section className="promo promo_size_l">
      <img src={landingLogo} alt="Лого проекта" className="promo__logo"/>
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
    </section>
  )
}