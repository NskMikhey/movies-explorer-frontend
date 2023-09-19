import './App.css';
import {Route, Routes} from "react-router-dom";
import {Main} from "../Main/Main";
import {useState} from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {WindowModeContext, deviceWidth} from "../../contexts/WindowModeContext";
import {Movies} from "../Movies/Movies";
import useWindowSize from "../../hooks/useWindowSize";
import {Login} from "../Login/Login";
import {Register} from "../Register/Register";
import {Profile} from "../Profile/Profile";
import {NotFound} from "../NotFound/NotFound";
import {SavedMovies} from "../SavedMovies/SavedMovies";

function App() {
  const [currentUser, setCurrentUser] = useState({
    id: "",
    name: "Виталий",
    email: "pochta@yandex.ru",
    isLoggedIn: false
  });

  const screenType = useWindowSize();

  return (
    <div className="page">
      <WindowModeContext.Provider value={screenType}>
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/saved-movies" element={<SavedMovies/>}/>
            <Route path="/profile" element={<Profile setCurrentUser={setCurrentUser}/>}/>
            <Route path="/signin" element={<Login setCurrentUser={setCurrentUser}/>}/>
            <Route path="/signup" element={<Register/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </CurrentUserContext.Provider>
      </WindowModeContext.Provider>
    </div>
  );
}

export default App;
