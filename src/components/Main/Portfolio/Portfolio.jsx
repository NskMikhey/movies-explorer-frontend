import {Link} from "react-router-dom";
import {portfolio} from "../../../utils/data";
import './Portfolio.css'

export function Portfolio() {
  return (
    <section className="portfolio portfolio_size_l">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list list">
        {portfolio.map((item, index) => {
          return <li key={index} className="portfolio__list-element">
            <Link className="portfolio__link link-hover" to={item.url} target="_blank">
              {item.title}
              <span className="portfolio__icon">↗</span>
            </Link>
          </li>
        })}
      </ul>
    </section>
  )
}