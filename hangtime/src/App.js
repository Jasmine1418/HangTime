import logo from './logo.svg';
import './App.css';

import Game from './components/Game.js';
//import AuthProvider from './utils/AuthProvider';
//import UserLogin from './components/Login';

function App() {
  return (
    // <AuthProvider>
      <div className="App">
        {/* <UserLogin/> */}
        <Game/>
      </div>
   // </AuthProvider>
  );
}

export default App;
