import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import ErrorPage from '../ErrorPage/ErrorPage';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  const [
    loggedIn,
    // setLoggedIn
  ] = useState(false);

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Main loggedIn={loggedIn} isLanding='true' />}
        />
        <Route
          path='/movies'
          element={<Movies isLanding={false} isMoviesPage={true} />}
        />
        <Route
          path='/saved-movies'
          element={<SavedMovies isLanding={false} isMoviesPage={false} />}
        />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
