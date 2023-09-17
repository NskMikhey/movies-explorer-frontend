import {useNavigate} from "react-router-dom";
import {Auth} from "../Auth/Auth";
import {AuthForm} from "../Auth/AuthForm/AuthForm";

export function Login({setCurrentUser}) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentUser((prev) => ({...prev, isLoggedIn: true}));
    navigate('/movies', {replace: true});
  }

  return (
    <main className="page__auth">
      <section className="auth auth_size_l">
        <Auth>Рады видеть!</Auth>
        <AuthForm type="login" handleSubmit={handleSubmit}/>
      </section>
    </main>
  )
}