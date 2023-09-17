import './ButtonSubmit.css'

export function ButtonSubmit({disabled, text}) {
  return (
    <button
      type="submit"
      className={`button-submit button-hover button-submit_size_l button-submit_theme_dark${disabled ? ' button-submit_disabled' : ''}`}
      disabled={disabled}
    >
      {text}
    </button>
  )
}