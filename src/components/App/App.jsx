import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import ErrorPage from '../ErrorPage/ErrorPage';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Main loggedIn={loggedIn} isLanding='true' />}
        />
        <Route
          path='/movies'
          element={
            <Movies loggedIn={loggedIn} isLanding={false} isMoviesPage={true} />
          }
        />
        <Route
          path='/saved-movies'
          element={
            <SavedMovies
              loggedIn={loggedIn}
              isLanding={false}
              isMoviesPage={false}
            />
          }
        />
        <Route
          path='/profile'
          element={
            <Profile
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              isLanding={false}
            />
          }
        />
        <Route
          path='/signup'
          element={<Register setLoggedIn={setLoggedIn} />}
        />
        <Route path='/signin' element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
