import React, {useState} from 'react';
import Auth from './pages/Auth';
import Home from './pages/Home';



const App=()=> {
  const [isAuth, setIsAuth] = useState({open: false, form: 'login'});
  return (
    <div className="App">
      <Home isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Auth isAuth={isAuth} setIsAuth={setIsAuth}/>
    </div>
  );
}

export default App;
