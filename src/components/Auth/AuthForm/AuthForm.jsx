import './AuthForm.css'
import useFormAndValidation from "../../../hooks/useFormAndValidation";
import {AuthFormField} from "./AuthFormField/AuthFormField";
import {Link} from "react-router-dom";
import {ButtonSubmit} from "../../ButtonSubmit/ButtonSubmit";

export function AuthForm({type, handleSubmit}) {
  const {values, handleChange, errors, isValid} = useFormAndValidation();
  return (
    <form name={type} className="auth__form" onSubmit={handleSubmit} noValidate>
      {{
        login: null,
        register: <AuthFormField
          title="Имя"
          type="text"
          name="authenticationText"
          values={values}
          errors={errors}
          minLength={2}
          maxLength={30}
          handleChange={handleChange}
        />
      }[type]}
      <AuthFormField
        title="E-mail"
        type="email"
        name="authenticationEmail"
        values={values}
        errors={errors}
        handleChange={handleChange}
      />
      <AuthFormField
        title="Пароль"
        type="password"
        name="authenticationPassword"
        values={values}
        errors={errors}
        minLength={8}
        maxLength={30}
        handleChange={handleChange}
      />
      <div className="auth__form-basement">
        {{
          login: <ButtonSubmit text="Войти" disabled={!isValid}/>,
          register: <ButtonSubmit text="Зарегистрироваться" disabled={!isValid}/>
        }[type]}
        <p className="auth__form-caption">
          {{
            login:
              <>
                Ещё не зарегистрированы?
                <Link to="/signup" className="auth__form-link-caption link-hover">Регистрация</Link>
              </>,
            register:
              <>
                Уже зарегистрированы?
                <Link to="/signin" className="auth__form-link-caption link-hover">Войти</Link>
              </>,
          }[type]}
        </p>
      </div>
    </form>
  )
}