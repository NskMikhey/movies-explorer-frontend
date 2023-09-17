import {useNavigate} from "react-router-dom";
import {Auth} from "../Auth/Auth";
import {AuthForm} from "../Auth/AuthForm/AuthForm";

export function Register() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/signin', {replace: true});
  }

  return (
    <main className="page__auth">
      <section className="auth auth_size_l">
        <Auth>Добро пожаловать!</Auth>
        <AuthForm type="register" handleSubmit={handleSubmit}/>
      </section>
    </main>
  )
}