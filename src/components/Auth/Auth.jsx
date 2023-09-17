import {Logo} from "../Logo/Logo";
import './Auth.css'

export function Auth({children}) {
  return (
    <>
      <Logo/>
      <h1 className="auth__title">{children}</h1>
    </>
  )
}