import "./NavTab.css"

export function NavTab() {
  return (
    <nav className="nav-tab nav-tab_size_l">
      <ul className="nav-tab__links list">
        <li><a href="/#about-project" className="nav-tab__link link-hover">О проекте</a></li>
        <li><a href="/#techs" className="nav-tab__link link-hover">Технологии</a></li>
        <li><a href="/#about-me" className="nav-tab__link link-hover">Студент</a></li>
      </ul>
    </nav>
  )
}