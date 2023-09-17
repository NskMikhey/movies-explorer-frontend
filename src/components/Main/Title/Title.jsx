import './Title.css'

export function Title({children, additionalSectionTitleClassName = ''}) {
  return (
    <h2 className={`landing__section-title ${additionalSectionTitleClassName}`}>{children}</h2>
  )
}