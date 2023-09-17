import {Title} from "../Title/Title";
import './Techs.css'
import {technologyList} from "../../../utils/data";

export function Techs() {
  return (
    <section className="techs techs_size_l" id="techs">
      <Title additionalSectionTitleClassName="landing__section-title_height_s">Технологии</Title>
      <h3 className="techs__info-title">7&nbsp;технологий</h3>
      <p className="techs__info-subtitle">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили
        в дипломном проекте.</p>
      <ul className="techs__technology-list list">
        {technologyList.map((tech, i) => {
          return <li key={i} className="techs__technology-element">{tech}</li>
        })}
      </ul>
    </section>
  )
}