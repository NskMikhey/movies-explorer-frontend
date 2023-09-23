import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';

function App() {
  const [
    loggedIn,
    // setLoggedIn  
  ] = useState(false);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main loggedIn={loggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
