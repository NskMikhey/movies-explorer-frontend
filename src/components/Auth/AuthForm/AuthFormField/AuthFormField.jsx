import './AuthFormField.css'

export function AuthFormField({title, type, name, values, errors, handleChange, minLength = null, maxLength = null}) {
  return (
    <label className="auth__form-field-label">
      <span className="auth__form-field-title">{title}</span>
      <input
        type={type}
        name={name}
        value={values[name] || ""}
        onChange={handleChange}
        required
        minLength={minLength}
        maxLength={maxLength}
        placeholder=""
        className="auth__form-field-input input-focus"/>
      <span className="auth__form-field-error">{errors[name]}</span>
    </label>
  )
}